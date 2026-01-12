import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-slate-200 bg-white text-center relative z-10">
      <div className="container mx-auto px-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Abdul Qahir Jalali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;