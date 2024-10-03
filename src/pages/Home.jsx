import React from 'react';
import Add from '../pages/Add';
import View from '../pages/View';


function Home() {
  return (
    <>
      <div className="product-home" style={{ margin: "50px 0px" }}>
        
        <div className='d-flex justify-content-center align-items-center'>
          <Add />
        </div>
        
        <div className="d-flex justify-content-center align-items-center rounded tab-div">
        <View/>
          <p/>
        </div>
      </div>
    </>
  );
}

export default Home;