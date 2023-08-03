import axios from 'axios';

const fetchData = async () => {
    try {
        const response = await axios.get('https://cataas.com/api/tags');
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export default defineEventHandler((event) => {
    return fetchData();
  })

