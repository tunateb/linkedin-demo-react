import React from 'react'
import './BaseLayout.scss'

import Navbar from '../../components/Navbar/Navbar' 


 const BaseLayout = ({ children }) => (
  <div className="base">
    <Navbar/>
    {children}
  </div>
)

export default BaseLayout;

