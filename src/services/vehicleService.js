export const getVehicleModelsByMakeIdYear = async (makeId, year) => {
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
      );
      const data = await response.json();
      return data.Results;
    } catch (error) {
      console.error("Failed to fetch vehicle models:", error);
      throw error;
    }
  };