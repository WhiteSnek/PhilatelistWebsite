import React from 'react';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'; // Importing edit icon

const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
    collectionInfo: {
      totalStamps: 120,
      rareStamps: 15,
      totalValue: '$1,500',
    },
    posts: [
      { id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5VlvN_msBC0_LJNGRJF344rQOBhzkvhOxw&s', caption: 'Rare stamp from 1965', price: '$200' },
      { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShebnrysg_NXoYPcs5CqbqRWvw0r0sutRw-A&s', caption: 'Limited edition stamp', price: '$350' },
      { id: 3, image: 'https://d2pn8kiwq2w21t.cloudfront.net/images/1-_Pillars-of-Creation.width-1024.jpg', caption: 'Vintage stamp collection', price: '$500' },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* User Details and Collection Information */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex flex-wrap md:flex-nowrap items-center">
          {/* User Details */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              src={user.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-red-500"
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <Link to="/edit-profile" className="text-red-500 hover:underline mt-2 inline-flex items-center">
                <FaEdit className="mr-1" /> Edit Profile
              </Link>
            </div>
          </div>

          {/* Collection Information */}
          <div className="flex-1 md:ml-8">
            <div className="flex justify-between w-2/3 ml-auto items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">My Collection</h2>
              <Link to="/edit-collection" className="text-red-500 hover:underline inline-flex items-center">
                <FaEdit className="mr-1" /> Edit Collection
              </Link>
            </div>
            <div className="flex space-x-4">
              <div className="text-center flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{user.collectionInfo.totalStamps}</h3>
                <p className="text-gray-600">Total Stamps</p>
              </div>
              <div className="text-center flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{user.collectionInfo.rareStamps}</h3>
                <p className="text-gray-600">Rare Stamps</p>
              </div>
              <div className="text-center flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{user.collectionInfo.totalValue}</h3>
                <p className="text-gray-600">Total Value</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Feed */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Collection Feed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.posts.map(post => (
            <div key={post.id} className="border rounded-lg overflow-hidden">
              <img src={post.image} alt={post.caption} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-800 font-semibold">{post.caption}</p>
                <p className="text-gray-600 mt-2">{post.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
