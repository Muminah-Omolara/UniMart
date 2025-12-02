import React from "react";
import { Facebook, Twitter, Instagram, Send, Linkedin } from "lucide-react";
import Logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-300 py-16 font-sans border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP SECTION: Brand & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 border-b border-slate-800 pb-12">
          {/* Brand Identity */}
          <div className="space-y-4">
            <img
              src={Logo}
              className="text-2xl font-display font-black text-white tracking-tighter"
            ></img>
            <p className="max-w-xs text-slate-400 font-medium leading-relaxed">
              The #1 marketplace for students. Buy, sell, and swap safely within
              your campus community.
            </p>
          </div>

          {/* Newsletter / CTA */}
          <div className="flex flex-col justify-center md:items-end">
            <h3 className="text-white font-bold mb-4">Don't miss a drop</h3>
            <form className="flex w-full max-w-sm relative">
              <input
                type="email"
                placeholder="Enter your student email"
                className="w-full bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-orange-600 transition-colors placeholder:text-slate-600 font-medium"
              />
              <button className="absolute right-1.5 top-1.5 bg-orange-600 text-white p-2 rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-300">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE SECTION: Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Column 1 */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Shop</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  All Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Textbooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Tech Deals
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Sell</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Start Selling
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Seller Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Pro Seller Badge
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Campus Ambassadors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display">Connect</h4>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-slate-900 p-3 rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300 group"
              >
                <Instagram
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                className="bg-slate-900 p-3 rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300 group"
              >
                <Twitter
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
              <a
                href="#"
                className="bg-slate-900 p-3 rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300 group"
              >
                <Linkedin
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-slate-500">
          <p>&copy; 2025 UniMart Inc. Made for students.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
