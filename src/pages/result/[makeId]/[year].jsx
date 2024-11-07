import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import MainLayout from '@/layouts/MainLayout';
import LoadingSpinner from '@/components/LoadingSpinner';
import useVehicleModels from '@/hooks/useVehicleModels'; // Asegúrate de tener este hook

const backgrounds = [
  '/images/carimage.jpeg',
  '/images/carimage2.jpeg',
  '/images/carimage3.jpeg',
];

const ResultPage = () => {
  const { query } = useRouter();
  const { makeId, year } = query;
  const { models, loading, error } = useVehicleModels(makeId, year); // Hook para obtener los modelos por makeId y year
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                  {makeId} - {year} Models
                </h2>
                {models.length > 0 ? (
                  <ul className="space-y-4">
                    {models.map((model) => (
                      <li key={model.Model_Name} className="text-xl text-gray-700">
                        {model.Model_Name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No models found for this year and make.</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResultPage;