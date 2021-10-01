import React from 'react';
import SteganoShowDashboard from '~/components/pages/stegano/SteganoShowDashboard';
import MainTemplate from '~/components/templates/MainTemplate';

const SteganoShowPage: React.FC = () => {
  return (
    <MainTemplate>
      <SteganoShowDashboard />
    </MainTemplate>
  );
};

export default SteganoShowPage;
