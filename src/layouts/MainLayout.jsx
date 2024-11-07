import React from 'react';

const MainLayout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <header className="bg-blue-600 text-white py-4 text-center">
    </header>
    <main className="flex-grow container mx-auto p-4">{children}</main>
    <footer className="bg-gray-800 text-white text-center py-4">
    </footer>
  </div>
);

export default MainLayout;