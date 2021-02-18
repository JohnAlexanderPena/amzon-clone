import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-v3-f5de1.cloudfunctions.net/api",
  responseType: "json",
  header: "Access-Control-Allow-Origin: *",
});

//  baseURL: "http://localhost:5001/v3-f5de1/us-central1/api",
