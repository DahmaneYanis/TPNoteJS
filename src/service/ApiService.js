export default class ApiService {
    static async get(url) {
      try {
        const response = await fetch(url)
        const data = await response.json()
        return data;
      } catch (error) {
        console.error('Error while fetching data:', error)
        throw error
      }
    }
  
    static async post(url, data) {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error('Error while posting data:', error)
        throw error
      }
    }
  }
  
  