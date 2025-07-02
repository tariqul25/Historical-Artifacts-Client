import React from 'react';

const Faq = () => {
    return (
        <div className='pb-6 my-8'>
            <h1 className='text-4xl text-center mb-4'>Frequently Asked Question</h1>

            <div className="collapse collapse-arrow bg-gray-50  border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">
                    What is considered a historical artifact?
                </div>
                <div className="collapse-content text-sm">
                    A historical artifact is any object made or used by humans in the past that gives insight into their culture, lifestyle, or history—such as tools, pottery, coins, or weapons.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-50  border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">
                    Why are historical artifacts important?
                </div>
                <div className="collapse-content text-sm">
                    Artifacts help historians and archaeologists understand how ancient civilizations lived, what they valued, and how they evolved over time. They preserve cultural heritage and identity.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-50  border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">
                    Where are historical artifacts usually found?
                </div>
                <div className="collapse-content text-sm">
                    Artifacts are often discovered in archaeological sites like ruins, tombs, caves, or shipwrecks. Many are found buried underground and require careful excavation.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-50  border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">
                    How do museums protect artifacts?
                </div>
                <div className="collapse-content text-sm">
                    Museums use controlled environments, security systems, and conservation techniques to protect artifacts from damage, decay, or theft. They also document and research them carefully.
                </div>
            </div>

            <div className="collapse collapse-arrow bg-gray-50  border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">
                    Can historical artifacts be owned privately?
                </div>
                <div className="collapse-content text-sm">
                    In some countries, private ownership of artifacts is legal, but often restricted. Many nations have laws protecting cultural heritage and banning export of significant artifacts.
                </div>
            </div>
        </div>
    );
};

export default Faq;
