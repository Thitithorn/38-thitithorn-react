import React, { useState, useEffect } from 'react';

const UserForm = ({ users: initialUsers, setUsers }) => {
  const [users, setLocalUsers] = useState(initialUsers);
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    position: ''
  });

  useEffect(() => {
    setLocalUsers(initialUsers || []);
  }, [initialUsers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSave = () => {
    const newUser = { ...formData, id: Date.now() };
    const newUsers = [...users, newUser];
    setLocalUsers(newUsers);
    setUsers(newUsers);
    setFormData({ name: '', lastName: '', position: '' });
  };

  const handleDelete = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setLocalUsers(newUsers);
    setUsers(newUsers);
  };

  return (
    <div className="p-8 min-h-screen">
      <h2 className="text-lg font-bold mb-4">Create User</h2>
      
      <div className="flex justify-center p-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded m-3"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded m-3"
        />
        <input
          type="text"
          name="position"
          placeholder="Position"
          value={formData.position}
          onChange={handleInputChange}
          className="p-2 border border-gray-300 rounded m-3"
        />
        <button onClick={handleSave}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Submit
        </button>
      </div>

      <h3 className="text-gray-500 mb-2">Created list</h3>
      <table className="w-full bg-white border border-gray-300 rounded">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Last Name</th>
            <th className="p-2 text-left">Position</th>
            <th className="p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
        {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.lastName}</td>
                <td className="p-2">{user.position}</td>
                <td className="p-2">
                  <button onClick={() => handleDelete(user.id)} 
                  className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-red-500">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserForm;