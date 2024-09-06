import React from 'react';
import Sidebar from './Sidebar';
import PropTypes from 'prop-types';
function Layout({ children }) {
  return (
    <div className="layout">
      <Sidebar>{children}</Sidebar>
    </div>
  )
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
