import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa'; 
import { motion } from 'framer-motion';
import { useUser } from '../provider/UserProvider';

const Profile = () => {
  const userProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg',
    collectionInfo: {
      totalStamps: 120,
      rareStamps: 15,
      totalValue: '₹1,500',
    },
    posts: [
      {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5VlvN_msBC0_LJNGRJF344rQOBhzkvhOxw&s',
        caption: 'Rare stamp from 1965',
        price: '₹200',
      },
      {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShebnrysg_NXoYPcs5CqbqRWvw0r0sutRw-A&s',
        caption: 'Limited edition stamp',
        price: '₹350',
      },
      {
        id: 3,
        image: 'https://d2pn8kiwq2w21t.cloudfront.net/images/1-_Pillars-of-Creation.width-1024.jpg',
        caption: 'Vintage stamp collection',
        price: '₹500',
      },
      {
        id: 4,
        image: 'https://media.dharaastamps.co.in/wp-content/uploads/2022/05/MINT0002.jpg',
        caption: 'Stamp from the 1800s',
        price: '₹250',
      },
      {
        id: 5,
        image: 'https://assets.architecturaldigest.in/photos/6008354b3a9d9570bc841a61/master/w_1600%2Cc_limit/char_D4B4397.jpg',
        caption: 'Rare commemorative stamp',
        price: '₹400',
      },
      {
        id: 6,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJNkluLwLr58g2-5Zvvxbk37MBcqQfXlEeg&s',
        caption: 'Vintage rare stamp',
        price: '₹450',
      },
      {
        id: 7,
        image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/KA/YK/XE/128841748/old-postage-stamps.jpg',
        caption: 'Special edition stamp',
        price: '₹275',
      },
      {
        id: 8,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQumnJtByR9x33UZfLKTnH_okbT5s1gVuzQqQ&s',
        caption: 'Unique stamp from 1920s',
        price: '₹300',
      },
    ]
    
  };

  const {user} = useUser()
  const navigate = useNavigate()
  useEffect(()=>{
    if(!user){
      navigate('/login')
    }
  },[])

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <motion.div
        className="p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-wrap md:flex-nowrap items-center">

          <div className="flex items-center mb-6 md:mb-0">
            <img
              src={userProfile.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-black shadow-lg "
            />
            <div className="ml-4">
              <h1 className="text-3xl font-bold text-gray-900">{userProfile.name}</h1>
              <p className="text-gray-600">{userProfile.email}</p>
              <div className="font-bold hover:underline mt-2 inline-flex items-center cursor-pointer">
                <FaEdit className="mr-1" /> Edit Profile
              </div>
            </div>
          </div>

          <div className="flex-1 md:ml-8">
            <div className="flex relative justify-center items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">My Collection</h2>
              <div className="absolute top-0 cursor-pointer right-0 font-bold hover:underline inline-flex items-center">
                <FaEdit className="mr-1" /> Edit Collection
              </div>
            </div>
            <div className="flex space-x-4 w-1/2 mx-auto">
              <div className="text-center flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{userProfile.collectionInfo.totalStamps}</h3>
                <p className="text-gray-600">Total Stamps</p>
              </div>
              <div className="text-center flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{userProfile.collectionInfo.rareStamps}</h3>
                <p className="text-gray-600">Rare Stamps</p>
              </div>
              <div className="text-center flex-1">
                <h3 className="text-xl font-semibold text-gray-800">{userProfile.collectionInfo.totalValue}</h3>
                <p className="text-gray-600">Total Value</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="bg-white p-6 rounded-lg shadow-lg border-2 border-black"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">Collection Feed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userProfile.posts.map(post => (
            <motion.div
              key={post.id}
              className="border rounded-lg overflow-hidden bg-gray-50"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img src={post.image} alt={post.caption} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-800 font-semibold">{post.caption}</p>
                <p className="text-gray-600 mt-2">{post.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
