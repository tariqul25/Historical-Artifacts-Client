<<<<<<< HEAD
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
      try {
        const res = await axios.get(
          `https://histoic-artifacts-server.vercel.app/api/likedartifacts/check/${artifact._id}/${userEmail}`
        );
        setIsLiked(res.data.liked);
      } catch (err) {
        console.error('Error checking liked status:', err);
      }
    };
    if (userEmail) checkLiked();
  }, [artifact._id, userEmail]);

   const handleLike = async () => {
    try {
      const res = await axios.patch(
        `https://histoic-artifacts-server.vercel.app/api/like/${artifact._id}`,
        { userEmail }
      );

      if (res.data.modifiedCount > 0) {
        setIsLiked(res.data.liked);
        setLikeCount(prev => res.data.liked ? prev + 1 : prev - 1);
=======
import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import axios from 'axios';

const AritfactsDetails = () => {
  const artifact = useLoaderData();

  const userEmail = 'imtariqul21@gmail.com';

  const [likedCount, setLikedCount] = useState(artifact.liked || 0);
  const [likedByUser, setLikedByUser] = useState(false);

  useEffect(() => {
    async function checkLiked() {
      try {
        const res = await axios.get(`http://localhost:3000/api/likedartifacts/check/${artifact._id}/${userEmail}`);
        setLikedByUser(res.data.liked); 
      } catch (error) {
        console.error('Error checking liked status:', error);
      }
    }
    checkLiked();
  }, [artifact._id, userEmail]);

  const handleLikeBtn = async () => {
    try {
      const res = await axios.patch(`http://localhost:3000/api/like/${artifact._id}`, {
        userEmail,
      });

      if (res.data.modifiedCount > 0) {
        setLikedByUser(res.data.liked);
        setLikedCount(prev => res.data.liked ? prev + 1 : prev - 1);
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

<<<<<<< HEAD

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/artifacts">
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
                  onClick={handleLike}
                  className={`ml-4 px-4 py-2 rounded-md cursor-pointer text-sm font-semibold flex items-center ${
                    isLiked
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'border border-red-300 text-red-600 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2  ${isLiked ? 'fill-current' : ''}`} />
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
=======
  return (
    <div>
      <span className="flex justify-center pt-4">
        <button onClick={handleLikeBtn} className="btn btn-primary">
          {likedByUser ? '💔 Unlike' : '❤️ Like'} - {likedCount}
        </button>
      </span>

      <div className="w-full flex p-6 gap-4">
        <div className="w-5/12 bg-green-400 rounded-md space-y-4 p-4">
          <p>{artifact.artifactType}</p>
          <p>{artifact.artifactName}</p>
          <p>{artifact.discoveredAt}</p>
          <p>{artifact.discoveredBy}</p>
          <p>{artifact.presentLocation}</p>
        </div>

        <div className="w-7/12 relative">
          <img
            className="h-96 w-full object-cover rounded-xl"
            src={artifact.image}
            alt=""
          />
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
        </div>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default ArtifactDetails;
=======
export default AritfactsDetails;
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
