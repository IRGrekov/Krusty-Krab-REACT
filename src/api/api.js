class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  getIngredients() {
    return this._request(`${this.baseUrl}/ingredients`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
  }

  getOrderDetails(ingredients) {
    return this._request(`${this.baseUrl}/orders`, {
      method: 'POST',
      body: JSON.stringify({ ingredients: ingredients }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  _checkResponse(res) {
    if (!res.ok) {
      return Promise.reject(new Error(`Ошибка: ${res.status}`))
    }

    return res.json()
  }
}

export const api = new Api('https://norma.nomoreparties.space/api')
