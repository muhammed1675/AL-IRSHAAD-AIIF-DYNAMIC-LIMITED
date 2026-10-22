import React from 'react';
import { AlertCircle, CheckCircle2, ChevronDown, Copy, MessageCircle, Send } from 'lucide-react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Label } from '../ui/Label';
import { Button } from '../ui/Button';
import { useEnquiryForm } from './useEnquiryForm';
import { company, isWhatsAppConfigured } from '../../data/company';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import type { FormField, FormValues } from '../../types/content';

type EnquiryFormProps = {
  formId: string;
  topic: string;
  fields: FormField[];
  prefill?: FormValues | null;
  heading?: string;
  intro?: string;
  className?: string;
};

const control =
'h-12 w-full rounded-xl border border-input bg-white px-4 text-[15px] text-navy shadow-none placeholder:text-ink-soft/80 focus-visible:border-gold-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400/40 aria-[invalid=true]:border-destructive';

export function EnquiryForm({ formId, topic, fields, prefill, heading, intro, className = '' }: EnquiryFormProps) {
  const { values, errors, status, message, copyState, setValue, toggleOption, handleSubmit, copyMessage, reset } = useEnquiryForm({
    formId,
    topic,
    fields,
    prefill
  });
  const errorCount = Object.keys(errors).length;
  const today = new Date().toISOString().slice(0, 10);
  const id = (name: string) => `${formId}-${name}`;

  const renderControl = (f: FormField) => {
    const err = errors[f.name];
    const common = {
      id: id(f.name),
      name: f.name,
      'aria-invalid': err ? true : undefined,
      'aria-describedby': err ? `${id(f.name)}-error` : undefined,
      'aria-required': f.required || undefined
    };
    const value = values[f.name] as string ?? '';

    switch (f.type) {
      case 'textarea':
        return (
          <Textarea
            {...common}
            value={value}
            placeholder={f.placeholder}
            rows={5}
            onChange={(e) => setValue(f.name, e.target.value)}
            className={`${control} h-auto min-h-[132px] py-3`} />);


      case 'select':
        return (
          <div className="relative">
            <select {...common} value={value} onChange={(e) => setValue(f.name, e.target.value)} className={`${control} appearance-none pr-10 ${value ? '' : 'text-ink-soft'}`}>
              <option value="">{f.placeholder ?? 'Select an option'}</option>
              {f.options?.map((o) =>
              <option key={o} value={o} className="text-navy">
                  {o}
                </option>
              )}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" aria-hidden="true" />
          </div>);

      case 'checkboxes':{
          const selected = Array.isArray(values[f.name]) ? values[f.name] as string[] : [];
          return (
            <div className="grid gap-2.5 sm:grid-cols-2">
            {f.options?.map((o, i) =>
              <label
                key={o}
                htmlFor={`${id(f.name)}-${i}`}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[14.5px] transition-colors ${
                selected.includes(o) ? 'border-gold-500 bg-cream-100 text-navy' : 'border-input bg-white text-ink'}`
                }>
                
                <input
                  id={`${id(f.name)}-${i}`}
                  type="checkbox"
                  checked={selected.includes(o)}
                  onChange={() => toggleOption(f.name, o)}
                  className="h-4 w-4 accent-[#A0702A]" />
                
                {o}
              </label>
              )}
          </div>);

        }
      default:
        return (
          <Input
            {...common}
            type={f.type}
            value={value}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            inputMode={f.type === 'tel' ? 'tel' : f.type === 'number' ? 'numeric' : undefined}
            min={f.type === 'date' ? today : f.type === 'number' ? 1 : undefined}
            onChange={(e) => setValue(f.name, e.target.value)}
            className={control} />);


    }
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={`rounded-[26px] border border-cream-300/70 bg-white p-6 shadow-soft sm:p-9 ${className}`}>
      {heading && <h3 className="text-[1.6rem] font-semibold leading-tight sm:text-[1.85rem]">{heading}</h3>}
      {intro && <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{intro}</p>}

      <div aria-live="polite">
        {errorCount > 0 &&
        <p className="mt-6 flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-[14px] text-destructive">
            <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            Please check {errorCount === 1 ? 'the highlighted field' : `the ${errorCount} highlighted fields`}.
          </p>
        }
      </div>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        {fields.map((f) => {
          const full = f.full || f.type === 'textarea' || f.type === 'checkboxes';
          const labelContent =
          <>
              {f.label}
              {f.required ?
            <span className="text-gold-600" aria-hidden="true">
                  {' '}
                  *
                </span> :

            <span className="font-normal text-ink-soft"> (optional)</span>
            }
            </>;

          return (
            <div key={f.name} className={full ? 'sm:col-span-2' : ''}>
              {f.type === 'checkboxes' ?
              <fieldset>
                  <legend className="mb-2 text-[14px] font-semibold text-navy">{labelContent}</legend>
                  {renderControl(f)}
                </fieldset> :

              <>
                  <Label htmlFor={id(f.name)} className="mb-2 block text-[14px] font-semibold text-navy">
                    {labelContent}
                  </Label>
                  {renderControl(f)}
                </>
              }
              {errors[f.name] &&
              <p id={`${id(f.name)}-error`} className="mt-1.5 flex items-center gap-1.5 text-[13px] text-destructive">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {errors[f.name]}
                </p>
              }
            </div>);

        })}
      </div>

      <p className="mt-6 text-[13px] leading-relaxed text-ink-soft">
        Please don’t include passport numbers, bank details or other sensitive documents — our team will advise on what’s needed when they follow up.
      </p>

      <Button
        type="submit"
        className="mt-5 h-12 w-full rounded-full bg-gold-600 text-[15px] font-semibold text-white hover:bg-gold-700">
        
        {isWhatsAppConfigured ? <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" /> : <Send className="h-[18px] w-[18px]" aria-hidden="true" />}
        {isWhatsAppConfigured ? 'Continue to WhatsApp' : 'Prepare My Enquiry'}
      </Button>

      <div aria-live="polite">
        {status === 'opened' &&
        <div className="mt-6 rounded-2xl border border-cream-300 bg-cream-100 p-5 text-[14.5px] leading-relaxed text-ink">
            <p className="flex items-center gap-2 font-semibold text-navy">
              <CheckCircle2 className="h-5 w-5 text-gold-600" aria-hidden="true" />
              Your message is ready in WhatsApp
            </p>
            <p className="mt-2 text-ink-muted">
              WhatsApp opened in a new tab with your details filled in. Review the message and press send — your enquiry is only sent once you do.
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-[14px] font-semibold">
              <a href={buildWhatsAppUrl(message)} target="_blank" rel="noopener noreferrer" className="text-gold-700 underline-offset-4 hover:underline">
                Open WhatsApp again
              </a>
              <button type="button" onClick={reset} className="text-navy underline-offset-4 hover:underline">
                Start a new enquiry
              </button>
            </div>
          </div>
        }

        {status === 'prepared' &&
        <div className="mt-6 rounded-2xl border border-cream-300 bg-cream-100 p-5 text-[14.5px] leading-relaxed">
            <p className="flex items-center gap-2 font-semibold text-navy">
              <CheckCircle2 className="h-5 w-5 text-gold-600" aria-hidden="true" />
              Your enquiry message is ready
            </p>
            <p className="mt-2 text-ink-muted">
              Direct WhatsApp messaging isn’t connected on this site yet, so nothing has been sent. Copy the message below and share it with our team
              {company.email ? ' by email' : ' using the contact details on our Contact page'}.
            </p>
            <label htmlFor={`${formId}-prepared`} className="sr-only">
              Prepared enquiry message
            </label>
            <textarea
            id={`${formId}-prepared`}
            readOnly
            value={message}
            rows={6}
            className="mt-4 w-full resize-none rounded-xl border border-cream-300 bg-white p-3.5 text-[13.5px] text-ink" />
          
            <div className="mt-3 flex flex-wrap items-center gap-4 text-[14px] font-semibold">
              <button type="button" onClick={copyMessage} className="inline-flex items-center gap-2 text-gold-700 underline-offset-4 hover:underline">
                <Copy className="h-4 w-4" aria-hidden="true" />
                {copyState === 'copied' ? 'Copied' : 'Copy message'}
              </button>
              {company.email &&
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent(`${topic} enquiry`)}&body=${encodeURIComponent(message)}`}
              className="text-navy underline-offset-4 hover:underline">
              
                  Send by email
                </a>
            }
              <button type="button" onClick={reset} className="text-navy underline-offset-4 hover:underline">
                Start again
              </button>
            </div>
            {copyState === 'failed' && <p className="mt-2 text-[13px] text-destructive">Copying isn’t available in this browser — please select the text and copy it manually.</p>}
          </div>
        }
      </div>
    </form>);

}