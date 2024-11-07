import { useState, useEffect } from 'react';

const useVehicleModels = (makeId, year) => {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!makeId || !year) return;

    const fetchVehicleModels = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );
        const data = await response.json();
        if (data.Results) {
          setModels(data.Results);
        } else {
          setError('No models found');
        }
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchVehicleModels();
  }, [makeId, year]);

  return { models, loading, error };
};

export default useVehicleModels;