import React from 'react';
import { useParams, useNavigate } from 'react-router';

const civilizationDetailsData = {
  egypt: {
    name: 'Ancient Egypt',
    image: 'https://i.ibb.co/BWzkHs3/egypt.webp',
    description: `Ancient Egypt, famous for its pyramids and pharaohs, was one of the world's earliest and longest-lasting civilizations.  
The Nile River was central to their agriculture, religion, and daily life.  
Their advanced knowledge of mathematics and engineering enabled the construction of monumental architecture.  
Hieroglyphic writing was developed as a complex system to record events and culture.  
The Egyptian civilization's religious beliefs deeply influenced their art, burial practices, and social structure.`,
  },
  greece: {
    name: 'Ancient Greece',
    image: 'https://i.ibb.co/ccmvSZqd/greek.jpg',
    description: `Ancient Greece is renowned for laying the foundations of Western civilization with its advancements in philosophy, democracy, and the arts.  
Greek city-states like Athens and Sparta had distinct political systems but shared cultural achievements.  
The Greeks invented theater, monumental sculpture, and made lasting contributions to science and mathematics.  
Their mythology and epic poems like the Iliad influenced literature for centuries.  
The legacy of Ancient Greece is evident in modern governance, education, and cultural ideals.`,
  },
  mesopotamia: {
    name: 'Mesopotamia',
    image: 'https://i.ibb.co/mCX5RpB3/meso.jpg',
    description: `Mesopotamia, often called the cradle of civilization, was located between the Tigris and Euphrates rivers.  
It was home to some of the first cities, including Uruk and Babylon.  
The invention of cuneiform writing allowed for record keeping and literature.  
Mesopotamian societies developed early legal codes like Hammurabi's Code.  
Their innovations in irrigation, astronomy, and mathematics shaped future civilizations.`,
  },
  china: {
    name: 'Ancient China',
    image: 'https://i.ibb.co/Z6K1hzxY/china.jpg',
    description: `Ancient China was characterized by powerful dynasties like the Shang and Zhou, which established complex governance and culture.  
It introduced groundbreaking inventions such as paper, gunpowder, and the compass.  
Confucianism and Taoism deeply influenced Chinese philosophy and society.  
The Great Wall was built to protect from northern invasions.  
Chinese art, literature, and silk production were highly developed and traded widely along the Silk Road.`,
  },
};

const CivilizationDetail = () => {
  const { civilization } = useParams();
  const navigate = useNavigate();

  const data = civilizationDetailsData[civilization];

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">Civilization not found</h2>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        {/* Left Image */}
        <div className="md:w-1/2">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-64 sm:h-80 md:h-full object-cover"
          />
        </div>

        {/* Right Details */}
        <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{data.name}</h1>
          <p className="text-gray-700 text-lg whitespace-pre-line">{data.description}</p>

          <button
            onClick={() => navigate(-1)}
            className="mt-8 px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 w-max"
          >
            Back to Explore
          </button>
        </div>
      </div>
    </section>
  );
};

export default CivilizationDetail;
