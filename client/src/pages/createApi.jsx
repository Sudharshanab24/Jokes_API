import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "./ParticlesBackground.jsx"; // Import the ParticlesBackground component

const APISchema = z.object({
  Your_name: z.string().nonempty("Name is required"),
  Your_Joke: z.string().nonempty("Joke is required"),
});

const CreateApi = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(APISchema),
  });

  const sendToServer = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await fetch("http://localhost:8000/create", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        alert("Your joke has been posted! Thanks!");
        navigate("/");
      } else {
        const errorData = await response.json();
        alert("Error: " + (errorData.message || "Something went wrong"));
      }
      console.log("Server Response:", response);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Fetch error: " + error.message);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-gray-50 overflow-hidden">
      <ParticlesBackground /> {/* Add the particles background */}
      <div className="bg-white p-10 rounded shadow-md w-full max-w-md z-10">
        <h4 className="font-semibold text-xl mb-4 text-center">Post your jokes</h4>
        <form className="space-y-4" onSubmit={handleSubmit(sendToServer)}>
          <div>
            <label htmlFor="name" className="block text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="px-4 py-2 rounded bg-gray-100 w-full mt-2 outline-none"
              {...register("Your_name")}
            />
            {errors.Your_name && <p className="text-red-600">{errors.Your_name.message}</p>}
          </div>
          
          <div>
            <label htmlFor="jokes" className="block text-gray-600">
              Jokes
            </label>
            <textarea
              id="jokes"
              placeholder="Put your joke here"
              className="px-4 py-2 rounded bg-gray-100 w-full mt-2 outline-none h-32 resize-none"
              {...register("Your_Joke")}
            />
            {errors.Your_Joke && <p className="text-red-600">{errors.Your_Joke.message}</p>}
          </div>
          
          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-transform"
            >
              Post my joke
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateApi;
