import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Make the API call to the SportsRadar API from the server
    const response = await axios.get(
      'https://api.sportradar.com/nba/trial/v8/en/league/teams.json?api_key=8SvrEWC5SYO5N1Vu8WnNdGMCpaC3WZggnFmSp0vD'
    );

    // Send the data back to the client
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
}
