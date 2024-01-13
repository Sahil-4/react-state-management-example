// API URL
const API_URL = "https://random-data-api.com/api/v2/users?size=50";

// Function to fetch user data from the API
export const fetchData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}
