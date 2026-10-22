import React, { useCallback, useEffect, useState } from 'react';
import { isWhatsAppConfigured } from '../../data/company';
import { buildEnquiryMessage, buildWhatsAppUrl } from '../../utils/whatsapp';
import type { FormField, FormValues } from '../../types/content';

type Status = 'idle' | 'opened' | 'prepared';
type CopyState = 'idle' | 'copied' | 'failed';

type Options = {
  formId: string;
  topic: string;
  fields: FormField[];
  prefill?: FormValues | null;
};

export function useEnquiryForm({ formId, topic, fields, prefill }: Options) {
  const empty = useCallback(
    (): FormValues => Object.fromEntries(fields.map((f) => [f.name, f.type === 'checkboxes' ? [] : ''])),
    [fields]
  );
  const [values, setValues] = useState<FormValues>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [copyState, setCopyState] = useState<CopyState>('idle');

  useEffect(() => {
    if (!prefill) return;
    setValues((v) => ({ ...v, ...prefill }));
    setErrors((e) => {
      const next = { ...e };
      Object.keys(prefill).forEach((k) => delete next[k]);
      return next;
    });
  }, [prefill]);

  const clearError = (name: string) =>
  setErrors((e) => {
    if (!(name in e)) return e;
    const next = { ...e };
    delete next[name];
    return next;
  });

  const setValue = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    clearError(name);
  };

  const toggleOption = (name: string, option: string) => {
    setValues((v) => {
      const current = Array.isArray(v[name]) ? v[name] as string[] : [];
      return { ...v, [name]: current.includes(option) ? current.filter((o) => o !== option) : [...current, option] };
    });
    clearError(name);
  };

  const validate = (): Record<string, string> => {
    const next: Record<string, string> = {};
    const today = new Date().toISOString().slice(0, 10);
    fields.forEach((f) => {
      const raw = values[f.name];
      if (Array.isArray(raw)) {
        if (f.required && raw.length === 0) next[f.name] = `Please choose at least one option.`;
        return;
      }
      const val = (raw ?? '').trim();
      if (!val) {
        if (f.required) {
          next[f.name] =
          f.type === 'select' ? `Please choose ${f.label.toLowerCase()}.` : `Please enter your ${f.label.toLowerCase()}.`;
        }
        return;
      }
      if (f.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val)) next[f.name] = 'Please enter a valid email address.';
      if (f.type === 'tel' && (!/^[+\d\s()-]+$/.test(val) || val.replace(/\D/g, '').length < 7))
      next[f.name] = 'Please enter a valid phone number.';
      if (f.type === 'number' && (!Number.isInteger(Number(val)) || Number(val) < 1)) next[f.name] = 'Please enter a whole number of 1 or more.';
      if (f.type === 'date' && val < today) next[f.name] = 'Please choose a date from today onwards.';
    });
    return next;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    const firstInvalid = fields.find((f) => next[f.name]);
    if (firstInvalid) {
      const id = firstInvalid.type === 'checkboxes' ? `${formId}-${firstInvalid.name}-0` : `${formId}-${firstInvalid.name}`;
      document.getElementById(id)?.focus();
      setStatus('idle');
      return;
    }
    const text = buildEnquiryMessage(topic, fields, values);
    setMessage(text);
    setCopyState('idle');
    if (isWhatsAppConfigured) {
      window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
      setStatus('opened');
    } else {
      setStatus('prepared');
    }
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
  };

  const reset = () => {
    setValues(empty());
    setErrors({});
    setStatus('idle');
    setMessage('');
    setCopyState('idle');
  };

  return { values, errors, status, message, copyState, setValue, toggleOption, handleSubmit, copyMessage, reset };
}