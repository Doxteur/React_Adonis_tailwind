import React from 'react';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default Layout;
