class MoviesApi {
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
            return Promise.reject(`Ошибка: ${err.message}`)
           })
    }

    async getInitialMovies() {
        const res = await fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: this._headers
        });
        return this._getResponseData(res)
    }
}

const moviesApi = new MoviesApi ({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        "Content-Type": "application/json"
    }
})

export default moviesApi