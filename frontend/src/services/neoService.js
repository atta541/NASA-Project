// src/services/neoService.js
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/neo`;

class NeoService {
  async getNeoFeed(startDate, endDate) {
    try {
      const params = new URLSearchParams({
        start_date: startDate,
        ...(endDate && { end_date: endDate })
      });
      
      const response = await fetch(`${BASE_URL}/feed?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch NEO feed: ${error.message}`);
    }
  }

  async getNeoLookup(asteroidId) {
    try {
      const response = await fetch(`${BASE_URL}/lookup/${asteroidId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch NEO lookup: ${error.message}`);
    }
  }

  async getNeoBrowse() {
    try {
      const response = await fetch(`${BASE_URL}/browse`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw new Error(`Failed to fetch NEO browse: ${error.message}`);
    }
  }
}

export default new NeoService();