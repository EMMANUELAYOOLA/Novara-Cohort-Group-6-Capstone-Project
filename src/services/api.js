// Configuration constant for the endpoint
const API_URL = "https://anurella.github.io/json/planets.json";



/** Fetches planetary data from the API.  */

  export async function fetchPlanets() {
  try {
  // Fetch data from the API endpoint
  const response = await fetch(API_URL);

   if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
   }

   // Convert response to JSON
   const planets = await response.json();

   // Return fetched data
   return planets;  

  } catch (error) {
  console.error("Error retrieving planetary data:", error);


   return [];

  }
  }
