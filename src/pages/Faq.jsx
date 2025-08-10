import React from 'react';

const Faq = () => {
  return (
    <div className="pb-6 py-16 max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold  text-black dark:text-black text-center mb-6">Frequently Asked Questions</h1>

      {[
        {
          question: 'What is considered a historical artifact?',
          answer:
            'A historical artifact is any object made or used by humans in the past that gives insight into their culture, lifestyle, or history—such as tools, pottery, coins, or weapons.',
        },
        {
          question: 'Why are historical artifacts important?',
          answer:
            'Artifacts help historians and archaeologists understand how ancient civilizations lived, what they valued, and how they evolved over time. They preserve cultural heritage and identity.',
        },
        {
          question: 'Where are historical artifacts usually found?',
          answer:
            'Artifacts are often discovered in archaeological sites like ruins, tombs, caves, or shipwrecks. Many are found buried underground and require careful excavation.',
        },
        {
          question: 'How do museums protect artifacts?',
          answer:
            'Museums use controlled environments, security systems, and conservation techniques to protect artifacts from damage, decay, or theft. They also document and research them carefully.',
        },
        {
          question: 'Can historical artifacts be owned privately?',
          answer:
            'In some countries, private ownership of artifacts is legal, but often restricted. Many nations have laws protecting cultural heritage and banning export of significant artifacts.',
        },
      ].map((faq, i) => (
        <div key={i} className="collapse collapse-arrow text-black dark:text-black border border-base-300 rounded mb-4">
          <input type="radio" name="faq-accordion" id={`faq-${i}`} className="peer" />
          <label
            htmlFor={`faq-${i}`}
            className="collapse-title font-semibold cursor-pointer select-none"
          >
            {faq.question}
          </label>
          <div className="collapse-content text-sm peer-checked:block hidden px-4 pt-2 pb-4">
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
