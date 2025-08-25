'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 font-sans p-8 md:p-12 mt-12 rounded-t-xl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand and Mission Statement */}
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-green-700 mb-4">Tech Solutions</h3>
          <p className="text-sm">
            We re farmers, purveyors, and eaters of organically grown food. We believe
            in transparency, sustainability, and deliciousness.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Shop</h4>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/" className="hover:text-green-700 transition-colors">All Produce</Link>
            <Link href="/" className="hover:text-green-700 transition-colors">Seasonal</Link>
            <Link href="/" className="hover:text-green-700 transition-colors">Wholesale</Link>
          </nav>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Company</h4>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/" className="hover:text-green-700 transition-colors">About Us</Link>
            <Link href="/" className="hover:text-green-700 transition-colors">Our Farms</Link>
            <Link href="/" className="hover:text-green-700 transition-colors">Careers</Link>
            <Link href="/newsstand" className="hover:text-green-700 transition-colors">Newsstand</Link>
          </nav>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-3">Stay in the loop</h4>
          <p className="text-sm mb-4">
            Get updates on new products and special offers.
          </p>
          <div className="flex">
            <Link href="https://t.me/samrith_ratana" className="rounded-full bg-green-700 px-6 py-2 text-sm font-semibold text-white hover:bg-green-800 transition-colors ">
              Subscribe
            </Link>
          </div>
        </div>
      </div>

      {/* Footer bottom section with copyright and social links */}
      <div className="container mx-auto mt-8 pt-6 border-t border-gray-300 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Tech Solutions. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://t.me/techsolutions_chnanel" className="hover:text-green-700 transition-colors">Telegram</a>
          <a href="https://t.me/samrith_ratana" className="hover:text-green-700 transition-colors">Chnanal</a>
          <a href="https://web.facebook.com/techsolutions.page" className="hover:text-green-700 transition-colors">Facebook Page</a>
        </div>
      </div>
    </footer>
  );
}
