import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import HistoryProvider from '../contexts/HistoryProvider';
import Loading from './Loading';
import { HistoryContext } from '../contexts/HistoryContext';


const LikedArtifacts = () => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const { loading } = use(HistoryContext)
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { email } = useParams();



  useEffect(() => {
    if (email) {
      axiosSecure
        .get(`/api/likedartifacts/user/${email}`)
        .then((res) => {
          setLikedArtifacts(res.data);
        })
        .catch((err) => {
          console.error('Failed to load liked artifacts:', err);
        });
    }
  }, [email, axiosSecure]);

  if (loading) {
    return <Loading></Loading>
  }

  const handleUnlikeBtn = async (artifactId) => {
    if (!user?.email) {
      alert('Please login first to unlike artifacts');
      return;
    }
    try {
      const res = await axiosSecure.patch(`/api/unlike/${artifactId}`, { userEmail: user?.email });
      if (res.data.modifiedCount > 0) {
        setLikedArtifacts((prev) => prev.filter((a) => a._id !== artifactId));
      }
    } catch (error) {
      console.error('Unlike error:', error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center mb-8 px-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Liked Artifacts</h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your favorite historical artifacts that have captured your interest.
          </p>
        </div>

        {likedArtifacts.length === 0 ? (
          <div className="text-center py-16 px-4">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl">
                  ❤️
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  No liked artifacts yet
                </h3>
                <p className="text-gray-500 mb-6">
                  You haven't liked any artifacts yet. Start exploring our collection and like the artifacts that interest you!
                </p>
                <Link to="/artifacts">
                  <div className="inline-block px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 transition">
                    🔍 Explore Artifacts
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-6 px-2">
              <p className="text-gray-600 text-center">
                You have liked {likedArtifacts.length} artifact{likedArtifacts.length !== 1 ? 's' : ''}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2">
              {likedArtifacts.map((artifact) => (
                <div
                  key={artifact._id}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <img
                    src={artifact.image}
                    alt={artifact.artifactName || 'Artifact Image'}
                    className="w-full h-48 sm:h-56 md:h-48 lg:h-52 object-cover"
                  />
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-semibold mb-2">{artifact.artifactName}</h2>
                      <div className="flex justify-between items-center mb-2 text-sm text-gray-500 flex-wrap gap-2">
                        <span>{artifact.artifactType}</span>
                        <span>{artifact.discoveredAt}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Discovered by: {artifact.discoveredBy}
                      </p>
                      <p className="text-sm text-gray-600">Location: {artifact.presentLocation}</p>
                    </div>
                    <div className="mt-4 flex flex-col sm:flex-row justify-between gap-2">
                      <Link
                        to={`/artifactsdetails/${artifact._id}`}
                        className="px-3 py-1 border border-gray-300 rounded text-sm text-center hover:bg-gray-50 flex-1"
                      >
                        View Details
                      </Link>
                      <button
                        aria-label={`Unlike ${artifact.artifactName}`}
                        onClick={() => handleUnlikeBtn(artifact._id)}
                        className="px-3 py-1 border border-red-300 text-red-600 cursor-pointer rounded text-sm hover:bg-red-50 flex-1"
                      >
                        Unlike
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12 px-2">
              <Link to="/all-artifacts">
                <div className="inline-block px-4 py-2 border border-amber-600 text-amber-600 rounded hover:bg-amber-50 transition">
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
