export default class FetchWrapper {
  constructor(url) {
    this.url = url;
  }

  get(endpoint) {
    return fetch(url + endpoint).then(response => response.json());
  }

  put(endpoint, body) {
    return this._putPostDelete("PUT", endpoint, body);
  }

  post(endpoint, body) {
    return this._putPostDelete("POST", endpoint, body);
  }

  delete(endpoint, body) {
    return this._putPostDelete("DELETE", endpoint, body);
  }

  _putPostDelete(method, endpoint, body) {
    return fetch(this.url + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then(response => response.json());
  }
}
