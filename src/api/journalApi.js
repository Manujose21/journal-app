import axios from "axios";

const journalApi = axios.create({
  baseURL: "https://vue-demos-20c99-default-rtdb.firebaseio.com"

})

export default journalApi