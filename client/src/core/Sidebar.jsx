import { useState } from 'react';
import { Home, Info, Mail, Settings, X, Menu, LogOut } from 'lucide-react';
import SidebarItem from './SidebarItem';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Home');

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { icon: <Home size={20} />, text: 'Home' },
    { icon: <Info size={20} />, text: 'About' },
    { icon: <Mail size={20} />, text: 'Contact' },
    { icon: <Settings size={20} />, text: 'Settings' },
    { icon: <LogOut size={20} />, text: 'Déconnexion', isLogout: true },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`${
          isOpen ? 'w-64' : 'w-20'
        } bg-gray-800 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className="mt-5">
          <ul className="">
            {menuItems.map((item) => (
              <SidebarItem
                key={item.text}
                icon={item.icon}
                text={isOpen ? item.text : ''}
                isActive={activeItem === item.text}
                onClick={() => setActiveItem(item.text)}
                isLogout={item.isLogout}
              />
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold text-gray-800">Main Content Area</h1>
        <p className="mt-2 text-gray-600">Your main content goes here.</p>
      </main>
    </div>
  );
};

export default Sidebar;
