import React from 'react';
import SteganoHideDashboard from '~/components/pages/stegano/SteganoHideDashboard';
import MainTemplate from '~/components/templates/MainTemplate';

const SteganoHidePage: React.FC = () => {
  return (
    <MainTemplate>
      <SteganoHideDashboard />
    </MainTemplate>
  );
};

export default SteganoHidePage;
