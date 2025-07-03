import React, { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { HistoryContext } from '../contexts/HistoryContext';
import axios from 'axios';
import { ArrowLeft, Eye, Heart, Calendar, MapPin, User } from 'lucide-react';

const ArtifactDetails = () => {
  const artifact = useLoaderData();
  const { user } = useContext(HistoryContext);
  const userEmail = user?.email;

  const [likeCount, setLikeCount] = useState(artifact.liked || 0);
  const [isLiked, setIsLiked] = useState(false);

useEffect(() => {
  const checkLiked = async () => {
    if (!userEmail) return;
    try {
      const res = await axios.get(
        `https://historical-artifacts.vercel.app0/api/likedartifacts/check/${artifact._id}/${userEmail}`
      );
      setIsLiked(res.data.liked);
    } catch (err) {
      console.error('Error checking liked status:', err);
      setIsLiked(false);
    }
  };
  checkLiked();
}, [artifact._id, userEmail]);



  const handleLikeBtn = async () => {
    if (!userEmail) {
      alert('Please login to like this artifact');
      return;
    }

    try {
      const res = await axios.patch(
        `https://historical-artifacts.vercel.app0/api/like/${artifact._id}`,
        { userEmail }
      );

      if (res.data.modifiedCount > 0) {
        const nowLiked = res.data.liked;
        setIsLiked(nowLiked);
        setLikeCount(prev => nowLiked ? prev + 1 : Math.max(prev - 1, 0));
      } else {
        console.warn('No modification done in like toggle');
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/all-artifacts">
            <button className="inline-flex items-center border border-gray-300 rounded px-4 py-2 text-sm hover:bg-amber-50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Artifacts
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image + Quick Stats */}
          <div className="space-y-4">
            <div className="overflow-hidden rounded-lg shadow-sm border">
              <img
                src={artifact.image}
                alt={artifact.artifactName}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>

            <div className="border rounded-lg shadow-sm p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-600">Views: 1,247</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart
                  className={`w-4 h-4 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-500'}`}
                />
                <span className="text-sm text-gray-600">{likeCount} likes</span>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div className="border rounded-lg shadow-sm p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h2 className="text-2xl lg:text-3xl mb-2 font-bold">
                    {artifact.artifactName}
                  </h2>
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                    {artifact.artifactType}
                  </span>
                </div>
                <button
                  onClick={handleLikeBtn}
                  className={`ml-4 px-4 py-2 rounded-md cursor-pointer text-sm font-semibold flex items-center ${isLiked
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'border border-red-300 text-red-600 hover:bg-red-50'
                    }`}
                >
                  <Heart className={`w-5 h-5 mr-2  ${isLiked ? 'fill-current ' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </button>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                {artifact.description}
              </p>
            </div>

            <div className="border rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-2">Historical Context</h3>
              <p className="text-gray-700 leading-relaxed">
                {artifact.historicalContext}
              </p>
            </div>

            <div className="border rounded-lg shadow-sm p-6 space-y-4">
              <h3 className="text-xl font-bold mb-4">Artifact Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p className="font-medium">{artifact.createdAt}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Discovered At</p>
                    <p className="font-medium">{artifact.discoveredAt}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Discovered By</p>
                    <p className="font-medium">{artifact.discoveredBy}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Present Location</p>
                    <p className="font-medium">{artifact.presentLocation}</p>
                  </div>
                </div>
              </div>

              <hr className="border-t border-gray-200 my-4" />

              <div>
                <p className="text-sm text-gray-500 mb-1">Added by</p>
                <p className="font-medium">{artifact.userName}</p>
                <p className="text-sm text-gray-600">{artifact.userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
