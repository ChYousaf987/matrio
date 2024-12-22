import React from 'react';

const FirstOne = () => {
  return (
    <div className="container py-5">
      <div className="col-lg-6 mx-auto mt-5 text-center">
        <h1 className="fw-bold" style={{ color: '#8C57FF' }}>
          All in one SaaS application for your business
        </h1>
      </div>
      <div className="col-lg-5 mx-auto text-center">
        <p className="fw-bold">
          No coding required to make customizations. The live customizer has everything your marketing needs.
        </p>
        <button className="btn btn-primary-custom mx-auto d-block px-3 mt-4 fs-5 py-2">
          Get Early Access
        </button>
      </div>
      <div className="first text-center">
        <img
          src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/hero-dashboard-light.png"
          className="w-75 mx-auto d-block"
          alt="Hero dashboard light"
          loading="lazy"
        />
        <div className="firsting">
          <img
            src="https://demos.themeselection.com/marketplace/materio-mui-nextjs-admin-template/demo-1/images/front-pages/landing-page/hero-elements-light.png"
            className="img-fluid "
            alt="Decorative graphic"
            loading="lazy"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstOne;
