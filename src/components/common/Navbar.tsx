import React from 'react';
import Link from 'next/link';
import { GiDinosaurBones } from 'react-icons/gi';
import { Menu } from '@headlessui/react';

const steganoItems = [
  {
    to: '/stegano/hide',
    title: 'Hide',
  },
  {
    to: '/stegano/show',
    title: 'Show',
  },
];

const Navbar: React.FC = () => {  
  return (
    <nav className="z-50 w-full top-0 sticky">
      <div className="w-full p-4 fixed bg-blue-900">
        <div className="w-full flex justify-between items-center">
          <div className="flex justify-start font-semibold text-xl text-gray-100">
            <Link href="/" passHref>
              <div className="flex flex-row space-x-2 items-center cursor-pointer hover:text-gray-400">
                STEGAN<span><GiDinosaurBones /></span>SAUR
              </div>
            </Link>
          </div>
          <div className="flex text-gray-100 font-semibold justify-center items-center space-x-4">
            <Link href="/mod-rc4" passHref>
              <div className="cursor-pointer text-lg hover:text-gray-400">
                MRC4
              </div>
            </Link>
            <Menu as="div">
              <Menu.Button as="div" className="flex font-semibold text-lg text-gray-100 cursor-pointer hover:text-gray-400">
                STGN
              </Menu.Button>
              <Menu.Items as="div" className="w-max mt-1 flex flex-col space-y-1 absolute p-2 bg-white outline-none border border-gray-300 rounded shadow right-4">
                {steganoItems.map(({ to, title }) => (
                  <Link key={`vgnr-${title}`} href={to} passHref>
                    <Menu.Item as="div" className="flex items-center py-1 cursor-pointer font-semibold px-2.5 text-blue-900 duration-150 hover:bg-blue-900 hover:text-gray-100 rounded-md">
                      <div className="container text-center">{title}</div>
                    </Menu.Item>
                  </Link>
                ))}
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
