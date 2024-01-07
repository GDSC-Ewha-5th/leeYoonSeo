import React, { useState } from 'react';
import { getApi } from '../lib/api';
import ResultCard from './ResultCard';

export function SearchBar() {
  const [input, setInput] = useState('');
  const [userData, setUserData] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getApi(input);
    setUserData(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      {userData && <ResultCard userData={userData} />}
    </div>
  );
}
export default SearchBar;
