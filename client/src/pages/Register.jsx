import React, { useState } from 'react';
import { BasicInfo, PhilatelistInfo, AdditionalInfo, ContactPreferences } from '../components/Register';

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
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6">Register</h2>

        {/* Tab Navigation */}
        <div className="relative">
          <div className="flex border-b border-gray-300 mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`flex-1 py-3 text-center font-semibold rounded-t-lg ${activeTab === tab.id ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <form onSubmit={handleSubmit}>
          <div className="mt-4 min-h-[400px]"> {/* Adjust the height as needed */}
            {activeTab === 'basic-info' && <BasicInfo userData={userData} handleChange={handleChange} />}
            {activeTab === 'philatelist-info' && <PhilatelistInfo userData={userData} handleChange={handleChange} />}
            {activeTab === 'additional-info' && <AdditionalInfo userData={userData} handleChange={handleChange} />}
            {activeTab === 'contact-preferences' && <ContactPreferences userData={userData} handleChange={handleChange} />}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
            >
              Register
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
