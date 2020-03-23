import React, { useState } from "react";
import styled from 'styled-components';

const SForm = styled.section`
  text-align: center;
  margin: 15px;
`;

export default function SearchForm(props) {

  const searchFunction = (event) => {
    props.searchFunction(event.target.value.toLowerCase());
  };

  return (
    <SForm>
      <input id='search' onChange={searchFunction} placeholder="Search" />
    </SForm>
  );
}
