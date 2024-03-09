class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getIngredients() {
    return fetch(`${this.baseUrl}/ingredients`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then(this._checkResponse)
  }

  getOrderDetails(ingredients) {
    return fetch(`${this.baseUrl}/orders`, {
      method: 'POST',
      body: JSON.stringify({ ingredients: ingredients }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    }).then(this._checkResponse)
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`)
    }

    return res.json()
  }
}

export const api = new Api('https://norma.nomoreparties.space/api')
