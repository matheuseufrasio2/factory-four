import axios from 'axios';
import { apiNames } from '../types/endpoints';

class ApiServiceLayer {
  baseURL = 'https://api.factoryfour.com/API_NAME/health/status';

  makeRequestToAllEndPoints() {
    const apiGets = apiNames.map((apiName) => axios.get(this.baseURL.replace('API_NAME', apiName)));

    axios.all(apiGets)
      .then(
        axios.spread((...allData) => {
          console.log(allData[0]);
        }),
      );
  }
}

export const ApiService = new ApiServiceLayer();
