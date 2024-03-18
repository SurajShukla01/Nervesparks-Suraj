import { writable } from "svelte/store";

// Initialize a writable store to hold the dealer data
const dealerData = writable(null);

export const load = ({ fetch, params }) => {
  console.log(params);

  const fetchDealer = async (id) => {
    try {
      const response = await fetch(
        `https://nervesparks.onrender.com/api/dealer/getAll`
      );
      const dealer = await response.json();
      // .find((d) => d._id === id);
      // dealerData.set(dealer);
      return dealer.dealer.find((d) => d._id === id);
      // console.log(dealer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCars = async (id) => {
    try {
      const response = await fetch(
        `https://nervesparks.onrender.com/api/dealer/cars/${id}`
      );
      const cars = await response.json();
      // .find((d) => d._id === id);
      // dealerData.set(dealer);
      // console.log(cars);
      return cars;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    dealer: fetchDealer(params.d_id),
    cars: fetchCars(params.d_id),
  };
};
