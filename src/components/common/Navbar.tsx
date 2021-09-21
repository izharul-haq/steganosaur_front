import React from 'react';
import Link from 'next/link';
import { GiDinosaurBones, GiHamburgerMenu } from 'react-icons/gi';
import { BiArrowBack } from 'react-icons/bi'
import { useRouter } from 'next/dist/client/router';
import { Menu } from '@headlessui/react';

const navbarItems = [
  {
    to: '/mod-rc4',
    icon: 'RC4',
    title: 'Modified RC4',
  },
  {
    to: '/stegano',
    icon: 'STG',
    title: 'Steganography',
  }
];

const Navbar: React.FC = () => {
  const router = useRouter();
  
  return (
    <nav className="z-50 w-full top-0 sticky">
      <div className="w-full p-4 fixed bg-blue-900">
        <div className="w-full flex justify-between items-center">
          <div
            className="font-semibold text-xl text-gray-100 cursor-pointer hover:text-gray-400"
            onClick={() => router.back()}
          >
            <BiArrowBack />
          </div>
          <div className="flex justify-start font-semibold text-xl text-gray-100">
            <Link href="/" passHref>
              <div className="flex flex-row space-x-2 items-center cursor-pointer hover:text-gray-400">
                STEGAN<span><GiDinosaurBones /></span>SAUR
              </div>
            </Link>
          </div>
          <div className="flex justify-center space-x-4">
            <Menu as="div">
              <Menu.Button as="div" className="flex font-semibold text-lg text-gray-100 cursor-pointer hover:text-gray-400">
                <GiHamburgerMenu />
              </Menu.Button>
              <Menu.Items as="div" className="w-max mt-1 flex flex-col space-y-1 absolute p-2 bg-white outline-none border border-gray-300 rounded shadow right-4">
                {navbarItems.map(({ to, title }) => (
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
