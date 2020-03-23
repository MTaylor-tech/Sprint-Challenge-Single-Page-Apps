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
    let searchQuery = searchField.value.toLowerCase();
    if (props.type==='char') {
      const statusSelect = document.getElementById('status');
      const genderSelect = document.getElementById('gender');
      const speciesField = document.getElementById('species');
      const chartypeField = document.getElementById('chartype');
      if (statusSelect.value!=='any') {
        console.log(`&status=${statusSelect.value}`);
        searchQuery = searchQuery.concat(`&status=${statusSelect.value}`);
      }
      if (genderSelect.value!=='any') {
        console.log(`&gender=${genderSelect.value}`);
        searchQuery = searchQuery.concat(`&gender=${genderSelect.value}`);
      }
      if (speciesField.value!=='') {
        searchQuery = searchQuery.concat(`&species=${speciesField.value}`);
      }
      if (chartypeField.value!=='') {
        searchQuery = searchQuery.concat(`&type=${chartypeField.value}`);
      }
    }
    props.searchFunction(searchQuery);
  };

  const CharSearchOptions = () => {
    return (
      <div>
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
        </span><br />
        <span>
          <label htmlFor='species'>Species: </label>
          <input id='species' name='species' placeholder='Species' onKeyPress={handleKeyPress} />
          <label htmlFor='chartype'> Type: </label>
          <input id='chartype' name='chartype' placeholder='Type' onKeyPress={handleKeyPress} />
        </span>
      </div>
    );
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchFunction(event);
    }
  };



  return (
    <SForm>
      <label htmlFor='searchField'>Name: </label>
      <input id='searchField' name='searchField' onKeyPress={handleKeyPress} placeholder="Name" />
      <button type="submit" onClick={searchFunction}>Search</button>
      {props.type==='char'?<CharSearchOptions />:<></>}
    </SForm>
  );
}
