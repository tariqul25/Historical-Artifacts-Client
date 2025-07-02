import React, { useState, useEffect } from 'react';
import { Link } from 'react-router'; // ✅ Use 'react-router-dom'
import { Eye, Heart, HeartOff } from 'lucide-react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAuth from '../hooks/useAuth';

const LikedArtifacts = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/api/likedartifacts/${user.email}`)
        .then(res => {
          setLikedArtifacts(res.data || []);
        })
        .catch(err => {
          console.error('Failed to load liked artifacts:', err);
          setLikedArtifacts([]);
        })
        .finally(() => setLoading(false));
    }
  }, [axiosSecure, user?.email]);

  const handleUnlike = (id) => {
    const remaining = likedArtifacts.filter(a => a._id !== id);
    setLikedArtifacts(remaining);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading liked artifacts...</p>
      </div>
    );
  }

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
                  <Heart className="w-12 h-12 text-red-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No liked artifacts yet</h3>
                <p className="text-gray-500 mb-6">
                  You haven't liked any artifacts yet. Start exploring and like the ones that interest you!
                </p>
                <Link
                  to="/all-artifacts"
                  className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Explore Artifacts
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6 text-center">
              <p className="text-gray-600">
                You have liked {likedArtifacts.length} artifact{likedArtifacts.length !== 1 && 's'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {likedArtifacts.map((artifact) => (
                <div key={artifact._id} className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={artifact.image}
                      alt={artifact.artifactName}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-lg font-semibold mb-2 line-clamp-2">{artifact.artifactName}</h2>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs px-2 py-1 bg-gray-200 rounded">{artifact.artifactType}</span>
                      {artifact.discoveredAt && (
                        <span className="text-sm text-gray-500">{artifact.discoveredAt}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">Discovered By:</span> {artifact.discoveredBy || 'Unknown'}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <span className="font-medium">Location:</span> {artifact.presentLocation || 'N/A'}
                    </p>
                  </div>
                  <div className="flex p-4 border-t gap-2">
                    <Link to={`/artifactsdetails/${artifact._id}`} className="flex-1">
                      <button className="w-full border border-gray-300 text-gray-700 px-3 py-2 rounded hover:bg-gray-50 flex items-center justify-center text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Details
                      </button>
                    </Link>
                    <button
                      onClick={() => handleUnlike(artifact._id)}
                      className="border border-gray-300 text-red-600 px-3 py-2 rounded hover:bg-red-50 flex items-center justify-center text-sm"
                    >
                      <HeartOff className="w-4 h-4 mr-1" />
                      Unlike
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/all-artifacts"
                className="inline-block border border-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-amber-50"
              >
                Explore More Artifacts
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LikedArtifacts;
