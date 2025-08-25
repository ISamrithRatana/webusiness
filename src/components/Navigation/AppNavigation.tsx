'use client'
import link from 'next/link';
import Image from 'next/image';
import Link from 'next/link';
export default function Navigation() {
  return (
    <header  className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white px-4 md:px-8 py-3 shadow-md border-b border-gray-200">
      <Link href="/">
        <Image src="/logopic.png"
          alt="Produce & Post"
          className=""
          width={100}
          height={100}
          priority
        />
      </Link>
      <div className="flex mx-8 ">
        <input
          type="text"
          placeholder="Search for produce..."
          className="w-full rounded-l-full border border-gray-300 bg-gray-100 px-4 py-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-700 transition-colors"
        />
        <button className="rounded-r-full bg-green-700 px-4 py-2 text-sm font-semibold text-white hover:bg-green-800 transition-colors">
              Search
        </button>
      </div>
    </header>
  );
}
