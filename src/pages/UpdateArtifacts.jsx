import React, { use, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { HistoryContext } from "../contexts/HistoryContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./Loading";

const artifactTypes = [
  "Tools", "Weapons", "Documents", "Writings", "Sculpture",
  "Funerary Mask", "Gold & Silver Religious Statues",
  "Alabaster Vase", "Wooden Model", "Wool Carpet",
];

const UpdateArtifact = () => {
  const { id } = useParams();
  const { user, loading } = use(HistoryContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [artifact, setArtifact] = useState(null); 

  // 👇 Load artifact data securely
  useEffect(() => {
    axiosSecure.get(`/api/shareartifacts/${id}`)
      .then(res => setArtifact(res.data))
      .catch(err => console.error(err));
  }, [axiosSecure, id]);

  if (loading || !artifact) {
    return <Loading />; 
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    updatedData.userEmail = user?.email || "";
    updatedData.userName = user?.displayName || "";

    axiosSecure.put(`/api/updateartifacts/${artifact._id}`, updatedData)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Artifact updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/my-artifacts");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Update failed",
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col items-center py-8 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
            Update Artifact
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Edit your artifact details
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">Artifact Name</p>
              <input
                type="text"
                name="artifactName"
                defaultValue={artifact.artifactName}
                required
                className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>
            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">Image URL</p>
              <input
                type="url"
                name="image"
                defaultValue={artifact.image}
                required
                className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1 text-sm sm:text-base">Artifact Type</p>
            <select
              name="artifactType"
              defaultValue={artifact.artifactType}
              className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
            >
              {artifactTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="font-semibold mb-1 text-sm sm:text-base">Historical Context</p>
            <textarea
              name="historicalContext"
              rows="3"
              defaultValue={artifact.historicalContext}
              required
              className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">Created At</p>
              <input
                type="text"
                name="createdAt"
                defaultValue={artifact.createdAt}
                required
                className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>
            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">Discovered At</p>
              <input
                type="text"
                name="discoveredAt"
                defaultValue={artifact.discoveredAt}
                required
                className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">Discovered By</p>
              <input
                type="text"
                name="discoveredBy"
                defaultValue={artifact.discoveredBy}
                required
                className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>
            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">Present Location</p>
              <input
                type="text"
                name="presentLocation"
                defaultValue={artifact.presentLocation}
                required
                className="w-full border border-gray-300 rounded p-2 sm:p-3 text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">Your Email</p>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full border border-gray-300 rounded p-2 sm:p-3 bg-gray-100 text-sm sm:text-base"
              />
            </div>
            <div>
              <p className="font-semibold mb-1 text-sm sm:text-base">Your Name</p>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="w-full border border-gray-300 rounded p-2 sm:p-3 bg-gray-100 text-sm sm:text-base"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between pt-4 gap-4 sm:gap-0">
          <Link to={`/shareartifacts/${user?.email}`}> <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white cursor-pointer font-semibold px-6 py-3 rounded w-full sm:w-auto"
            >
              Update Artifact
            </button></Link>
            <Link to={`/shareartifacts/${user?.email}`}>
              <button
                type="button"
                className="border border-gray-400 px-6 py-3 rounded hover:bg-gray-100 w-full sm:w-auto"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtifact;
