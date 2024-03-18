import { writable } from "svelte/store";

import { responseStore } from "../../data/responseStore";

var responseData;

responseStore.subscribe((value) => {
  responseData = value;
});

// Initialize a writable store to hold the dealer data
const dealerData = writable(null);

export const load = ({ fetch, params }) => {
  console.log(params);

  const fetchDealer = async (id) => {
    try {
      const response = await fetch(
        "https://nervesparks.onrender.com/api/dealer/getAll",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + responseData.data.token,
          },
        }
      );
      console.log({
        "Content-Type": "application/json",
        authorization: "Bearer " + responseData.data.token,
      });
      const dealer = await response.json();
      // .find((d) => d._id === id);
      // dealerData.set(dealer);
      console.log("dealer");
      return dealer.dealer.find((d) => d._id === id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchCars = async (id) => {
    try {
      const response = await fetch(
        `https://nervesparks.onrender.com/api/dealer/cars/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            authorization: "Bearer " + responseData.data.token,
          },
        }
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
