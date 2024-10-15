import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><Link href="/products/smartphones" className="hover:text-blue-400">Smartphones</Link></li>
              <li><Link href="/products/tvs" className="hover:text-blue-400">TVs</Link></li>
              <li><Link href="/products/home-appliances" className="hover:text-blue-400">Home Appliances</Link></li>
              <li><Link href="/products/monitors" className="hover:text-blue-400">Monitors</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="hover:text-blue-400">Contact Us</Link></li>
              <li><Link href="/support/faq" className="hover:text-blue-400">FAQ</Link></li>
              <li><Link href="/support/manuals" className="hover:text-blue-400">Product Manuals</Link></li>
              <li><Link href="/support/warranty" className="hover:text-blue-400">Warranty Information</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400">Company Info</Link></li>
              <li><Link href="/about/careers" className="hover:text-blue-400">Careers</Link></li>
              <li><Link href="/about/sustainability" className="hover:text-blue-400">Sustainability</Link></li>
              <li><Link href="/about/newsroom" className="hover:text-blue-400">Newsroom</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.facebook.com/SamsungUS" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a></li>
              <li><a href="https://twitter.com/SamsungUS" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a></li>
              <li><a href="https://www.instagram.com/samsungus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a></li>
              <li><a href="https://www.youtube.com/user/samsungus" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">YouTube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Samsung. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;