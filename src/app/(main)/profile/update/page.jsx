"use client";
import { useState, useEffect } from "react"; 
import { authClient } from "../../../../lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import React from 'react';

export default function UpdateProfile() {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  
  if (!session) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name: name,
        image: image,
      }, {
        onSuccess: () => {
          toast.success("Profile updated successfully!");
          router.push("/profile"); 
          router.refresh(); 
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        }
      });
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="card w-96 bg-base-100 shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>
        
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="input input-bordered" 
              required 
            />
          </div>
          
          <div className="form-control">
            <label className="label">Image URL</label>
            <input 
              type="text" 
              value={image} 
              onChange={(e) => setImage(e.target.value)} 
              className="input input-bordered" 
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={loading} 
            className="btn btn-success w-full mt-4 text-white"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
}