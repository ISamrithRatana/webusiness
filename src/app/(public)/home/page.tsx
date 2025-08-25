'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'HUAWEI 4G Mobile WiFi 5',
    price: '$$',
    unit: 'lb',
    origin: 'San Juan Capistrano, CA',
    img: '/huawei-4G-Mobile-wifi.png'
  },
  {
    id: 2,
    name: 'TP-Link MR100',
    price: '$$',
    unit: 'lb',
    origin: 'Huntington Beach, CA',
    img: '/tp-link.png'
  },
  {
    id: 3,
    name: 'HUAWEI Home Extender',
    price: '$$',
    unit: 'lb',
    origin: 'Oxnard, CA',
    img: '/mesh.png'
  }
];

// This is the main component for the page.
export default function Shop() {
  const [view, setView] = useState('grid'); // State to toggle between grid and list view

  // The main container for the entire page.
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Main content area */}
      <main className="container mx-auto px-8 pt-24">
        {/* Produce section header */}
        <div className="flex items-center space-x-4 border-b border-gray-200 pb-4">
          <h2 className="text-5xl font-bold tracking-tight"></h2>
          <p className="text-lg text-gray-500">{new Date().toDateString()}</p>
        </div>

        {/* Product grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <div key={product.id} className=" rounded-3xl  bg-white p-4 shadow-lg">
              {/* Blank div placeholder for the image */}
              <div className="aspect-square w-full bg-gray-200">
                <Image src={product.img} alt={product.name} 
                width={100}
                height={100}
                className="object-fill w-full h-full" />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-green-700">{product.price} / {product.unit}</p>
                <p className="mt-2 text-sm text-gray-500">Grown in {product.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
