import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 md:p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <Link
                href="/our-product"
                className="text-sm text-gray-300 hover:text-white"
              >
                Our Product
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-sm text-gray-300 hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-gray-300 hover:text-white"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Contact</h3>
          <Link
            href="https://discord.com/channels/1079600793306546267/1138476118916218994"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Join our Discord #support
          </Link>
          <p className="text-sm text-gray-300">
            Email: info@securityspectrum.io
          </p>
        </div>
        <div className="w-full md:w-auto md:self-end text-right">
          <p className="text-sm text-gray-300">
            &copy; 2024 Security Spectrum. All rights reserved.
          </p>
          <div className="text-xs text-gray-600 version-info">
            version: 1.0.0
          </div>
          {/* <div className="text-xs text-gray-600 version-info"> */}
           {/* {process.env.NEXT_PUBLIC_COMMIT_DATE} */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
