const { default: axios } = require("axios");
const { headers } = require("next/headers");

const API_KEY = "test";

const axiosClient = axios.create({
  baseURL: "https://artemychych.pythonanywhere.com/api",
  headers: {
    Authorization: `Bearer${API_KEY}`,
  },
});

const getCategory = () => axiosClient.get("category?populate=*");
const getDoctorList = () => axiosClient.get("doctor?populate=*");

export default {
  getCategory,
  getDoctorList,
};
