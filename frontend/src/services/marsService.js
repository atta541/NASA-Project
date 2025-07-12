// src/services/marsService.js
const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}/mars`;

class MarsService {
  async getRoverPhotos(rover, params = {}) {
    try {
      const queryParams = new URLSearchParams();
      
      // Add parameters to query string
      Object.keys(params).forEach(key => {
        if (params[key]) {
          queryParams.append(key, params[key]);
        }
      });
      
      const queryString = queryParams.toString();
      const url = `${BASE_URL}/${rover}/photos${queryString ? `?${queryString}` : ''}`;
      
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch rover photos');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching rover photos:', error);
      throw error;
    }
  }

  async getRoverManifest(rover) {
    try {
      const url = `${BASE_URL}/${rover}/manifest`;
      const response = await fetch(url);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch rover manifest');
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching rover manifest:', error);
      throw error;
    }
  }
}

export default new MarsService();