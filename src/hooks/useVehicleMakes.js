import { useState, useEffect } from 'react';

const useVehicleMakes = () => {
  const [makes, setMakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(
          'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json'
        );
        const data = await response.json();
        setMakes(data.Results.map((make) => ({ label: make.MakeName, value: make.MakeId })));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMakes();
  }, []);

  return { makes, loading, error };
};

export default useVehicleMakes;