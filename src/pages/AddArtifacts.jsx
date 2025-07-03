import React from "react";
import { Navigate, useNavigate } from "react-router";
import { HistoryContext } from "../contexts/HistoryContext";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Loading from "./Loading";

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
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  if (loading) {
    return <Loading></Loading>
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
      await axiosSecure.post("/api/shareartifacts", data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Artifact added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset();
      navigate(`/shareartifacts/${user?.email}`);
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
    <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Add New Artifact
          </h1>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl">
            Share a piece of history with the world
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Artifact Details</h2>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                    Artifact Name *
                  </label>
                  <input
                    name="artifactName"
                    type="text"
                    placeholder="Enter artifact name"
                    className="border p-2 sm:p-3 md:p-4 w-full rounded text-sm sm:text-base md:text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                    Artifact Type *
                  </label>
                  <select
                    name="artifactType"
                    className="border p-2 sm:p-3 md:p-4 w-full rounded text-sm sm:text-base md:text-lg"
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

              <div>
                <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                  Artifact Image URL *
                </label>
                <input
                  name="image"
                  type="url"
                  placeholder="https://example.com/image.jpg"
                  className="border p-2 sm:p-3 md:p-4 w-full rounded text-sm sm:text-base md:text-lg"
                  required
                  defaultValue=""
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                    Created At
                  </label>
                  <input
                    name="createdAt"
                    type="text"
                    placeholder="e.g. 2500 BCE"
                    className="border p-2 sm:p-3 md:p-4 w-full rounded text-sm sm:text-base md:text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                    Discovered At
                  </label>
                  <input
                    name="discoveredAt"
                    type="text"
                    placeholder="Discovery location"
                    className="border p-2 sm:p-3 md:p-4 w-full rounded text-sm sm:text-base md:text-lg"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                    Discovered By
                  </label>
                  <input
                    name="discoveredBy"
                    type="text"
                    placeholder="Archaeologist name"
                    className="border p-2 sm:p-3 md:p-4 w-full rounded text-sm sm:text-base md:text-lg"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                    Present Location
                  </label>
                  <input
                    name="presentLocation"
                    type="text"
                    placeholder="Current museum/location"
                    className="border p-2 sm:p-3 md:p-4 w-full rounded text-sm sm:text-base md:text-lg"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                  Historical Context *
                </label>
                <textarea
                  name="historicalContext"
                  rows="3"
                  placeholder="Describe the historical context"
                  className="border p-2 sm:p-3 md:p-4 w-full rounded text-sm sm:text-base md:text-lg"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={user?.displayName}
                    readOnly
                    className="border p-2 sm:p-3 md:p-4 w-full rounded bg-gray-100 text-sm sm:text-base md:text-lg"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-1 text-sm sm:text-base md:text-lg">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    readOnly
                    className="border p-2 sm:p-3 md:p-4 w-full rounded bg-gray-100 text-sm sm:text-base md:text-lg"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 cursor-pointer text-white px-6 sm:px-8 py-3 rounded font-semibold text-base sm:text-lg md:text-xl transition"
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
