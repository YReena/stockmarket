import axios  from "axios";

const TOKEN ="clqn74pr01qjl4hqb9b0clqn74pr01qjl4hqb9bg";
export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params : {
        token : TOKEN
    }
})