import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#111] text-white mt-10 pt-8">
      <div className="footer-container max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        
        <div className="footer-left">
          <img src="/img/cloud.png" alt="Logo" className="logo w-16 mb-4" />
          <div className="footer-columns grid grid-cols-2 gap-6">
            <div className="footer-column">
              <h3 className="font-bold mb-2">PRODUCTS</h3>
              <ul className="space-y-1 text-gray-200 text-sm">
                <li><Link to="/custom">CUSTOM</Link></li>
                <li><Link to="/t-shirt">T-SHIRT</Link></li>
                <li><Link to="/hoodie">HOODIE</Link></li>
                <li><Link to="/crewneck">CREWNECK</Link></li>
                <li><Link to="/tuque">TUQUE</Link></li>
                <li><Link to="/cap">CAP</Link></li>
                <li><Link to="/socks">SOCKS</Link></li>
                <li><Link to="/tote-bag">TOTE BAG</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="font-bold mb-2">QUESTIONS?</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/size-guide">SIZE GUIDE</Link></li>
                <li><Link to="/refund">REFUND</Link></li>
                <li><Link to="/delivery">DELIVERY</Link></li>
                <li><Link to="/reviews">REVIEWS</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/contact">CONTACT</Link></li>
              </ul>
            </div>
          </div>
          <p className="contact-email mt-4 text-sm">
            <a href="mailto:abc@dripnest.co">abc@dripnest.co</a>
          </p>
        </div>

        <div className="footer-right md:col-span-2">
          <h3 className="font-bold mb-2">15% discount when you subscribe</h3>
          <form className="subscribe-form flex">
            <input
              type="email"
              placeholder="Subscribe to private messages"
              className="flex-grow p-2 border rounded-l"
            />
            <button type="submit" className="bg-black text-white px-4 rounded-r">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>

          <div className="social-icons flex space-x-4 mt-4">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-gray-900 text-white py-4 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="footer-links flex space-x-4 mb-2 md:mb-0">
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/shipping">Shipping Policy</Link>
            <Link to="/contact-details">Contact details</Link>
          </div>

          <div className="footer-language flex items-center space-x-1">
            <i className="fa-solid fa-rotate"></i>
            <span>French</span>
          </div>

          <div className="footer-payments flex space-x-2 mt-2 md:mt-0">
            <img src="/img/american_express.jpg" alt="American Express" className="h-6" />
            <img src="/img/apple_pay.jpg" alt="Apple Pay" className="h-6" />
            <img src="/img/discover.jpg" alt="Discover" className="h-6" />
            <img src="/img/gpay.jpg" alt="Google Pay" className="h-6" />
            <img src="/img/mastercard.jpg" alt="Mastercard" className="h-6" />
            <img src="/img/shop.jpg" alt="Shop Pay" className="h-6" />
            <img src="/img/visa.jpg" alt="Visa" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
