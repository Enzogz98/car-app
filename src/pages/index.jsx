import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MainLayout from '@/layouts/MainLayout';
import Dropdown from '@/components/Dropdown';
import Button from '@/components/Button';
import LoadingSpinner from '@/components/LoadingSpinner';
import useVehicleMakes from '@/hooks/useVehicleMakes';

const backgrounds = [
  '/images/carimage.jpeg',
  '/images/carimage2.jpeg',
  '/images/carimage3.jpeg',
];

const HomePage = () => {
  const { makes, loading, error } = useVehicleMakes();
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) => ({
    label: (currentYear - i).toString(),
    value: (currentYear - i).toString(),
  }));

  return (
    <MainLayout>
      <div
        className="min-h-screen overflow-hidden bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage: `url(${backgrounds[backgroundIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
          <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
            {loading ? (
              <LoadingSpinner />
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <>
                <Dropdown
                  label="Vehicle Make"
                  options={makes}
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  className="mb-4"
                />
                <Dropdown
                  label="Model Year"
                  options={years}
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="mb-6"
                />

                <Link href={`/result/${selectedMake}/${selectedYear}`}>
                  <Button disabled={!selectedMake || !selectedYear} className="w-full">
                    Next
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;