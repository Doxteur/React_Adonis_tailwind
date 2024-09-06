import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logout } from '../app/reducers/AuthReducer';
import { useNavigate } from 'react-router-dom';

const SidebarItem = ({ icon, text, isActive, onClick, isLogout = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogout) {
      dispatch(logout());
      navigate('/login');
    } else {
      onClick();
    }
  };

  return (
    <li>
      <button
        onClick={handleClick}
        className={`flex items-center p-2 rounded-lg w-full text-left ${
          isActive
            ? 'bg-gray-700 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
      >
        {icon}
        <span className="ml-3">{text}</span>
      </button>
    </li>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  isLogout: PropTypes.bool,
};

export default SidebarItem;
