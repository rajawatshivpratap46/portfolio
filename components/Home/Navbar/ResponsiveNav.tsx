'use client'
import React, { useState } from 'react';
import MobilleNav from './MobilleNav';
import Nav from './Nav';

const ResponsiveNav = () => {

    const [showNav,setShowNav] = useState(false);
    
    const openNavHandler = () => setShowNav(true);
    const closeNavHandler = () => setShowNav(false);

  return <div>
    <Nav openNav={openNavHandler}/>
    <MobilleNav showNav={showNav} closeNav={closeNavHandler}/>
  </div>;
};

export default ResponsiveNav;
