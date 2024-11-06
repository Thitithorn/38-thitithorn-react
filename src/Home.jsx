import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import User from "./Components/User";
import Admin from "./Components/Admin";

const Home = () => {
  const [mockEmployees, setMockEmployees] = useState([
    {
      id: 0,
      name: "mock",
      lastname: 'mocklastname',
      position: "Manager"
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer"
    },
    {
      id: 2,
      name: "employee 2",
      lastname: "lord",
      position: "Designer"
    },
  ]);

  const [selector, setSelector] = useState('');

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <main className="container mx-auto p-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-semibold text-indigo-600">Generation Thailand</h1>
          <h2 className="text-xl text-gray-600 mt-2">Home - User Sector</h2>
        </div>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setSelector('user')}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            User Home Sector
          </button>
          <button
            onClick={() => setSelector('admin')}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Admin Home Sector
          </button>
        </div>
        <div>
          {selector === 'user' && <User users={mockEmployees} />}
          {selector === 'admin' && <Admin users={mockEmployees} setUsers={setMockEmployees} />}
        </div>
      </main>
    </div>
  );
}

export default Home;
