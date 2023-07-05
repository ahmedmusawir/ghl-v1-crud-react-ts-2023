import React from 'react';

const Footerbar = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  return <div className="text-center p-2">&copy; Copyright {currentYear}</div>;
};

export default Footerbar;
