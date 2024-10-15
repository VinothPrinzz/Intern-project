import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-md">
    <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-48 object-cover mb-4" />
    <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
    <p className="text-gray-600 mb-2">{product.category}</p>
    <p className="text-blue-600 font-bold">${product.price.toFixed(2)}</p>
    <Link href={`/products/${product.id}`} className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
      Learn More
    </Link>
  </div>
);

// Mock product data (replace with actual data fetching in a real application)
const products: Product[] = [
  { id: 1, name: 'Galaxy S21', category: 'Smartphone', price: 799.99, image: '/images/galaxy-s21.jpg' },
  { id: 2, name: 'QLED 4K TV', category: 'TV', price: 1299.99, image: '/images/qled-tv.jpg' },
  { id: 3, name: 'Smart Refrigerator', category: 'Home Appliance', price: 2999.99, image: '/images/smart-fridge.jpg' },
  // Add more products as needed
];

const ProductListingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      
      {/* Filters and sorting options */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <label htmlFor="category" className="mr-2">Category:</label>
          <select id="category" className="border rounded p-2">
            <option value="">All</option>
            <option value="smartphone">Smartphones</option>
            <option value="tv">TVs</option>
            <option value="home-appliance">Home Appliances</option>
          </select>
        </div>
        <div>
          <label htmlFor="sort" className="mr-2">Sort by:</label>
          <select id="sort" className="border rounded p-2">
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;