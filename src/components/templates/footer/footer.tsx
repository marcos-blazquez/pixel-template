export function Footer({
  links = {
    solutions: {
      href: 'https://www.example.com',
      label: 'Solutions',
    },
    aboutUs: {
      href: 'https://www.example.com',
      label: 'About Us',
    },
    cases: {
      href: 'https://www.example.com',
      label: 'Cases',
    },
    contactUs: {
      href: 'https://www.example.com',
      label: 'Contact Us',
    },
  },
  social = [
    {
      name: 'Twitter',
      href: 'https://www.example.com',
      icon: function Twitter(props) {
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.999 4.571c-.8.356-1.667.6-2.571.714a4.64 4.64 0 002.028-2.571 9.28 9.28 0 01-2.943 1.114A4.64 4.64 0 0015.428 2a4.66 4.66 0 00-4.714 4.714c0 .371.043.743.114 1.086a13.2 13.2 0 01-9.6-4.857 4.65 4.65 0 001.429 6.229A4.64 4.64 0 012.4 7.657v.057a4.64 4.64 0 003.714 4.543 4.7 4.7 0 01-1.2.171c-.286 0-.571-.029-.857-.086a4.66 4.66 0 004.343 3.229 9.32 9.32 0 01-5.743 1.971c-.371 0-.743-.029-1.114-.086a13.2 13.2 0 007.086 2.086c8.571 0 13.257-7.086 13.257-13.257 0-.2 0-.4-.014-.6a9.486 9.486 0 002.343-2.457l.029-.057z"
            />
          </svg>
        );
      },
    },
    {
      name: 'Instagram',
      href: 'https://www.example.com',
      icon: function Instagram(props) {
        return (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        );
      },
    },
  ],
  address = 'Sample address',
}) {
  return (
    <footer className="" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 sm:pt-24 lg:px-8 lg:pt-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href={links?.solutions?.href} className="text-lg leading-6 hover:text-white">
                      {links?.solutions?.label}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href={links?.aboutUs?.href} className="text-lg leading-6 hover:text-white">
                      {links?.aboutUs?.label}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href={links?.cases?.href} className="text-lg leading-6 hover:text-white">
                      {links?.cases?.label}
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a href={links?.contactUs.href} className="text-lg leading-6 hover:text-white">
                      {links?.contactUs.label}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h2 id="footer-subheading" className="sr-only">
          Address
        </h2>
        <p className="mt-16 sm:mt-20 lg:mt-24">{address}</p>
        <div className="mt-3 border-t border-gray-400 border-opacity-30 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {social.map(item => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base leading-5 md:order-1 md:mt-0">
            &copy; 2023 Pixel Pod, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
