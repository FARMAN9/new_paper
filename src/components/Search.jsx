import React, { useState, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import SelectCountry from './SelectCountry';
import { fetchNews } from '../store/slice/newsApiSlice';
 // Make sure t
 const countries = [
    { code: 'au', name: 'Australia' },
    { code: 'br', name: 'Brazil' },
    { code: 'ca', name: 'Canada' },
    { code: 'cn', name: 'China' },
    { code: 'eg', name: 'Egypt' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' },
    { code: 'gr', name: 'Greece' },
    { code: 'hk', name: 'Hong Kong' },
    { code: 'in', name: 'India' },
    { code: 'ie', name: 'Ireland' },
    { code: 'il', name: 'Israel' },
    { code: 'it', name: 'Italy' },
    { code: 'jp', name: 'Japan' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'no', name: 'Norway' },
    { code: 'pk', name: 'Pakistan' },
    { code: 'pe', name: 'Peru' },
    { code: 'ph', name: 'Philippines' },
    { code: 'pt', name: 'Portugal' },
    { code: 'ro', name: 'Romania' },
    { code: 'ru', name: 'Russian Federation' },
    { code: 'sg', name: 'Singapore' },
    { code: 'es', name: 'Spain' },
    { code: 'se', name: 'Sweden' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'tw', name: 'Taiwan' },
    { code: 'ua', name: 'Ukraine' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'us', name: 'United States' },
  ];
const Search = () => {
    
  const [query, setQuery] = useState('all');

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchNews({ query }));
    }
  };
  const [selectedCountry, setSelectedCountry] = useState('in');
 
  const news = useSelector((state) => state.news); // Adjust selector as needed


  useEffect(() => {
    dispatch(fetchNews({ query, country: selectedCountry }));
  }, [dispatch, query, selectedCountry]);



  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  return (
    <div className='search_select'>
    <div className='search'>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        placeholder='Search for news...'
      />
      <button onClick={handleSearch}>Search</button>
    </div>
    <SelectCountry
     countries={countries}
     selectedCountry={selectedCountry}
     onCountryChange={handleCountryChange} />
    </div>
  );
};

export default Search;

