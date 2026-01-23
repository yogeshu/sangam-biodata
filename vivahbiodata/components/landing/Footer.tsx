import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-background-light border-t border-border-soft py-8">
      <div className="max-w-[960px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-text-muted font-body">© 2023 VivahBio. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-sm text-text-main hover:text-primary font-body" href="#">Privacy Policy</a>
          <a className="text-sm text-text-main hover:text-primary font-body" href="#">Terms of Service</a>
          <a className="text-sm text-text-main hover:text-primary font-body" href="#">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;