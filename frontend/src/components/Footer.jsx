import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-primary  py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-secandory">About Us</h3>
            <p className="text-sm text-secandory">
              Welcome to our blog! Explore a variety of stories, tips, and discussions that keep you informed and entertained. Join the journey with us!
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-secandory hover:text-gray-200 transition">
                <FaFacebook />
              </Link>
              <Link href="#" className="text-secandory hover:text-gray-200 transition">
                <FaTwitter />
              </Link>
              <Link href="#" className="text-secandory hover:text-gray-200 transition">
                <FaInstagram />
              </Link>
              <Link href="#" className="text-secandory hover:text-gray-200 transition">
                <FaLinkedin />
              </Link>
              <Link href="#" className="text-secandory hover:text-gray-200 transition">
                <FaGithub />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-200">Quick Links</h3>
            <ul>
              <li>
                <Link className="text-sm text-secandory hover:text-gray-200 transition duration-300">Home</Link>
              </li>
              <li>
                <Link className="text-sm text-secandory hover:text-gray-200 transition duration-300">Blog</Link>
              </li>
              <li>
                <Link className="text-sm text-secandory hover:text-gray-200 transition duration-300">About</Link>
              </li>
              <li>
                <Link className="text-sm text-secandory hover:text-gray-200 transition duration-300">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-200">Subscribe to Our Newsletter</h3>
            <p className="text-sm text-secandory">Get the latest posts and updates directly in your inbox.</p>
            <div className="flex gap-2 max-mobile:flex-col">
              <input
                type="email"
                placeholder="Your email address"
                className="input"
              />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-sm cursor-pointer">
          <p>&copy; 2025 Blog Master. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
