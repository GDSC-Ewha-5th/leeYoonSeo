import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { getApi } from "./lib/api";
import  SearchBar  from "./components/SearchBar";

function App() {
  const [userData, setUserData] = useState(null);

  const getUserData = async () => {
    const data = await getApi('Nahee-Park');
    console.log('data in app', data);
    setUserData(data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar />
      {userData && <div>{userData.login}</div>}
    </div>
  );
}

export default App;
