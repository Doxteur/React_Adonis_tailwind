import React from 'react';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar>{children}</Sidebar>
    </div>
  )
}

export default Layout;
