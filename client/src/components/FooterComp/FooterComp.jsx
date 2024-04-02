import React from "react";
import "./FooterComp.css";

const FooterComp = () => {
  // Define footer links data using Map
  const footerLinks = new Map([
    ["Quick Links", ["Home", "Indoor", "Outdoors", "About", "Contact"]],
    [
      "Explore",
      ["Bestsellers", "On Sale", "Best Of 2022", "Featured", "Gift Card"],
    ],
    ["Help", ["Track Order", "Delivery & Returns", "FAQs", "Community"]],
  ]);

  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container d-flex justify-content-evenly content">
        {[...footerLinks].map(([category, links]) => (
          <div key={category} className="row">
            <div className="col-md-4 w-100">
              <h5>{category}</h5>
              <ul className="list-unstyled">
                {links.map((link, index) => (
                  <li key={index}>{link}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="container row mt-4">
        <div className="col-12">
          <p className="mb-0 copyright">
            Copyright © 2024 Antiques | Powered by Antiques
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComp;
