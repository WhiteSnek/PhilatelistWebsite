import React, { useState } from 'react';
import { MdUpload } from 'react-icons/md';
import { IconContext } from 'react-icons/lib';
import { RxCross1 } from 'react-icons/rx';
import { motion } from 'framer-motion';

const AdditionalInfo = ({ userData, handleChange }) => {
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
      handleChange(e);
    }
  };

  const handleRemovePicture = () => {
    setProfilePic(null);

    document.getElementById('profilePictureInput').value = null;
  };

  return (
    <fieldset className="flex flex-col m-12 space-y-4">
      <label className="text-lg font-medium text-gray-700">Profile Picture:</label>
      <motion.div
        className="relative flex flex-col items-center border-dashed border-2 border-gray-300 p-4 rounded-md space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <input
          type="file"
          id="profilePictureInput"
          className="opacity-0 w-full h-full absolute inset-0 cursor-pointer"
          accept="image/*"
          onChange={handleFileChange}
        />
        {profilePic && (
          <motion.div
            className='relative'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <img src={profilePic} alt="Profile Preview" className="w-32 h-32 object-cover rounded-full border border-gray-300" />
            <button
              title='Remove'
              className='absolute top-0 right-0 p-2 bg-black shadow rounded-full'
              onClick={handleRemovePicture}
            >
              <IconContext.Provider value={{ color: "white", size: "20px" }}>
                <RxCross1 />
              </IconContext.Provider>
            </button>
          </motion.div>
        )}
        <button
          className="bg-black text-white px-4 py-2 text-lg rounded flex justify-center items-center gap-2 transition duration-150 ease-in-out hover:bg-gray-800"
        >
          <IconContext.Provider value={{ color: "white", size: "25px" }}>
            <MdUpload />
          </IconContext.Provider>
          Browse
        </button>
      </motion.div>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <label className="block text-gray-700 text-sm font-medium mb-1">Address</label>
        <textarea
          name="address"
          value={userData.address}
          onChange={handleChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter your address"
          required
        />
      </motion.div>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <label className="block text-gray-700 text-sm font-medium mb-1">Social Media Links (Optional)</label>
        <input
          type="text"
          name="socialMedia"
          value={userData.socialMedia}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter social media links"
        />
      </motion.div>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <label className="block text-gray-700 text-sm font-medium mb-1">Wishlist/Interest Tags</label>
        <input
          type="text"
          name="wishlist"
          value={userData.wishlist}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition duration-300"
          placeholder="Enter tags or items in your wishlist"
        />
      </motion.div>
    </fieldset>
  );
};

export default AdditionalInfo;
