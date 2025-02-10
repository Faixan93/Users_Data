import React, { useState, useEffect } from "react";
import axios from "axios";
const ListApi = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        setUsers(response.data);
      } catch (error) {
        setError(console.error("Error fecthing data: ", error));
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-xl mt-5 text-center">Users-Data</h1>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="flex items-center flex-col">
          <table className="border-collapse md:border-separate border border-gray-400 mt-5 text-center">
            <thead>
              <tr>
                <th className="border border-gray-300 p-3">id</th>
                <th className="border border-gray-300 ">Username</th>
                <th className="border border-gray-300">Email</th>
                <th className="border border-gray-300">Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 pr-5 pl-5">
                    {user.id}
                  </td>
                  <td className="border border-gray-300 pr-5 pl-5">
                    {user.username}
                  </td>
                  <td className="border border-gray-300 pr-5 pl-5">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 pr-5 pl-5">
                    {user.phone}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListApi;
