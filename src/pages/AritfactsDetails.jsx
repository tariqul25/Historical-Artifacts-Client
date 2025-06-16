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
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

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
        </div>
      </div>
    </div>
  );
};

export default AritfactsDetails;
