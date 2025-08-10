import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router';
import { HistoryContext } from '../contexts/HistoryContext';
import { ArrowLeft, Eye, Heart, Calendar, MapPin, User } from 'lucide-react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Loading from './Loading';

const ArtifactDetails = () => {
  const { user,setIsLiked,isLiked,setLikeCount,likeCount} = useContext(HistoryContext);
  const userEmail = user?.email;
  const axiosSecure = useAxiosSecure();

  const { id } = useParams(); 

  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchArtifact = async () => {
      setLoading(true);
      try {
        const { data } = await axiosSecure.get(`/api/allartifacts/${id}`);
        setArtifact(data);
        setLikeCount(data.liked || 0);
      } catch (err) {
        console.error('Failed to load artifact:', err);
      }
      setLoading(false);
    };

    fetchArtifact();
  }, [id, axiosSecure]);

  useEffect(() => {
    const checkLiked = async () => {
      if (!userEmail || !artifact?._id) return;
      try {
        const res = await axiosSecure.get(`/api/likedartifacts/check/${artifact._id}/${userEmail}`);
        setIsLiked(res.data.liked);
      } catch (err) {
        console.error('Error checking liked status:', err);
        setIsLiked(false);
      }
    };
    checkLiked();
  }, [artifact?._id, userEmail, axiosSecure]);

  const handleLikeBtn = async () => {
    if (!userEmail) {
      alert('Please login to like this artifact');
      return;
    }
    try {
      const res = await axiosSecure.patch(`/api/like/${artifact._id}`, { userEmail });
      if (res.data.modifiedCount > 0) {
        const nowLiked = res.data.liked;
        setIsLiked(nowLiked);
        setLikeCount(prev => (nowLiked ? prev + 1 : Math.max(prev - 1, 0)));
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  if (loading) return <Loading></Loading>;
  if (!artifact) return <div>Artifact not found</div>;

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 ">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/all-artifacts">
            <button className="inline-flex items-center border cursor-pointer border-gray-300 text-black rounded px-4 py-2 text-sm hover:bg-amber-50 transition">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Artifacts
            </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image + Quick Stats */}
          <div>
            <div className="space-y-4">
            <div className="overflow-hidden rounded-lg shadow-sm border">
              <img
                src={artifact.image}
                alt={artifact.artifactName}
                className="w-full h-100 lg:h-[500px] object-cover"
              />
            </div>

            <div className="border rounded-lg shadow-sm p-4 flex justify-between">
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5 text-gray-500" />
                <span className="text-sm text-gray-600">Views: 1,247</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart
                  className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-500'}`}
                />
                <span className="text-sm text-gray-600">{likeCount} likes</span>
              </div>
            </div>
          </div>
          </div>

          {/* Details Section */}
          <div className="space-y-2">
            <div className="border rounded-lg shadow-sm p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-black">
                    {artifact.artifactName}
                  </h2>
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                    {artifact.artifactType}
                  </span>
                </div>
                <button
                  onClick={handleLikeBtn}
                  className={`px-4 py-2 rounded-md cursor-pointer text-sm font-semibold flex items-center transition-colors ${
                    isLiked
                      ? 'bg-red-500 text-white hover:bg-red-600'
                      : 'border border-red-300 text-red-600 hover:bg-red-50'
                  }`}
                >
                  <Heart className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? 'Liked' : 'Like'}
                </button>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mt-4">
                {artifact.description}
              </p>
            </div>

            <div className="border rounded-lg shadow-sm p-3">
              <h3 className="text-xl font-bold mb-2 text-black">Historical Context</h3>
              <p className="text-gray-700 max-h-12 overflow-y-scroll no-scrollbar leading-relaxed">{artifact.historicalContext}</p>
            </div>

            <div className="border rounded-lg shadow-sm p-3 space-y-4">
              <h3 className="text-xl font-bold mb-4 text-black">Artifact Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p className="font-medium text-black">{artifact.createdAt}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Discovered At</p>
                    <p className="font-medium text-black">{artifact.discoveredAt}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Discovered By</p>
                    <p className="font-medium text-black">{artifact.discoveredBy}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <div>
                    <p className="text-sm text-gray-500">Present Location</p>
                    <p className="font-medium text-black">{artifact.presentLocation}</p>
                  </div>
                </div>
              </div>

              <hr className="border-t border-gray-200 my-4" />

              <div>
                <p className="text-sm text-gray-500 mb-1">Added by</p>
                <p className="font-medium text-black">{artifact.userName}</p>
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
