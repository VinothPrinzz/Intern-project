import Image from 'next/image'
import Link from 'next/link'
import HeroPlaceholder from '../images/hero-placeholder.jpg'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="my-8">
        <div className="relative h-96">
          {/* Replace with actual hero image */}
          <Image
            src={HeroPlaceholder}
            alt="Featured Product"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <h1 className="text-4xl font-bold">Discover the Latest Samsung Products</h1>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Replace with actual product data */}
          {['Smartphones', 'TVs', 'Home Appliances'].map((category) => (
            <div key={category} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{category}</h3>
              <Link href="/products" className="text-blue-600 hover:underline">
                View Products
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News Section */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="border p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Samsung Announces New Product Line</h3>
          <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <Link href="/news" className="text-blue-600 hover:underline">
            Read More
          </Link>
        </div>
      </section>
    </div>
  )
}