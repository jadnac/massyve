import axios from "axios";



const hostApi =
  process.env.NODE_ENV === "production" ? "http://localhost" : "";
const portApi = process.env.NODE_ENV === "production" ? 9900 : "";


const errorCatch = (error, string) => {
    if (error) {
      if (error.response) {
        if (error.reponse?.data) {
          return error.response?.data;
        }
        return error.response;
      }
      return error;
    } else {
      return string;
    }
  };

async function loginUsers(data) {
    const url = `${hostApi}${portApi ? `:${portApi}` : ``}/auth/login`
    return await axios.post(url, data).then(response => response)
    .catch(error => errorCatch(error, 'Error Login'))
  }

  export {
    loginUsers
  }