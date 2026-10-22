import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BoxIcon } from "lucide-react";
type Variant = 'navy' | 'gold' | 'light' | 'ghostLight';
type LinkButtonProps = {
  to: string;
  children: React.ReactNode;
  variant?: Variant;
  icon?: BoxIcon;
  arrow?: boolean;
  className?: string;
};
const base = 'group inline-flex h-12 items-center justify-center gap-2.5 whitespace-nowrap rounded-full text-[14.5px] font-semibold transition-colors duration-200';
const variants: Record<Variant, string> = {
  navy: 'bg-navy px-6 text-white hover:bg-navy-700',
  gold: 'bg-gold-600 px-6 text-white hover:bg-gold-700',
  light: 'border border-cream-300 bg-white pl-1.5 pr-5 text-navy shadow-soft hover:border-gold-400',
  ghostLight: 'border border-white/25 px-6 text-white hover:bg-white/10'
};
export function LinkButton({
  to,
  children,
  variant = 'navy',
  icon: Icon,
  arrow,
  className = ''
}: LinkButtonProps) {
  const showArrow = arrow ?? variant !== 'light';
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = <>
      {Icon && (variant === 'light' ? <span className="grid h-9 w-9 place-items-center rounded-full bg-cream-200 text-gold-600">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span> : <Icon className="h-[18px] w-[18px]" aria-hidden="true" />)}
      <span>{children}</span>
      {showArrow && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />}
    </>;
  if (/^(https?:|mailto:|tel:)/.test(to)) {
    const external = to.startsWith('http');
    return <a href={to} className={cls} {...external ? {
      target: '_blank',
      rel: 'noopener noreferrer'
    } : {}}>
        {content}
      </a>;
  }
  if (to.startsWith('#')) {
    return <a href={to} className={cls}>
        {content}
      </a>;
  }
  return <Link to={to} className={cls}>
      {content}
    </Link>;
}