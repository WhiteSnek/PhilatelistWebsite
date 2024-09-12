import React, { useState } from 'react';
import { Slider,Typography } from '@mui/material';



const Filter = ({ onFilterChange, categories, types }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

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

  const handleTypeChange = (type) => {
    setLocalTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
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

      <div className="mb-4">
        <h2 className='text-lg mb-2'>
          Types of Stamps
        </h2>
        {types.map((type) => (
          <div key={type} className="mb-2">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={localTypes.includes(type)}
                onChange={() => handleTypeChange(type)}
                className="form-checkbox h-5 w-5 text-black accent-black"
              />
              <span className="ml-2">{type}</span>
            </label>
          </div>
        ))}
      </div>

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
            color: 'black',
            '& .MuiSlider-thumb': {
              border: '2px solid black', 
            },
            '& .MuiSlider-rail': {
              backgroundColor: 'black',
            },
            '& .MuiSlider-track': {
              backgroundColor: 'black', 
            },
          }}
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>₹{localPriceRange[0]}</span>
        <span>₹{localPriceRange[1]}</span>
      </div>

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
