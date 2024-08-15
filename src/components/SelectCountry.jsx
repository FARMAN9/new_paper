import React from 'react';

const SelectCountry = ({ countries, selectedCountry, onCountryChange }) => {
  return (
    <div className='select-country'>
      <label htmlFor='country'>Select Country:</label>
      <select
        id='country'
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
      >
        <option value=''>Select a country</option>
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
