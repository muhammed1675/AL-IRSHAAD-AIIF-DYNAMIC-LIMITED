import { useEffect } from 'react';
import { company } from '../data/company';

function setMeta(selector: string, attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    const fullTitle = `${title} | ${company.name}`;
    document.title = fullTitle;
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);

    // Canonical link, so search engines know the preferred address of each page.
    const url = `${company.siteUrl}${window.location.pathname === '/' ? '' : window.location.pathname}`;
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = url;
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
  }, [title, description]);
}
