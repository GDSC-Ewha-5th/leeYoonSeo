// src/components/ResultCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const ResultCard = ({ userData }) => {
  return (
    userData && (
      <CardContainer>
        <Avatar src={userData.avatar_url} alt="User Avatar" />
        <h2>{userData.name}</h2>
        <p>{userData.login}</p>
        <p>{userData.bio}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>Public Repositories: {userData.public_repos}</p>
      </CardContainer>
    )
  );
};

export default ResultCard;
