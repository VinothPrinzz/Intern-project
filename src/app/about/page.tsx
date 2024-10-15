import React from 'react';
import Image from 'next/image';
import SamsungHistory from '../../images/samsung-history.jpg'

const AboutUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Samsung</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
        <p className="text-gray-700">
          Inspire the world, create the future.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Devote our talent and technology to creating superior products and services that contribute to a better global society.
        </p>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-4 md:mb-0 md:mr-4">
            <Image src={SamsungHistory} alt="Samsung History" width={500} height={300} className="rounded-lg" />
          </div>
          <div className="md:w-1/2">
            <p className="text-gray-700">
              Founded in 1938 as a trading company, Samsung has evolved into a world-class corporation with businesses that span advance technology, semiconductors, skyscraper and plant construction, petrochemicals, fashion, medicine, finance, hotels, and more.
            </p>
          </div>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Corporate Social Responsibility</h2>
        <p className="text-gray-700">
          At Samsung, we are committed to creating a better world full of richer digital experiences, through innovative technology and products. The goal of the corporate citizenship vision is to create a society full of creativity and hope.
        </p>
      </section>
    </div>
  );
};

export default AboutUsPage;