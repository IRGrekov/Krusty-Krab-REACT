import axios from 'axios'

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getIngredients() {
    return axios
      .get(`${this.baseUrl}/ingredients`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        return response.data
      })
      .catch((error) => {
        return Promise.reject(`Error: ${error.message}`)
      })
  }
}

export const api = new Api('https://norma.nomoreparties.space/api')
