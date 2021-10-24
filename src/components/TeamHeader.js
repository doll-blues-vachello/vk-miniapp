import React from "react";
import arrow from '../assets/arrow.svg.jpg';

const TeamHeader = () => {

    return (
        <header className='w-full h-screen flex flex-col justify-between py-4 bg-yb-black text-yb-yellow text-center'>
                  <div>
                    <p>Team from Siberia</p>
                  </div>
                  <div className='select-none'>
                    <h1 className='text-3xl m-auto tracking-widest appear'>
                      {'</> Yeah, Bash!'}
                    </h1>
                  </div>
                  <div>
                    <p>Special for Vezdecode, 2021</p>
                    <img
                      className='h-10 my-2 bouncer mx-auto sticky bottom-0'
                      src={arrow}
                    ></img>
                  </div>
                </header>
    )
}

export default TeamHeader;