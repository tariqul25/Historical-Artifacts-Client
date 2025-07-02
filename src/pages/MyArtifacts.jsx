import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
<<<<<<< HEAD
import Swal from 'sweetalert2';
import { HistoryContext } from '../contexts/HistoryContext';
import Loading from './Loading';

import { Plus, Eye, Edit, Trash2, Heart } from 'lucide-react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyArtifacts = () => {
    const myArtifacts = useLoaderData();
    const { loading } = use(HistoryContext);
    const [allArtifacts, setAllArtifacts] = useState(myArtifacts);
    console.log(allArtifacts);
    const axiosInstance=useAxiosSecure()

    if (loading) {
        return <Loading />;
    }

    const handleDelete = (id) => {
=======
import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";
import Swal from 'sweetalert2';
import Loading from './Loading';
import { HistoryContext } from '../contexts/HistoryContext';

const MyArtifacts = () => {
    const myArtifacts = useLoaderData()
    console.log(myArtifacts);
    const {loading}=use(HistoryContext)
    const [allArtifacts, setAllArtifacts] = useState(myArtifacts)
    // console.log(allArtifacts);
    if (loading) {
        return <Loading></Loading>
    }
    const handleartifactsDelete = (id) => {
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
<<<<<<< HEAD
                fetch(`https://histoic-artifacts-server.vercel.app/api/shareartifacts/${id}`, {
=======

                fetch(`http://localhost:3000/api/shareartifacts/${id}`, {
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
<<<<<<< HEAD
=======
                        console.log(data)
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
                        if (data.deletedCount) {
                            Swal.fire({
                                position: "top",
                                icon: "success",
<<<<<<< HEAD
                                title: "Deleted!",
                                text: "Your artifact has been deleted.",
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            const remaining = allArtifacts.filter(artifact => artifact._id !== id);
                            setAllArtifacts(remaining);
                        }
                    });
            }
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">My Artifacts</h1>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Manage the historical artifacts you&apos;ve added to the collection.
                    </p>
                </div>

                {allArtifacts.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="max-w-md mx-auto">
                            <div className="mb-6">
                                <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Plus className="w-12 h-12 text-amber-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                                    No artifacts yet
                                </h3>
                                <p className="text-gray-500 mb-6">
                                    You haven&apos;t added any artifacts to the collection yet. Start by adding your first historical artifact!
                                </p>
                                <Link to="/add-artifact" className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Your First Artifact
                                </Link>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-gray-600">
                                You have added {allArtifacts.length} artifact{allArtifacts.length !== 1 ? 's' : ''}
                            </p>
                            <Link to="/add-artifacts" className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded">
                                <Plus className="w-4 h-4 mr-2" />
                                Add New Artifact
                            </Link>
                        </div>

                        <div className="overflow-x-auto bg-white shadow rounded-lg">
                            <table className="min-w-full text-left text-sm">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-3 font-semibold text-gray-700">Image</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700">Name</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700">Type</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700">Created</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700">Likes</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700">Location</th>
                                        <th className="px-4 py-3 font-semibold text-gray-700">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allArtifacts.map((artifact) => (
                                        <tr key={artifact._id} className="border-b hover:bg-gray-50">
                                            <td className="px-4 py-3">
                                                <img
                                                    src={artifact.image}
                                                    alt={artifact.artifactName}
                                                    className="w-16 h-16 object-cover rounded"
                                                />
                                            </td>
                                            <td className="px-4 py-3">{artifact.artifactName}</td>
                                            <td className="px-4 py-3">{artifact.artifactType}</td>
                                            <td className="px-4 py-3">{artifact.createdAt}</td>
                                            <td className="px-4 py-3 flex items-center  gap-1 mt-5">

                                                <Heart className="w-4 h-4 text-red-500" />
                                                {artifact.likes || 0}
                                            </td>
                                            <td className="px-4 py-3">{artifact.presentLocation}</td>
                                            <td className="px-4 py-3">
                                                <div className="flex gap-2">
                                                    <Link to={`/artifactsdetails/${artifact._id}`}>
                                                        <button className="border border-gray-300 px-3 py-1 rounded text-gray-600 hover:bg-gray-100 flex items-center text-xs">
                                                            <Eye className="w-4 h-4 mr-1" /> View
                                                        </button>
                                                    </Link>
                                                    <Link to={`/updateartifacts/${artifact._id}`}>
                                                        <button className="border border-gray-300 px-3 py-1 rounded text-gray-600 hover:bg-gray-100 flex items-center text-xs">
                                                            <Edit className="w-4 h-4 mr-1" /> Update
                                                        </button>
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(artifact._id)}
                                                        className="border border-gray-300 px-3 py-1 rounded text-red-600 hover:bg-red-50 flex items-center text-xs"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}
            </div>
=======
                                title: "Your work has been saved",
                                showConfirmButton: false,
                                timer: 1500,

                            })

                            const remainingartifacts = allArtifacts.filter(artifacts => artifacts._id !== id)
                            setAllArtifacts(remainingartifacts)
                        }
                    })
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
    return (
        <div className="p-8 overflow-x-auto">
            <table className="table-auto w-full border border-collapse text-center">
                {/* head */}
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">artifactType</th>
                        <th className="px-4 py-2">discoveredAt</th>
                        <th className="px-4 py-2">discoveredBy</th>
                        <th className="px-4 py-2">presentLocation</th>
                        <th className="px-4 py-2">image</th>
                        <th className="px-4 py-2">Update</th>
                        <th className="px-4 py-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allArtifacts.map((artifacts, index) => (
                            <tr key={artifacts._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{artifacts.artifactName}</td>
                                <td className="px-4 py-2">{artifacts.artifactType}</td>
                                <td className="px-4 py-2">{artifacts.discoveredAt}</td>
                                <td className="px-4 py-2">{artifacts.discoveredBy}</td>
                                <td className="px-4 py-2">{artifacts.presentLocation}</td>
                                <td className="px-4 py-2">
                                    <img
                                        className="w-12 h-12 object-cover mx-auto rounded-full"
                                        src={artifacts?.image}
                                        alt={artifacts.title}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <Link to={`/updateartifacts/${artifacts._id}`}><button artifacts={artifacts} className='btn btn-ghost btn-xs'><RxUpdate size='22' /></button></Link>
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleartifactsDelete(artifacts._id)} className="btn btn-ghost btn-xs"><MdDeleteForever size='22' /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
        </div>
    );
};

<<<<<<< HEAD
export default MyArtifacts;
=======
export default MyArtifacts;
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
