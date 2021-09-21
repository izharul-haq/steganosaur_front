import React from 'react';
import ModifiedRC4Dashboard from '~/components/pages/mod-rc4/ModRc4Dashboard';
import MainTemplate from '~/components/templates/MainTemplate';

const ModifiedRC4Page: React.FC = () => {
  return (
    <MainTemplate>
      <ModifiedRC4Dashboard />
    </MainTemplate>
  );
};

export default ModifiedRC4Page;
