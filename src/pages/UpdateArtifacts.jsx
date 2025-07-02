<<<<<<< HEAD
import React, { useContext } from "react";
=======
import React, { use } from "react";
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import { HistoryContext } from "../contexts/HistoryContext";

const artifactTypes = [
  "Tools", "Weapons", "Documents", "Writings", "Sculpture",
  "Funerary Mask", "Gold & Silver Religious Statues",
  "Alabaster Vase", "Wooden Model", "Wool Carpet",
];

<<<<<<< HEAD
const UpdateArtifact = () => {
  const { user, loading } = useContext(HistoryContext);
  const artifact = useLoaderData();
  console.log(artifact);
=======
const UpdateArtifacts = () => {
  const { user, loading } = use(HistoryContext);
  const artifact = useLoaderData();
  console.log(artifact);
  console.log(artifact);
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
  const navigate = useNavigate();

  if (loading) {
    return <p className="text-center py-10 font-semibold">Loading...</p>;
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
<<<<<<< HEAD
    updatedData.userEmail = user?.email || "";
    updatedData.userName = user?.displayName || "";

    axios.put(
      `https://histoic-artifacts-server.vercel.app/api/updateartifacts/${artifact._id}`,
      updatedData
    )
      .then(() => {
=======

    updatedData.userEmail = user?.email || "";
    updatedData.userName = user?.displayName || "";

    axios.put(`http://localhost:3000/api/shareartifacts/${artifact._id}`, updatedData)
      .then((res) => {
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
        Swal.fire({
          icon: "success",
          title: "Artifact updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
<<<<<<< HEAD
        navigate("/my-artifacts");
      })
      .catch(() => {
=======
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
        Swal.fire({
          icon: "error",
          title: "Update failed",
          text: "Something went wrong!",
        });
      });
  };

  return (
<<<<<<< HEAD
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
=======
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Artifact</h2>

      <form onSubmit={handleUpdate} className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Artifact Name</label>
            <input
              name="artifactName"
              type="text"
              defaultValue={artifact.artifactName}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              name="image"
              type="url"
              defaultValue={artifact.image}
              className="border p-2 w-full rounded"
              required
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Artifact Type</label>
          <select
            name="artifactType"
            className="border p-2 w-full rounded"
            defaultValue={artifact.artifactType}
          >
            {artifactTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-1">Historical Context</label>
          <textarea
            name="historicalContext"
            rows="3"
            defaultValue={artifact.historicalContext}
            className="border p-2 w-full rounded"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Created At</label>
            <input
              name="createdAt"
              type="text"
              defaultValue={artifact.createdAt}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Discovered At</label>
            <input
              name="discoveredAt"
              type="text"
              defaultValue={artifact.discoveredAt}
              className="border p-2 w-full rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Discovered By</label>
            <input
              name="discoveredBy"
              type="text"
              defaultValue={artifact.discoveredBy}
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Present Location</label>
            <input
              name="presentLocation"
              type="text"
              defaultValue={artifact.presentLocation}
              className="border p-2 w-full rounded"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">User Email</label>
            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="border p-2 w-full rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">User Name</label>
            <input
              type="text"
              value={user?.displayName || ""}
              readOnly
              className="border p-2 w-full rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded cursor-pointer"
          >
            Update
          </button>
        </div>
      </form>
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
    </div>
  );
};

<<<<<<< HEAD
export default UpdateArtifact;
=======
export default UpdateArtifacts;
>>>>>>> d7eada240e4ae6c88b3bec50bacef9b8c3ea074b
