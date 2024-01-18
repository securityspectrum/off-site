import Link from 'next/link';
import React from 'react';

type CustomLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const CustomLink: React.FC<CustomLinkProps> = ({ href, className, children }) => {
  return (
    <Link href={href} passHref>
      <div className={className} role="link" tabIndex={0}>
        {children}
      </div>
    </Link>
  );
};

export default CustomLink;