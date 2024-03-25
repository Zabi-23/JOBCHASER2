const fetchData = async () => {
    try {
        const response = await fetch('https://links.api.jobtechdev.se/joblinks?q=Flen');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data.hits; // Uppdaterat för att returnera data.hits istället för data.results
    } catch (error) {
        console.log('Error fetching data', error);
        return [];
    }
};

export default fetchData;


