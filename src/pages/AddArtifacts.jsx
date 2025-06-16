import React from "react";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router";
import { use } from "react";
import axios from "axios";
import { HistoryContext } from "../contexts/HistoryContext";

const artifactTypes = [
  "Tools", "Weapons", "Documents", "Writings", "Sculpture",
  "Funerary Mask", "Gold & Silver Religious Statues",
  "Alabaster Vase", "Wooden Model", "Wool Carpet",
];

const AddArtifact = () => {
  const { user, loading } = use(HistoryContext);
  const navigate=useNavigate()

  if (loading) {
    return <p className="text-center py-10 font-semibold">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.userEmail = user?.email || "";
    data.userName = user?.displayName || "";
    data.liked = 0;

    axios.post("http://localhost:3000/api/shareartifacts", data)
      .then(response => {
        console.log(response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Artifact added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate('/');
      })
      .catch(error => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong while adding artifact!",
        });
        console.error(error);
      });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Add Artifact</h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold mb-1">Artifact Name</label>
            <input
              name="artifactName"
              type="text"
              placeholder="Enter artifact name"
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Image URL</label>
            <input
              name="image"
              type="url"
              placeholder="Enter image URL"
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
            defaultValue={artifactTypes[0]}
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
            placeholder="Describe the historical context"
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
              placeholder="Enter creation date or period"
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Discovered At</label>
            <input
              name="discoveredAt"
              type="text"
              placeholder="Enter discovery location"
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
              placeholder="Enter discoverer's name"
              className="border p-2 w-full rounded"
              required
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">Present Location</label>
            <input
              name="presentLocation"
              type="text"
              placeholder="Enter current location"
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
              value={user?.email}
              readOnly
              className="border p-2 w-full rounded bg-gray-100"
            />
          </div>
          <div>
            <label className="block font-semibold mb-1">User Name</label>
            <input
              type="text"
              value={user?.displayName}
              readOnly
              className="border p-2 w-full rounded bg-gray-100"
            />
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArtifact;
