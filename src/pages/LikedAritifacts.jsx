import React, { useState } from 'react';
import { useLoaderData, Link } from 'react-router';
import axios from 'axios';
import useAuth from '../hooks/useAuth';

const LikedArtifacts = () => {
  const initialLikedArtifacts = useLoaderData();
  const [likedArtifacts, setLikedArtifacts] = useState(initialLikedArtifacts);


  const { user } = useAuth();
  const userEmail = user?.email;

  const handleUnlikeBtn = async (artifactId) => {
    if (!userEmail) {
      alert('Please login first to unlike artifacts');
      return;
    }
    try {
      const res = await axios.patch(
        `https://historical-artifacts.vercel.app0/api/unlike/${artifactId}`,
        { userEmail }
      );

      if (res.data.modifiedCount > 0) {
        setLikedArtifacts(prev => prev.filter(a => a._id !== artifactId));
      } else {
        console.log('Nothing to unlike or already unliked');
      }
    } catch (error) {
      console.error('Unlike error:', error);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Liked Artifacts</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your favorite historical artifacts that have captured your interest.
          </p>
        </div>

        {likedArtifacts.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  ❤️
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No liked artifacts yet
                </h3>
                <p className="text-gray-500 mb-6">
                  You haven't liked any artifacts yet. Start exploring our collection and like the artifacts that interest you!
                </p>
                <Link to="/artifacts">
                  <div className="inline-block px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700">
                    🔍 Explore Artifacts
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600 text-center">
                You have liked {likedArtifacts.length} artifact{likedArtifacts.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {likedArtifacts.map((artifact) => (
                <div
                  key={artifact._id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <img
                    src={artifact.image}
                    alt={artifact.artifactName}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>

                      <h2 className="text-lg font-semibold mb-2">{artifact.artifactName}</h2>
                      <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                        <span>{artifact.artifactType}</span>
                        <span>{artifact.discoveredAt}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Discovered by: {artifact.discoveredBy}

                      </p>

                      <p className="text-sm text-gray-600">
                        Location: {artifact.presentLocation}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <Link
                        to={`/artifact/${artifact._id}`}
                        className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50"
                      >
                        View Details
                      </Link>
                      <button
                        onClick={() => handleUnlikeBtn(artifact._id)}
                        className="px-3 py-1 border border-red-300 text-red-600 rounded text-sm hover:bg-red-50"
                      >
                        Unlike
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/artifacts">
                <div className="inline-block px-4 py-2 border border-amber-600 text-amber-600 rounded hover:bg-amber-50">
                  Explore More Artifacts
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LikedArtifacts;
