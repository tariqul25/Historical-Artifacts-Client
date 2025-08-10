import React, { useState, useEffect, useContext } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaEye, FaHeart } from 'react-icons/fa';
import { HistoryContext } from '../contexts/HistoryContext';
import useAxiosSecure from '../hooks/useAxiosSecure';

const AllArtifacts = () => {
  const allArtifactsData = useLoaderData();
  const { user, likedItems, setLikedItems } = useContext(HistoryContext);
  const userEmail = user?.email;

  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('name-asc'); // Name (A-Z) by default
  const [filteredArtifacts, setFilteredArtifacts] = useState(allArtifactsData || []);
  const axiosSecure = useAxiosSecure();

  // Sorting options
  const sortOptions = [
    { value: 'name-asc', label: 'Name (A-Z)' },
    { value: 'name-desc', label: 'Name (Z-A)' },
  ];

  // Filter and sort artifacts whenever searchText, sortOption or allArtifactsData changes
  useEffect(() => {
    if (!allArtifactsData) return;

    let filtered = allArtifactsData.filter((artifact) =>
      artifact.artifactName.toLowerCase().includes(searchText.toLowerCase())
    );

    filtered.sort((a, b) => {
      if (sortOption === 'name-asc') {
        return a.artifactName.localeCompare(b.artifactName);
      } else if (sortOption === 'name-desc') {
        return b.artifactName.localeCompare(a.artifactName);
      }
      return 0;
    });

    setFilteredArtifacts(filtered);
  }, [searchText, sortOption, allArtifactsData]);

  // Load liked artifacts from backend on userEmail change
  useEffect(() => {
    if (!userEmail) {
      setLikedItems({});
      return;
    }

    axiosSecure.get(`/api/liked-artifacts?email=${userEmail}`)
      .then(res => {
        // res.data should be an array of liked artifact IDs
        const likedMap = {};
        res.data.forEach(id => {
          likedMap[id] = true;
        });
        setLikedItems(likedMap);
      })
      .catch(err => {
        console.error('Failed to fetch liked artifacts:', err);
        setLikedItems({});
      });
  }, [userEmail, axiosSecure, setLikedItems]);

  // Toggle like status handler
  const handleLikeBtn = async (artifactId) => {
    if (!userEmail) {
      alert('Please login to like this artifact');
      return;
    }

    try {
      const res = await axiosSecure.patch(`/api/like/${artifactId}`, { userEmail });
      if (res?.data?.modifiedCount > 0) {
        setLikedItems(prev => ({
          ...prev,
          [artifactId]: !prev[artifactId], // toggle like for this artifact
        }));
      }
    } catch (error) {
      console.error('Error toggling like:', error);
    }
  };

  return (
    <div className="flex flex-col items-center py-6 px-4 mt-12">
      <div className="text-center mb-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">All Historical Artifacts</h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our complete collection of historical treasures from around the world
        </p>
      </div>

      {/* Search + Sort */}
      <div className="mb-6 flex sm:flex-row gap-4 justify-between w-full max-w-xl mx-auto">
        {/* Search Input */}
        <div className="w-full sm:w-72 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011.25 4.5a7.5 7.5 0 005.4 12.15z" />
          </svg>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search artifacts by name..."
            className="input input-bordered w-full pl-10"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="w-full sm:w-48 relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="input input-bordered w-full appearance-none pr-8"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM4 12h16M4 20h10a1 1 0 001-1v-3a1 1 0 00-.293-.707L13 12" />
          </svg>
        </div>
      </div>

      {/* Artifact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-7xl px-4 sm:px-6">
        {filteredArtifacts?.length > 0 ? (
          filteredArtifacts?.map((artifact) => (
            <div
              key={artifact._id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border-2 border-amber-100 rounded-lg"
            >
              {/* Image */}
              <div>
                <img
                  src={artifact.image}
                  alt={artifact.artifactName}
                  className="w-full h-48 object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h2 className="text-xl text-black font-bold mb-2 line-clamp-2">{artifact.artifactName}</h2>

                <div className="flex justify-between items-center mb-2">
                  <div
                    onClick={() => handleLikeBtn(artifact._id)}
                    className="flex items-center gap-1 bg-secondary text-white px-2 py-1 rounded text-sm cursor-pointer select-none"
                  >
                    <FaHeart className={likedItems[artifact._id] ? "text-red-500" : "text-white"} />
                    {artifact.liked}
                  </div>

                  <span className="text-sm text-gray-500">{artifact.createdAt}</span>
                </div>

                <p className="text-gray-700 max-h-24 overflow-y-scroll no-scrollbar">
                  {artifact.historicalContext}
                </p>
              </div>

              {/* Footer */}
              <div className="p-4 pt-0">
                <Link to={`/artifactsdetails/${artifact._id}`} className="w-full block">
                  <button className="w-full flex items-center justify-center text-black dark:text-black cursor-pointer gap-2 border border-gray-300 rounded px-4 py-2 text-sm hover:bg-amber-50 hover:border-amber-300 transition">
                    <FaEye className="w-4 h-4" />
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12 col-span-full">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No artifacts found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search terms or sort criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllArtifacts;
