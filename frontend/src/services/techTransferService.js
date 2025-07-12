const BASE_URL = `${process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000'}/techtransfer`;

class TechTransferService {
  async makeRequest(endpoint, query = '') {
    try {
      const url = `${BASE_URL}${endpoint}${query ? `?query=${encodeURIComponent(query)}` : ''}`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }

  async getPatents(query = '') {
    return this.makeRequest('/patent', query);
  }

  async getPatentsIssued(query = '') {
    return this.makeRequest('/patent_issued', query);
  }

  async getSoftware(query = '') {
    return this.makeRequest('/software', query);
  }

  async getSpinoffs(query = '') {
    return this.makeRequest('/spinoff', query);
  }

  // Parse the array response format from NASA API
  parseResults(results) {
    if (!results || !Array.isArray(results)) return [];
    
    return results.map(item => {
      if (Array.isArray(item)) {
        return {
          id: item[0] || '',
          code: item[1] || '',
          title: item[2] || 'No title available',
          description: item[3] || 'No description available',
          secondaryCode: item[4] || '',
          category: item[5] || '',
          field1: item[6] || '',
          field2: item[7] || '',
          field3: item[8] || '',
          center: item[9] || '',
          imageUrl: item[10] || '',
          tags: item[11] || '',
          score: item[12] || 0
        };
      }
      return item;
    });
  }
}

export default new TechTransferService();