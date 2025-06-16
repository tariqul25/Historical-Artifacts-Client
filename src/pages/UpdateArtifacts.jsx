import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import axios from "axios";
import { HistoryContext } from "../contexts/HistoryContext";

const artifactTypes = [
  "Tools", "Weapons", "Documents", "Writings", "Sculpture",
  "Funerary Mask", "Gold & Silver Religious Statues",
  "Alabaster Vase", "Wooden Model", "Wool Carpet",
];

const UpdateArtifacts = () => {
  const { user, loading } = use(HistoryContext);
  const artifact = useLoaderData();
  console.log(artifact);
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

    axios.put(`http://localhost:3000/api/shareartifacts/${artifact._id}`, updatedData)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Artifact updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Update failed",
          text: "Something went wrong!",
        });
      });
  };

  return (
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
    </div>
  );
};

export default UpdateArtifacts;
