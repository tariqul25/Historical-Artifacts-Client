import React from 'react';
import { useLoaderData } from 'react-router';

const AllArtifacts = () => {
    const AllArtifacts = useLoaderData();
    console.log(AllArtifacts);

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
                                            <div className="badge badge-outline">Created At: {artifacts.createdAt}</div>
                                            <button className='btn btn-outline btn-sm'>View Details</button>
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
};

export default AllArtifacts;
