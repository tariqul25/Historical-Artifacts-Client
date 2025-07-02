<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router';
import { FaEye, FaHeart } from 'react-icons/fa';

const AllArtifacts = () => {
  const allArtifactsData = useLoaderData();
  console.log(allArtifactsData);

  const [searchText, setSearchText] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filteredArtifacts, setFilteredArtifacts] = useState(allArtifactsData);

  // Extract unique types from artifacts for filter dropdown
  const artifactTypes = Array.from(
    new Set(allArtifactsData.map((artifact) => artifact.artifactType))
  ).filter(Boolean);

  // Filter logic: run whenever searchText or filterType changes
  useEffect(() => {
    const filtered = allArtifactsData.filter((artifact) => {
      const matchesSearch = artifact.artifactName
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesType = filterType === 'all' || artifact.artifactType === filterType;

      return matchesSearch && matchesType;
    });
    setFilteredArtifacts(filtered);
  }, [searchText, filterType, allArtifactsData]);

  return (
    <div className="flex flex-col items-center py-6 px-4">
          <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            All Historical Artifacts
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our complete collection of historical treasures from around the world
          </p>
        </div>
      {/* Search + Filter */}
      <div className="mb-6 flex flex-col md:flex-row gap-4 items-center justify-center w-full max-w-xl mx-auto">
        {/* Search Input */}
        <div className="w-full md:w-72 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1011.25 4.5a7.5 7.5 0 005.4 12.15z"
            />
          </svg>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search artifacts by name..."
            className="input input-bordered w-full pl-10"
          />
        </div>

        {/* Filter Dropdown */}
        <div className="w-full md:w-48 relative">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="input input-bordered w-full appearance-none pr-8"
          >
            <option value="all">All Types</option>
            {artifactTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {/* Optional filter icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM4 12h16M4 20h10a1 1 0 001-1v-3a1 1 0 00-.293-.707L13 12"
            />
          </svg>
        </div>
      </div>

      

      {/* Artifact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {filteredArtifacts.length > 0 ? (
          filteredArtifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full border rounded-lg"
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
                <h2 className="text-xl font-bold mb-2 line-clamp-2">
                  {artifact.artifactName}
                </h2>

                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-1 bg-secondary text-white px-2 py-1 rounded text-sm">
                    <FaHeart className="text-white" /> {artifact.liked}
                  </div>
                  <span className="text-sm text-gray-500">{artifact.createdAt}</span>
                </div>

                <p className="text-sm text-justify text-gray-700 flex-grow mb-4">
                  {artifact.historicalContext}
                </p>
              </div>

              {/* Footer */}
              <div className="p-4 pt-0">
                <Link to={`/artifactsdetails/${artifact._id}`} className="w-full block">
                  <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded px-4 py-2 text-sm hover:bg-amber-50 hover:border-amber-300">
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
            <p className="text-gray-500 mb-6">Try adjusting your search terms or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
=======
import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AllArtifacts = () => {
    const AllArtifacts = useLoaderData();
    // console.log(AllArtifacts);

    return (
        <div className='flex justify-center py-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4'>
                {
                    AllArtifacts.map(artifacts =>
                        
                        <div key={artifacts.id}>
                            
                            <div className="card shadow-sm flex flex-col h-full">
                                <figure>
                                    <img
                                        className='w-full h-60 object-cover object-top'
                                        src={artifacts.image}
                                        alt="Artifact"
                                    />
                                </figure>
                                <div className="card-body flex flex-col flex-1">
                                    <h2 className="card-title">
                                        {artifacts.artifactName}
                                        <div className="badge badge-secondary">{artifacts.liked}</div>
                                    </h2>
                                    <p className="flex-grow">{artifacts.historicalContext}</p>
                                    <div className="card-actions justify-end flex-wrap gap-2">
                                        <div className="badge badge-outline w-full">{artifacts.presentLocation}</div>
                                        <div className='flex items-center justify-between w-full '>
                                            <div className="badge badge-outline text-xs">Created At: {artifacts.createdAt}</div>
                                           <Link to={`/artifactsdetails/${artifacts._id}`} ><button className='btn btn-outline btn-xs'>details artifacts</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
};

export default AllArtifacts;
