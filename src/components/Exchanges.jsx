import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import { server } from "../index";
import { Container, HStack } from '@chakra-ui/react';
import Loader from "../components/Loader";
import ExchangeCard from './ExchangeCard';
import ErrorPage from './ErrorPage';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError]=useState(false);
  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      //console.log(data);
      setLoading(false);
        
      } catch (error) {
        setError(true);
        setLoading(true);
        
      }
      
    }
    fetchExchanges();
  }, []
  );
  if(error)
  {
    return <ErrorPage/>;
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader /> :
        <Fragment>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              exchanges.map((i)=>
                <ExchangeCard name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>
              )
            }
          </HStack>
        </Fragment>
      }

    </Container>

  )
}

export default Exchanges