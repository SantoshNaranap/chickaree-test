
import React from 'react';
import Header from '../components/Header';
import ContentFooter from '../components/ContentFooter';
import LabExperience from '../components/LabExperience';

const Lab = () => {
  return (
    <div className="flex flex-col h-screen bg-oralia-dark text-white">
      <Header />
      
      <div className="flex-1 overflow-y-auto">
        <LabExperience />
        <ContentFooter />
      </div>
    </div>
  );
};

export default Lab;
