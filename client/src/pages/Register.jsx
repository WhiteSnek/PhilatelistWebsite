import React, { useState } from 'react';
import { BasicInfo, PhilatelistInfo, AdditionalInfo, ContactPreferences } from '../components/Register';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

// Define the tabs
const tabs = [
  { id: 'basic-info', label: 'Basic Info' },
  { id: 'philatelist-info', label: 'Philatelist Info' },
  { id: 'additional-info', label: 'Additional Info' },
  { id: 'contact-preferences', label: 'Contact Preferences' },
];

const Register = () => {
  const [activeTab, setActiveTab] = useState('basic-info');
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    philatelistInterest: '',
    specialization: '',
    association: '',
    experience: '',
    postalCircle: '',
    favoriteStamp: '',
    address: '',
    socialMedia: '',
    wishlist: '',
    newsletter: 'no',
    newReleases: 'no',
    events: 'no',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', userData);
  };

  const handleReset = () => {
    setUserData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      philatelistInterest: '',
      specialization: '',
      association: '',
      experience: '',
      postalCircle: '',
      favoriteStamp: '',
      address: '',
      socialMedia: '',
      wishlist: '',
      newsletter: 'no',
      newReleases: 'no',
      events: 'no',
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Register</h2>

        {/* Tab Navigation */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex border-b border-gray-300 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 py-3 text-center font-semibold rounded-t-lg ${activeTab === tab.id ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 transition duration-300'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <form onSubmit={handleSubmit}>
          <motion.div
            className="mt-4 min-h-[400px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {activeTab === 'basic-info' && <BasicInfo userData={userData} handleChange={handleChange} />}
            {activeTab === 'philatelist-info' && <PhilatelistInfo userData={userData} handleChange={handleChange} />}
            {activeTab === 'additional-info' && <AdditionalInfo userData={userData} handleChange={handleChange} />}
            {activeTab === 'contact-preferences' && <ContactPreferences userData={userData} handleChange={handleChange} />}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex justify-end space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Register
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Reset
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Register;
