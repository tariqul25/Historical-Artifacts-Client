import React, { use, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
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

                fetch(`https://localhost:3000/api/shareartifacts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                position: "top",
                                icon: "success",
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
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">Topic</th>
                        <th className="px-4 py-2">Difficulity</th>
                        <th className="px-4 py-2">Image</th>
                        <th className="px-4 py-2">Update</th>
                        <th className="px-4 py-2">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allArtifacts.map((artifacts, index) => (
                            <tr key={artifacts._id} className="hover:bg-gray-50">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{artifacts.title}</td>
                                <td className="px-4 py-2">{artifacts.category}</td>
                                <td className="px-4 py-2">{artifacts.topic}</td>
                                <td className="px-4 py-2">{artifacts.difficulty}</td>
                                <td className="px-4 py-2">
                                    <img
                                        className="w-12 h-12 object-cover mx-auto rounded-full"
                                        src={artifacts?.imageUrl}
                                        alt={artifacts.title}
                                    />
                                </td>
                                <td className="px-4 py-2">
                                    <Link to={`/updateartifacts/${artifacts._id}`}><button artifacts={artifacts} className='btn btn-ghost btn-xs'>Update</button></Link>
                                </td>
                                <td className="px-4 py-2">
                                    <button onClick={() => handleartifactsDelete(artifacts._id)} className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyArtifacts;