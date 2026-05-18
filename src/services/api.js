// Configuration constant for the endpoint
const API_URL = "https://anurella.github.io/json/planets.json";

/**
 * Fetches planetary data from the API and renders it.
 */
async function fetchAndRenderPlanets() {
    const gridElement = document.getElementById("planets-grid");
    
    if (!gridElement) {
        console.error("Target container '#planets-grid' not found in the HTML.");
        return;
    }

    try {
        // 1. Fetch data from the API endpoint
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const planets = await response.json();

        // 2. Clear out any static loading text placeholder
        gridElement.innerHTML = "";

        // 3. Loop through dataset and join planet details 
        planets.forEach(item => {
            const card = document.createElement("div");
            
            card.innerHTML = `
                <div>
                    <img src="${item.image}" alt="${item.planet}" width="150" />
                </div>
                <h4>${item.planet}</h4>
                <p>Distance from Sun: ${item.distanceFromSun} million km</p>
            `;
            
            gridElement.appendChild(card);
        });

    } catch (error) {
        console.error("Error retrieving planetary data:", error);
        gridElement.innerHTML = "<p>Failed to load planetary data. Please try again later.</p>";
    }
}

// Execute the function immediately once the script loads
fetchAndRenderPlanets();