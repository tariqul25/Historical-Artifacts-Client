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
};

export default AllArtifacts;
