import './Footer.css'

export default function Footer() {
    return (

        <footer className="Footer">
            <div className='Footer__Container'>
                <p className='Footer__ProjectName'>
                    Учебный проект Яндекс.Практикум х BeatFilm.
                </p>
                <div className='Footer__LinkAndYearContainer'>
                    <p className='Footer__projectYear'>© 2023</p>
                    <div className='Footer__linkContainerFooter'>
                    <a className='Footer__praktikumLink' href='https://practicum.yandex.ru'  rel="noreferrer"  target="_blank">Яндекс.Практикум</a>
                    <a className='Footer__ghLink' href='https://github.com/IlyaKotkov/movies-explorer-frontend'  rel="noreferrer"  target="_blank">Github</a>
                    </div>
                </div>
            </div>
        </footer>

    )
}