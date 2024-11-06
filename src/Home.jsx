import React, { useState } from 'react';
import Navbar from './Components/Navbar';

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

  return (
    <div>
      <Navbar />  

      <main>
        <div>
          <h1>Generation Thailand</h1>
          <h2>Home - User Sector</h2>
        </div>
        <div>
          <button>
            User Home Sector
          </button>
          <button>
            Admin Home Sector
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
