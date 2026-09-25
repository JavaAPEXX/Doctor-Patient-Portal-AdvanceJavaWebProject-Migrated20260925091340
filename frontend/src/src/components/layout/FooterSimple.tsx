import React from 'react';
import './FooterSimple.css'; // Optional: import if there are component‑specific styles

const FooterSimple: React.FC = () => {
  return (
    <div className="container-fluid p-1 my-bg-color text-center text-white mt-3">
      <p className="fs-4 text-center">&copy; md.talal.wasim</p>
    </div>
  );
};

export default FooterSimple;