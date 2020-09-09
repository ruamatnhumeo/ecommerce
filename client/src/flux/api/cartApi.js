import axiosClient from "./axiosClient";

const cartApi = {
  //checkout -->create order in order routes
  checkout: (newOrder) => {
    const url = "/order/";
    return axiosClient.post(url, newOrder);
  },
};

export default cartApi;
