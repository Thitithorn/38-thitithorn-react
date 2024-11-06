import React from "react";
import Navbar from "./Navbar"
import profileImage from "../assets/my-img.jpg";

const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen flex justify-center items-center">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-semibold text-indigo-600 text-center mb-4">Tongtong-Thitithorn</h1>
          <div className="flex justify-center mb-4">
            <img src={profileImage} alt="Profile" className="w-40 h-40 rounded-full border-4 border-indigo-600" />
          </div>
          <h2 className="text-xl text-gray-700 font-medium mb-2">My Profile:</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
        My name is Tong, and I am thrilled to be part of this community. 
        Being here fills me with a mixture of excitement and exhaustion - it's challenging yet incredibly rewarding. 
        The Generation Thailand (JSD8) cohort is such a warm and welcoming community, where everyone supports each other. As we continue on this journey together, 
        let's keep pushing forward and encouraging one another. The sense of camaraderie here is truly special, making even the most demanding days worthwhile.
        The warmth of our community makes every challenge more manageable, and I'm grateful to be surrounded by such supportive peers. 
        Let's maintain this spirit of mutual support and keep striving toward our goals together. Our shared experiences and determination will surely lead us to success.
        </p>
      </div>
    </div>
    </>
  );
}

export default Profile;