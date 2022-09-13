import React from "react";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="backToTop">Back to top</p>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <div className="footerColHead">Get to Know Us</div>
            <ul>
              <li>About Us</li>
              <li>careers</li>
              <li>Press Releases</li>
              <li>Amazon Cares</li>
              <li>Gift a Smile</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footerColHead">Connect with Us</div>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footerColHead">Make Money with Us</div>
            <ul>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Amazon Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="footerColHead">Let Us Help You</div>
            <ul>
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Amazon Assistant Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <p className="copyright">Copyright &copy; www.amazon.com</p>
      </div>
    </footer>
  );
};

export default Footer;
