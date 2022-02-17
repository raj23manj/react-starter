import React, { useEffect, useState } from 'react';

const App = () => {

  lifecycles();

  return(
    <div>
      Hello from App component Robox!!!
    </div>
  );
};

const lifecycles = () => {
  useEffect(() => {
   console.log("working fine");
  }, []);
};

export default App;
