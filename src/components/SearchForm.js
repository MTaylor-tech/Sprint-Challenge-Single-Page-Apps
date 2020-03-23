import React, { useState } from "react";
import styled from 'styled-components';

const SForm = styled.section`
  text-align: center;
  margin: 15px;
`;

export default function SearchForm(props) {

  const searchFunction = (event) => {
    const searchField = document.getElementById('searchField');
    event.preventDefault();
    props.searchFunction(searchField.value.toLowerCase());
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchFunction(event);
    }
  };


  return (
    <SForm>
      <input id='searchField' onKeyPress={handleKeyPress} placeholder="Search" />
      <button type="submit" onClick={searchFunction}>Search</button>
    </SForm>
  );
}
