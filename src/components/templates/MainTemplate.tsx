import React from 'react';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';

const MainTemplate: React.FC = (props) => {
  return (
    <div className="antialiased w-full bg-gray-50">
      <Navbar />
      <main className="w-full min-h-screen pt-14 text-gray-700">{props.children}</main>
      <Footer />
    </div>
  );
};

export default MainTemplate;
