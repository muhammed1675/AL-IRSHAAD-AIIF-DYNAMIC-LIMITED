import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../ui/Sheet';
import { Logo } from './Logo';
import { LinkButton } from '../LinkButton';
import { navLinks } from '../../data/navigation';
import { company } from '../../data/company';

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-200 bg-cream-50">
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between gap-6 px-5 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) =>
            <li key={link.to}>
                <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                `relative block whitespace-nowrap rounded-md px-2.5 py-2 text-[13.5px] font-medium transition-colors xl:px-3 xl:text-[14px] ${
                isActive ? 'text-gold-600' : 'text-navy/80 hover:text-navy'}`

                }>
                
                  {({ isActive }) =>
                <>
                      {link.label}
                      <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 mx-auto h-[2px] w-5 rounded-full bg-gold-500 transition-opacity ${
                    isActive ? 'opacity-100' : 'opacity-0'}`
                    } />
                  
                    </>
                }
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LinkButton to="/contact" className="hidden !h-11 !px-5 text-[14px] xl:inline-flex">
            Get in Touch
          </LinkButton>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-cream-300 bg-white text-navy lg:hidden">
            
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-[88%] max-w-sm border-l border-cream-200 bg-cream-50 p-0">
          <SheetHeader className="border-b border-cream-200 px-6 py-5 text-left">
            <SheetTitle className="font-display text-lg text-navy">{company.shortName}</SheetTitle>
            <SheetDescription className="text-[13px] text-ink-muted">{company.subName}</SheetDescription>
          </SheetHeader>
          <nav aria-label="Mobile" className="px-3 py-4">
            <ul className="space-y-1">
              {navLinks.map((link) =>
              <li key={link.to}>
                  <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-[17px] font-medium ${
                  isActive ? 'bg-cream-200 text-navy' : 'text-navy/80 hover:bg-cream-100'}`

                  }>
                  
                    {({ isActive }) =>
                  <>
                        {link.label}
                        {isActive && <span className="h-2 w-2 rounded-full bg-gold-500" aria-hidden="true" />}
                      </>
                  }
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <div className="px-6 pb-8 pt-2">
            <LinkButton to="/contact" className="w-full">
              Get in Touch
            </LinkButton>
          </div>
        </SheetContent>
      </Sheet>
    </header>);

}