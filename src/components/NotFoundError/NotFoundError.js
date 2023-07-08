import './NotFoundError.css'

export default function NotFoundError() {
    return (

        <section className="NotFoundError">
            <div className='NotFoundError__container'>
                <h1 className='NotFoundError__statusCode'>404</h1>
                <p className='NotFoundError__statusCodeText'>Страница не найдена</p>
                <a href='/' className='NotFoundError__getBack'>Назад</a>
            </div>
        </section>

    )
}