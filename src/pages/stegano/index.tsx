import React from 'react';
import SteganoDashboard from '~/components/pages/stegano/SteganoDashboard';
import MainTemplate from '~/components/templates/MainTemplate';

const SteganoPage: React.FC = () => {
  return (
    <MainTemplate>
      <SteganoDashboard />
    </MainTemplate>
  );
};

export default SteganoPage;
