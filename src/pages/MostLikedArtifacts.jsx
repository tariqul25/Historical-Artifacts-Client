import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import { Calendar, MapPin, Heart, Eye, ArrowRight, Sparkles } from 'lucide-react';

const MostLikedArtifacts = () => {
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://histoic-artifacts-server.vercel.app/api/mostliked')
      .then((response) => {
        setAllArtifacts(response.data);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch artifacts.');
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Featured Artifacts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most beloved artifacts in our collection, curated by our community of history enthusiasts.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-amber-600"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 py-10">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {allArtifacts.map((artifact) => (
              <div
                key={artifact._id || artifact.id}
                className="group hover:shadow-xl transition-all duration-300 shadow-lg overflow-hidden bg-white rounded"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={artifact.image}
                    alt={artifact.artifactName}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-2 py-1 bg-white/90 text-xs text-gray-800 rounded flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                  <div className="absolute bottom-4 left-4 px-2 py-1 bg-amber-600 text-xs text-white rounded">
                    {artifact.artifactType}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {artifact.artifactName}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{artifact.createdAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{artifact.discoveredAt}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-pink-600">
                      <Heart className="w-4 h-4" />
                      <span className="font-medium">{artifact.liked}</span>
                    </div>

                    <Link
                      to={`/artifactsdetails/${artifact._id}`}
                      className="inline-flex items-center text-sm text-amber-600 hover:text-amber-700 px-2 py-1 border border-amber-600 rounded hover:bg-amber-50 transition"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            to="/all-artifacts"
            className="inline-flex items-center bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded transition"
          >
            See All Artifacts
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MostLikedArtifacts;
