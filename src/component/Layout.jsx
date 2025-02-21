// src/components/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div className="h-full w-full">
      <Sidebar />
      <main className="w-full">
        <div className="">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;