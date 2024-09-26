// pages/api/proxy.js
import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.example.com/data', {
      headers: {
        // Include any necessary headers for the API you're accessing
        Authorization: `Bearer ${process.env.API_KEY}`, // If needed
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching data', error: error.message });
  }
}
