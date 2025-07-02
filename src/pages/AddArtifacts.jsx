import React from "react";
import { use } from "react";
import { Navigate, useNavigate } from "react-router";
import { HistoryContext } from "../contexts/HistoryContext";
import Swal from "sweetalert2";
import axios from "axios";

const artifactTypes = [
  "Tools",
  "Weapons",
  "Documents",
  "Writings",
  "Sculpture",
  "Funerary Mask",
  "Gold & Silver Religious Statues",
  "Alabaster Vase",
  "Wooden Model",
  "Wool Carpet",
];

const AddArtifact = () => {
  const { user, loading } = use(HistoryContext);
  const navigate = useNavigate();

  if (loading) {
    return <p className="text-center py-10 font-semibold">Loading...</p>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    data.userEmail = user?.email || "";
    data.userName = user?.displayName || "";
    data.liked = 0;

    try {
      await axios.post(
        "https://histoic-artifacts-server.vercel.app/api/shareartifacts",
        data
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Artifact added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
      navigate("/all-artifacts");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while adding artifact!",
      });
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Add New Artifact
          </h1>
          <p className="text-gray-600 text-lg">
            Share a piece of history with the world
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4">
            <h2 className="text-2xl font-bold">Artifact Details</h2>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1">
                    Artifact Name *
                  </label>
                  <input
                    name="artifactName"
                    type="text"
                    placeholder="Enter artifact name"
                    className="border p-3 w-full rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Artifact Type *
                  </label>
                  <select
                    name="artifactType"
                    className="border p-3 w-full rounded"
                    required
                  >
                    {artifactTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Hardcoded Image URL input */}
              <div>
                <label className="block font-semibold mb-1">
                  Artifact Image URL *
                </label>
                <input
                  name="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="border p-3 w-full rounded"
                  required
                  defaultValue=""
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1">
                    Created At
                  </label>
                  <input
                    name="createdAt"
                    type="text"
                    placeholder="e.g. 2500 BCE"
                    className="border p-3 w-full rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Discovered At
                  </label>
                  <input
                    name="discoveredAt"
                    type="text"
                    placeholder="Discovery location"
                    className="border p-3 w-full rounded"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1">
                    Discovered By
                  </label>
                  <input
                    name="discoveredBy"
                    type="text"
                    placeholder="Archaeologist name"
                    className="border p-3 w-full rounded"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1">
                    Present Location
                  </label>
                  <input
                    name="presentLocation"
                    type="text"
                    placeholder="Current museum/location"
                    className="border p-3 w-full rounded"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1">
                  Historical Context *
                </label>
                <textarea
                  name="historicalContext"
                  rows="3"
                  placeholder="Describe the historical context"
                  className="border p-3 w-full rounded"
                  required
                ></textarea>
              </div>

              {/* Readonly user info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1">Your Name *</label>
                  <input
                    type="text"
                    value={user?.displayName}
                    readOnly
                    className="border p-3 w-full rounded bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">Your Email *</label>
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="border p-3 w-full rounded bg-gray-100"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded font-semibold"
                >
                  Add Artifact
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArtifact;
