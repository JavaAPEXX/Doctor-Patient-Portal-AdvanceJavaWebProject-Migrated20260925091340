import React, { useEffect } from 'react';

const AllCss: React.FC = () => {
  useEffect(() => {
    // Inject Bootstrap CSS
    const bootstrapCss = document.createElement('link');
    bootstrapCss.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css';
    bootstrapCss.rel = 'stylesheet';
    bootstrapCss.integrity = 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC';
    bootstrapCss.crossOrigin = 'anonymous';
    document.head.appendChild(bootstrapCss);

    // Inject Font Awesome 6.2.1 CSS
    const fa6Css = document.createElement('link');
    fa6Css.rel = 'stylesheet';
    fa6Css.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css';
    fa6Css.integrity = 'sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==';
    fa6Css.crossOrigin = 'anonymous';
    fa6Css.referrerPolicy = 'no-referrer';
    document.head.appendChild(fa6Css);

    // Inject Font Awesome 4.7.0 CSS
    const fa4Css = document.createElement('link');
    fa4Css.rel = 'stylesheet';
    fa4Css.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
    document.head.appendChild(fa4Css);

    // Inject Bootstrap JS Bundle
    const bootstrapJs = document.createElement('script');
    bootstrapJs.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js';
    bootstrapJs.integrity = 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM';
    bootstrapJs.crossOrigin = 'anonymous';
    document.body.appendChild(bootstrapJs);

    // Inject custom styles
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden;
      }

      .my-bg-color {
        background-color: #4568dc;
      }

      .myP-color {
        color: #4568dc;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(bootstrapCss);
      document.head.removeChild(fa6Css);
      document.head.removeChild(fa4Css);
      document.body.removeChild(bootstrapJs);
      document.head.removeChild(styleElement);
    };
  }, []);

  return null;
};

export default AllCss;