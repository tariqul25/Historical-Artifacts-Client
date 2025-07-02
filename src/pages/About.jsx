import React from 'react';

const About = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                            Preserving History for Future Generations
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            HistoriTrack is more than just a catalog of artifacts—it's a community-driven platform where history comes alive.
                            Our mission is to make historical artifacts accessible to everyone, fostering a deeper understanding and appreciation
                            of our shared human heritage.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Discover & Explore</h4>
                                    <p className="text-gray-600">Browse thousands of artifacts from every corner of the world</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Share & Contribute</h4>
                                    <p className="text-gray-600">Add your own discoveries and share knowledge with the community</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Connect & Learn</h4>
                                    <p className="text-gray-600">Engage with fellow history enthusiasts and learn from experts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=600&h=400&fit=crop"
                            alt="Museum artifacts"
                            className="rounded-lg shadow-xl"
                        />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-amber-600 to-orange-600 rounded-lg opacity-20" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;