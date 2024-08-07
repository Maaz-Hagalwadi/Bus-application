// Layout.js
import React from 'react';
// import WelcomeMessage from './Components/WelcomeMessage'; 
// import WelcomeMessage from "./WelcomeMessage";


const Layout = ({ children }) => (
  <div>
    <WelcomeMessage />
    <main>{children}</main>
  </div>
);

export default Layout;
