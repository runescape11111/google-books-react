import axios from "axios";

const API = {
    searchBooks: function(search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q="+search);
    }
};

export default API;