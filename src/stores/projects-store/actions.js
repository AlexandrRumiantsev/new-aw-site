



const API_ROOT = 'http://api.alexweber.ru';

const handleErrors = err => {
  if (err && err.response && err.response.status === 401) {
    console.log("ERROR")
  }
  console.log("ERROR", err)
  return err;
};

const responseBody = res => {
  console.log(res)
  return res.bod;
}

/*const requests = {
  
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  del: url =>
    superagent
      .del(`${API_ROOT}${url}`)
      .use(tokenPlugin)
      .end(handleErrors)
      .then(responseBody),
  get: url => {
    return fetch(API_ROOT+url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })
    /*fetch(
      'http://inordic.alexweber.ru/api/index.php?action=getAllUsers')
    .then((response) => {
      console.log(response)
    })
  }
    axios
      .get(`${API_ROOT}${url}`)
      .then(responseBody)
      .catch(handleErrors)
};*/



export const GET_LIST = () => {
 
  return fetch("http://api.alexweber.ru/wp-json/wp/v2/get_portfolio_all")
  .then((res) => {
    return res.json();
  })
  .then(function(data) {
    return data;
  })
  .catch((err) => {
      console.log ('Error', err.message);
  }) 

}
 
  /*
  fetch("http://23.105.86.44:8118: " + API_ROOT+`/wp-json/wp/v2/get_portfolio_all/`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    })*/