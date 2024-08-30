import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d23219cdf482496b940fa5dbbd303428",
  },
});
