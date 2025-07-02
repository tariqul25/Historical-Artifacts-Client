import React from 'react';

const civilizations = [
  {
    name: 'Ancient Egypt',
    image: 'https://i.ibb.co/BWzkHs3/egypt.webp',
    description: 'Explore artifacts from the land of pyramids and pharaohs.',
  },
  {
    name: 'Ancient Greece',
    image: 'https://i.ibb.co/ccmvSZqd/greek.jpg',
    description: 'Discover inventions, philosophy, and art of ancient Greece.',
  },
  {
    name: 'Mesopotamia',
    image: 'https://i.ibb.co/mCX5RpB3/meso.jpg',
    description: 'Step into the cradle of civilization and early writing.',
  },
  {
    name: 'Ancient China',
    image: 'https://i.ibb.co/Z6K1hzxY/china.jpg',
    description: 'Uncover the wonders of dynasties, inventions, and culture.',
  },
];

const ExploreCivilization = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">🌍 Explore by Civilization</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Dive into historical treasures categorized by ancient civilizations.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {civilizations.map((civ, index) => (
            <div
  key={index}
  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition flex flex-col"
>
  <img
    src={civ.image}
    alt={civ.name}
    className="w-full h-48 object-cover rounded-t-xl"
  />
  <div className="p-6 flex flex-col flex-grow">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{civ.name}</h3>
    <p className="text-gray-600 dark:text-gray-300 mt-2 flex-grow">{civ.description}</p>
    <button className="mt-auto inline-block bg-green-600 text-white mx-4 py-2 rounded hover:bg-green-700 transition">
      Explore
    </button>
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCivilization;
