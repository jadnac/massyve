import axios from "axios";

const hostApi = 'http://localhost:9900'

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
    const url = `${hostApi}/auth/login`
    return await axios.post(url, data).then(response => response)
    .catch(error => errorCatch(error, 'Error Login'))
  }

  export {
    loginUsers
  }