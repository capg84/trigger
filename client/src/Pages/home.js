import React from 'react';
import "../assets/css/index.css"
// import { useQuery } from '@apollo/client';

import InstructionProvider from '../Utils/instruction';
import Instruction from '../Components/instruction';

// import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_PROFILES);
//   const profiles = data?.profiles || [];

  return (
    <main>
      
    <div className='hero-image'>

    </div>
        <InstructionProvider>
          <Instruction />
        </InstructionProvider>
    </main>
  );
};

export default Home;