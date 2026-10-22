import React from 'react';
import type { ServiceItem } from '../types/content';

type ImageServiceCardProps = {
  item: ServiceItem;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  imageAspect?: string;
};

export function ImageServiceCard({ item, footer, children, imageAspect = 'aspect-[16/10]' }: ImageServiceCardProps) {
  const Icon = item.icon;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-cream-300/70 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <div className={`relative overflow-hidden bg-cream-200 ${imageAspect}`}>
        <img
          src={item.image}
          alt={item.imageAlt}
          loading="lazy"
          width={900}
          height={600}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
        
      </div>
      <div className="relative flex flex-1 flex-col px-6 pb-6 pt-10">
        <span className="absolute -top-6 left-6 grid h-12 w-12 place-items-center rounded-full bg-white text-gold-600 shadow-soft ring-4 ring-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-[19px] font-semibold leading-snug">{item.title}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-ink-muted">{item.description}</p>
        {children}
        {footer && <div className="mt-auto pt-5">{footer}</div>}
      </div>
    </article>);

}