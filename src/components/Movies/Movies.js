import Header from "../Header/Header"

export default function Movies() {
    return (
        <>
        <Header>
            <div className="Header__moviesContainer">
                <a href="/movies" className="Header__movies">Фильмы</a>
                <a href="/saved-movies" className="Header__movies">Сохранённые фильмы</a>
            </div>
            <a href="/profile">
            <button className="Header__accountButton">Аккаунт</button>
            </a>
        </Header>
        </>
    )
}