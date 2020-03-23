import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard.js';
import styled from 'styled-components';
import SearchForm from './SearchForm.js';

const LocList = styled.section`
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

export default function LocationsList() {
  // TODO: Add useState to track data from useEffect
  const [locationData, setLocationData] = useState([]);
  const [nextPage, setNextPage] = useState('https://rickandmortyapi.com/api/location/?page=2');
  const [prevPage, setPrevPage] = useState('');
  const [currentPage, setCurrentPage] = useState('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/');
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(currentPage)
      .then(result => {
        console.log(result);
        const locData = result.data.results.filter(loc=>{
          return loc.name.toLowerCase().includes(searchString) || loc.dimension.toLowerCase().includes(searchString);
        });
        setLocationData(locData);
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
    //setSearchString(searchQuery);
    setCurrentPage(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/location/?name=${searchQuery}`);
  };

  return (
    <div>
      <Head>
        <SearchForm searchFunction={searchFunction} type='loc' />
        <div>
          {(prevPage!=='')?<PNLink onClick={goToPrev} > Previous </PNLink>:<> </>}
          {(prevPage!=='')&&(nextPage!=='')?<PNLink className='undecorated'> | </PNLink>:<> </>}
          {(nextPage!=='')?<PNLink onClick={goToNext} > Next </PNLink>:<> </>}
        </div>
      </Head>
      <LocList>
        {locationData.map(loc=><LocationCard location={loc} key={loc.id} />)}
      </LocList>
    </div>
  );
}
