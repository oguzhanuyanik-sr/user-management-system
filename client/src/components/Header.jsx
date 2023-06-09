import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [active, setactive] = useState('Home');
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/') {
      setactive('Home');
    } else if (location === '/add') {
      setactive('Add');
    }
  }, [location]);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Add', path: '/add' },
  ];

  return (
    <header className='flex justify-center text-white-200 headerGradient'>
      <div className='flex justify-between items-center w-full h-20 mx-6 md:container'>
        <Link
          className='flex items-center h-full font-source font-bold text-md md:text-2xl logoGradient'
          to='/'
        >
          User Management System
        </Link>
        <nav>
          <ul className='flex '>
            {navItems.map((item, i) => {
              return (
                <li key={i} className='ml-4'>
                  <Link
                    className={`p-2 text-sm font-bold uppercase rounded-md hover:bg-green-400 transition-all md:text-xl md:px-5 md:py-2 ${
                      active === item.title ? 'bg-green-300' : ''
                    }`}
                    to={item.path}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
