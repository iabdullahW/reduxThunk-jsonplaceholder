import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../features/usersSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p className="text-white">Loading user details...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="bg-black h-100vh p-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">User Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-gray-800 p-4 rounded shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-400">{user.website}</a></p>
            <div className="mt-4">
              <h4 className="font-bold">Address:</h4>
              <p>{user.address.street}, {user.address.suite}</p>
              <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
            <div className="mt-4">
              <h4 className="font-bold">Company:</h4>
              <p>{user.company.name}</p>
              <p className="italic">{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
