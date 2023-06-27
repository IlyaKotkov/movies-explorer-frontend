import './Footer.css'

export default function Footer() {
    return (

        <section className="Footer">
            <div className='footerContainer'>
                <p className='footerProjectName'>
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>
                <div className='footerLinkAndYearContainer'>
                    <p className='projectYear'>© 2023</p>
                    <div>
                    <a className='praktikumLink' href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
                    <a className='ghLink' href='https://github.com/IlyaKotkov/movies-explorer-frontend'>Github</a>
                    </div>
                </div>
            </div>
        </section>

    )
}