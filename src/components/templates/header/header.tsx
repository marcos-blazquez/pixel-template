'use client';
import { useState, useEffect } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Button } from '@material-tailwind/react';

export const Header = ({
  links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  button = {
    label: 'Contact',
    href: '/contact',
  },
}) => {
  const [isClient, setIsClient] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    if (isClient) {
      const element = document.getElementsByTagName('html')[0];

      if (mobileMenuOpen && element) {
        element.style.paddingRight = '0px';
      } else {
        element.style.paddingRight = '0px';
      }
    }
  }, [mobileMenuOpen]);

  return (
    <header className="z-50 w-full">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#main" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            LOGO
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => {
              setMobileMenuOpen(true);
            }}>
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* desktop: menu links */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="font-semibold leading-6 text-gray-800 hover:font-extrabold">
              {link.label}
            </a>
          ))}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button
            className=""
            // href={button.href}
            onClick={() => {}}>
            {button.label}{' '}
          </Button>
        </div>
      </nav>
      {/* mobile: menu links */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Dialog.Panel className="bg-base-300 fixed inset-y-0 right-0 top-[72px] z-20 h-fit w-[251px] rounded-bl-xl px-6 py-2 pb-4 drop-shadow-xl sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 pb-6">
                {links.map((link, idx) => (
                  <div className="relative" key={idx}>
                    <a
                      href={link.href}
                      className="mobile-link -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:font-extrabold">
                      {link.label}
                    </a>
                    <span className="mobile-link__dot bg-secondary absolute left-[-10px] top-1/2 h-[5px] w-[5px] -translate-y-1/2" />
                  </div>
                ))}
                <div className="relative">
                  <a
                    key="cta-mobile"
                    href={button.href}
                    className="mobile-link -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:font-extrabold">
                    {button.label}
                  </a>
                  <span className="mobile-link__dot bg-secondary absolute left-[-10px] top-1/2 h-[5px] w-[5px] -translate-y-1/2" />
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
