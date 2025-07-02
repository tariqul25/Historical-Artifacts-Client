import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import { HistoryContext } from "../contexts/HistoryContext";

const artifactTypes = [
  "Tools", "Weapons", "Documents", "Writings", "Sculpture",
  "Funerary Mask", "Gold & Silver Religious Statues",
  "Alabaster Vase", "Wooden Model", "Wool Carpet",
];

const UpdateArtifact = () => {
  const { user, loading } = useContext(HistoryContext);
  const artifact = useLoaderData();
  console.log(artifact);
  const navigate = useNavigate();

  if (loading) {
    return <p className="text-center py-10 font-semibold">Loading...</p>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    updatedData.userEmail = user?.email || "";
    updatedData.userName = user?.displayName || "";

    axios.put(
      `https://historical-artifacts.vercel.app/api/updateartifacts/${artifact._id}`,
      updatedData
    )
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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Update Artifact</h1>
          <p className="text-gray-600">Edit your artifact details</p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-1">Artifact Name</p>
              <input
                type="text"
                name="artifactName"
                defaultValue={artifact.artifactName}
                required
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>

            <div>
              <p className="font-semibold mb-1">Image URL</p>
              <input
                type="url"
                name="image"
                defaultValue={artifact.image}
                required
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>
          </div>

          <div>
            <p className="font-semibold mb-1">Artifact Type</p>
            <select
              name="artifactType"
              defaultValue={artifact.artifactType}
              className="w-full border border-gray-300 rounded p-3"
            >
              {artifactTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <p className="font-semibold mb-1">Historical Context</p>
            <textarea
              name="historicalContext"
              rows="3"
              defaultValue={artifact.historicalContext}
              required
              className="w-full border border-gray-300 rounded p-3"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-1">Created At</p>
              <input
                type="text"
                name="createdAt"
                defaultValue={artifact.createdAt}
                required
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>

            <div>
              <p className="font-semibold mb-1">Discovered At</p>
              <input
                type="text"
                name="discoveredAt"
                defaultValue={artifact.discoveredAt}
                required
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-1">Discovered By</p>
              <input
                type="text"
                name="discoveredBy"
                defaultValue={artifact.discoveredBy}
                required
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>

            <div>
              <p className="font-semibold mb-1">Present Location</p>
              <input
                type="text"
                name="presentLocation"
                defaultValue={artifact.presentLocation}
                required
                className="w-full border border-gray-300 rounded p-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold mb-1">Your Email</p>
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full border border-gray-300 rounded p-3 bg-gray-100"
              />
            </div>

            <div>
              <p className="font-semibold mb-1">Your Name</p>
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="w-full border border-gray-300 rounded p-3 bg-gray-100"
              />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded"
            >
              Update Artifact
            </button>
            <button
              type="button"
              onClick={() => navigate("/my-artifacts")}
              className="border border-gray-400 px-6 py-3 rounded hover:bg-gray-100"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtifact;
