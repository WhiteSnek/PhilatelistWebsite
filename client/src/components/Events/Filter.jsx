import React, { useState } from 'react';
import { Slider, Button, Typography } from '@mui/material';

// Sample data for categories and types of stamps
const categories = ["Rare", "Vintage", "Commemorative", "Limited Edition"];
const stampTypes = ["Postal", "Revenue", "Air Mail", "Provisional"];

const Filter = ({ onFilterChange }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Local state to manage filters before applying
  const [localCategories, setLocalCategories] = useState(selectedCategories);
  const [localTypes, setLocalTypes] = useState(selectedTypes);
  const [localPriceRange, setLocalPriceRange] = useState(priceRange);

  const handleCategoryChange = (category) => {
    setLocalCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleTypeChange = (stampType) => {
    setLocalTypes((prev) =>
      prev.includes(stampType)
        ? prev.filter((item) => item !== stampType)
        : [...prev, stampType]
    );
  };

  const handlePriceRangeChange = (event, newValue) => {
    setLocalPriceRange(newValue);
  };

  const applyFilters = () => {
    onFilterChange({
      categories: localCategories,
      types: localTypes,
      priceRange: localPriceRange
    });
  };

  const clearFilters = () => {
    setLocalCategories([]);
    setLocalTypes([]);
    setLocalPriceRange([0, 1000]);
    onFilterChange({
      categories: [],
      types: [],
      priceRange: [0, 1000]
    });
  };

  return (
    <div className="fixed top-[5rem] left-2 w-80  shadow-lg p-4 bg-white border-2 border-black rounded-md h-full" style={{ height: 'calc(100vh - 5.5rem)' }}>
      <h1 className='text-2xl font-semibold text-center'>
        Filters
      </h1>

      {/* Categories */}
      <div className="mb-4">
        <h2 className='text-lg mb-2'>
          Categories
        </h2>
        {categories.map((category) => (
          <div key={category} className="mb-2">
            <label className="inline-flex items-center">
            <input
              type="checkbox"
              id={category}
              checked={localCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
              className="form-checkbox h-5 w-5 text-black accent-black"
            />
              <span className="ml-2">{category}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Types of Stamps */}
      <div className="mb-4">
        <h2 className='text-lg mb-2'>
          Types of Stamps
        </h2>
        {stampTypes.map((stampType) => (
          <div key={stampType} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={localTypes.includes(stampType)}
                onChange={() => handleTypeChange(stampType)}
                className="form-checkbox h-5 w-5 text-black accent-black"
              />
              <span className="ml-2">{stampType}</span>
            </label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <Typography variant="subtitle1" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={localPriceRange}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        step={10}
        aria-labelledby="price-range-slider"
        sx={{
            color: 'black', // Change the slider color to black
            '& .MuiSlider-thumb': {
              border: '2px solid black', // Change thumb border color to black
            },
            '& .MuiSlider-rail': {
              backgroundColor: 'black', // Change rail color to black
            },
            '& .MuiSlider-track': {
              backgroundColor: 'black', // Change track color to black
            },
          }}
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>₹{localPriceRange[0]}</span>
        <span>₹{localPriceRange[1]}</span>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2" >
        <button onClick={applyFilters} className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition-all">
          Apply Filters
        </button>
        <button className="border-black border-2 py-2 px-6 rounded-md hover:bg-black hover:text-white transition-all" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
