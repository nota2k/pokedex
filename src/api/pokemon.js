const API_URL = 'https://pokebuildapi.fr/api/v1';

export const fetchPokemon = async () => {
     try {
          const response = await fetch(`${API_URL}/pokemon`);
          if (!response.ok) {
               throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
     } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
     }
};