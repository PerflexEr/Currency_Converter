import { Environment } from "../util";


export const createCurrencyService = () => {
  return {
    getCurrency() {
      return fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env[Environment.CURRENCY_API_KEY]}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch currency data");
          }
          return response.json();
        })
        .then((data) => {
          return data; 
        })
        .catch((error) => {
          console.error("Error:", error);
          throw error; 
        });
    },
  };
}

export const currencyService = createCurrencyService() 

