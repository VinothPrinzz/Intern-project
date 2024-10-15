import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md transition-transform hover:scale-105">
      <div className="relative h-48 mb-4">
        <Image 
          src={product.image} 
          alt={product.name} 
          layout="fill" 
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.category}</p>
      <p className="text-blue-600 font-bold mb-4">${product.price.toFixed(2)}</p>
      <Link 
        href={`/products/${product.id}`}
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ProductCard;