import React from 'react';
import { Link } from 'react-router';

const civilizations = [
  {
    key: 'egypt',
    name: 'Ancient Egypt',
    image: 'https://i.ibb.co/BWzkHs3/egypt.webp',
    description: 'Explore artifacts from the land of pyramids and pharaohs.',
  },
  {
    key: 'greece',
    name: 'Ancient Greece',
    image: 'https://i.ibb.co/ccmvSZqd/greek.jpg',
    description: 'Discover inventions, philosophy, and art of ancient Greece.',
  },
  {
    key: 'mesopotamia',
    name: 'Mesopotamia',
    image: 'https://i.ibb.co/mCX5RpB3/meso.jpg',
    description: 'Step into the cradle of civilization and early writing.',
  },
  {
    key: 'china',
    name: 'Ancient China',
    image: 'https://i.ibb.co/Z6K1hzxY/china.jpg',
    description: 'Uncover the wonders of dynasties, inventions, and culture.',
  },
];

const ExploreCivilization = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🌍 Explore by Civilization</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Dive into historical treasures categorized by ancient civilizations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {civilizations.map(civ => (
            <div
              key={civ.key}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition flex flex-col"
            >
              <img src={civ.image} alt={civ.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{civ.name}</h3>
                <p className="text-gray-600 mt-2 flex-grow">{civ.description}</p>
                <Link to={`/civilization/${civ.key}`}>
                  <button className="mt-4 bg-amber-600 text-white py-2 px-3 rounded hover:bg-amber-700">
                    Explore
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCivilization;
