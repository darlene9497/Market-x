import React from 'react';
import { Link } from 'react-router-dom';

const FeatureCard = ({ cards = [] }) => {
  const cardData = [
    {
      title: 'Electronics',
      description: 'Explore the electrifying world of gadgets: discover top-notch electronics for every tech enthusiast!',
    },
    {
      title: 'Jewelry',
      description: 'Indulge in luxury and elegance with our exquisite collection of jewelry: find the perfect piece to enhance your style.',
    },
    {
      title: "Men's Clothing",
      description: "Upgrade your wardrobe with our stylish and trendy men's clothing: dress to impress for any occasion.",
    },
    {
      title: "Women's Clothing",
      description: "Discover the latest fashion trends and express your personal style with our stunning women's clothing collection.",
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Our Popular Categories</h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {cardData.map((card) => (
            <Link to={`/categories/${card.title.toLowerCase()}`} className="p-4 md:w-1/3 cursor-pointer" key={card.title}>
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card.title}</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">{card.description}</p>
                  <Link to={`/categories/${card.title.toLowerCase()}`} className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;

