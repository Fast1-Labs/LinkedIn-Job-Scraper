import axios from 'axios';

export const getJobListings = async (req: any, res: any) => {
  const { keyword, location } = req.query;

  try {
    const response = await axios.get(
      'https://brightdata.com/cp/data_api/gd_lpfll7v5hcqtkxl6l/keyword',
      {
        params: {
          id: 'hl_c6db08c4',
          keyword,
          location,
        },
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching job listings' });
  }
};
