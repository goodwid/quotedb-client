const API_URL = 'http://localhost:9000/api/quotedb/v1';

export default {
  // signup (data) {
  //   const body = JSON.stringify(data);
  //   let options = {
  //     method: 'POST'
  //   };
  //   fetch(`${API_URL}/signup`, options)
  //     .then(results => results.json())
  //     .then(data => {
  //       let token = data.token;
        
  //     })
      

  // }
  // signin (data) {

  // }
  getAll () {
    return fetch(`${API_URL}/quotes`)
      .then(results => results.json());
  },
  getOne (id) {
    return fetch(`${API_URL}/quotes/${id}`)
      .then(results => results.json());
  },
  random (movie) {
    return fetch(`${API_URL}/movies/random/${movie}`)
      .then(results => results.json());
  },
  create (data) {
    const body = JSON.stringify(data);
    console.log('body: ', body);
    let options = {
      method: 'POST',
      body,
      headers: new Headers({
        'Content-Type':'application/json'
      })
    };
    return fetch(`${API_URL}/quotes`, options)
      .then(results => results.json());
  },
  edit (id, data){
    const body = JSON.stringify(data);
    let options = {
      method: 'PUT',
      body,
      headers: new Headers({
        'Content-Type':'application/json'
      })
    };
    return fetch(`${API_URL}/quotes/${id}`, options)
      .then(results => results.json());
  },
  delete (id) {
    let options = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type':'application/json'
      })
    };
    return fetch(`${API_URL}/quotes/${id}`, options)
    .then(results => results.json());
  }
};