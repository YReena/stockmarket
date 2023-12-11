import axios  from "axios";

const TOKEN ="clriethr01qi77sksl9gclriethr01qi77sksla0";
export default axios.create({
    baseURL:"https://finnhub.io/api/v1",
    params : {
        token : TOKEN
    }
})