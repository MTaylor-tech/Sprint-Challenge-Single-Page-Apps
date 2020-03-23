import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';
import styled from 'styled-components';
import SearchForm from './SearchForm.js';

const CharList = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
  width: 100%;
`;

const Head = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const PNLink = styled.span`
  display: inline;
  text-decoration: underline;
  color: blue;

  &.undecorated {
    text-decoration: none;
  }
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterData, setCharacterData] = useState([]);
  const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/character/?page=2');
  const [prevPage, setPrevPage] = useState('');
  const [currentPage, setCurrentPage] = useState('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/');
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(currentPage)
      .then(result => {
        console.log(result);
        const charData = result.data.results.filter(char=>{
          return char.name.toLowerCase().includes(searchString) || char.location.name.toLowerCase().includes(searchString);
        });
        setCharacterData(charData);
        setNextPage(result.data.info.next);
        setPrevPage(result.data.info.prev);
      }).catch(error => {
        console.log(error);
      });
  }, [currentPage, searchString]);

  const goToPrev = () => {
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    setCurrentPage(nextPage);
  };

  const searchFunction = (searchQuery) => {
    console.log(`Search: ${searchQuery}`);
    setSearchString(searchQuery);
  };

  return (
    <div>
      <Head>
        <SearchForm searchFunction={searchFunction} />
        <div>
          {(prevPage!='')?<PNLink onClick={goToPrev} > Previous </PNLink>:<> </>}
          {(prevPage!='')&&(nextPage!='')?<PNLink className='undecorated'> | </PNLink>:<> </>}
          {(nextPage!='')?<PNLink onClick={goToNext} > Next </PNLink>:<> </>}
        </div>
      </Head>
      <CharList>
        {characterData.map(char=><CharacterCard character={char} key={char.id} />)}
      </CharList>
    </div>
  );
}
