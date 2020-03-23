import React, { useState } from "react";
import styled from 'styled-components';

const SForm = styled.section`
  text-align: center;
  margin: 15px;
`;

function CharSearchOptions() {
  return (
    <span>
      <label htmlFor='status'> Status: </label>
      <select id='status' name='status'>
        <option value='any'>Any</option>
        <option value='alive'>Alive</option>
        <option value='dead'>Dead</option>
        <option value='unknown'>Unknown</option>
      </select>
      <label htmlFor='gender'> Gender: </label>
      <select id='gender' name='gender'>
        <option value='any'>Any</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
        <option value='genderless'>Genderless</option>
        <option value='unknown'>Unknown</option>
      </select>
    </span>
  );
}

export default function SearchForm(props) {

  const searchFunction = (event) => {
    const searchField = document.getElementById('searchField');
    event.preventDefault();
    let searchQuery = searchField.value.toLowerCase();
    if (props.type==='char') {
      const statusSelect = document.getElementById('status');
      const genderSelect = document.getElementById('gender');
      if (statusSelect.value!=='any') {
        console.log(`&status=${statusSelect.value}`);
        searchQuery = searchQuery.concat(`&status=${statusSelect.value}`);
      }
      if (genderSelect.value!=='any') {
        console.log(`&gender=${genderSelect.value}`);
        searchQuery = searchQuery.concat(`&gender=${genderSelect.value}`);
      }
    }
    props.searchFunction(searchQuery);
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
      {props.type==='char'?<CharSearchOptions />:<></>}
    </SForm>
  );
}
