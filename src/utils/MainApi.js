class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers
    }

    _getResponseData(res) {
        if(res.ok) {
            return res.json()
        }
        return res.json().then(err => {
            console.log(err)
            return Promise.reject(`Ошибка: ${res.message}`)
           })
    }

    async getInformation() {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            }
        });
        return this._getResponseData(res);
    }

    async editUserInfo(data) {
        const res = await fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email
            })
        });
        return this._getResponseData(res);
    }

    async createMovie(data) {
        const res = await fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
            body: JSON.stringify(data),
        })
        return this._getResponseData(res)
    }

    async getSavedMovies() {
        const res = await fetch(`${this._baseUrl}/movies`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            }
        })
        return this._getResponseData(res)
    }

    async saveMovie(movie) {
        const res = await fetch(`${this._baseUrl}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify(movie),
        })
        return this._getResponseData(res)
    }

    async deleteMovie(movieId) {
        const res = await fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('jwt')}`
            },
        })
        return this._getResponseData(res)
    }
}

const mainApi = new MainApi ({
    baseUrl: 'https://api.kotkovdiplom.nomoredomains.rocks',
    headers: {
        "Content-Type": "application/json"
    }
})

export default mainApi