import axios from "axios";

export const load = ({ fetch, params }) => {
  console.log(params);

  let dealer = [];
  const fetchDealer = async (id) => {
    try {
      const response = await axios.get(
        `https://nervesparks.onrender.com/api/dealer/getAll`
      );
      let ans = response.dealer.find((dealer) => dealer._id === id);
      console.log(ans);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return {
    dealer: fetchDealer(params.d_id),
  };
};
