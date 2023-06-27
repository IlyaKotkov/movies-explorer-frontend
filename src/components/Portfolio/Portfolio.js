import './Portfolio.css'

export default function Portfolio() {
    return (

        <section className="Portfolio">
            <div className='portfolioContainer'>
                <h3 className='portfolioHeading'>Портфолио</h3>
                <ul className='GeneralLinkContainer'>
                    <li className='linkContainer'>
                        <a className='projectName' href='https://github.com/IlyaKotkov/how-to-learn.git'>Статичный сайт</a>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" 
                        class="project__icon"><path d="M2.607 16.524.945 14.862 13.303 2.483H3.757L3.778.182h13.488V13.69h-2.323l.021-9.545-12.357 12.38Z" 
                        fill="#fff"></path></svg>
                    </li>
                    <li className='linkContainer'>
                        <a className='projectName' href='https://ilyakotkov.github.io/russian-travel/'>Адаптивный сайт</a>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" 
                        class="project__icon"><path d="M2.607 16.524.945 14.862 13.303 2.483H3.757L3.778.182h13.488V13.69h-2.323l.021-9.545-12.357 12.38Z" 
                        fill="#fff"></path></svg>
                    </li>
                    <li className='linkContainer'>
                        <a className='projectName' href='https://mopsbox.kotkov.nomoredomains.rocks'>Одностраничное приложение</a>
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" 
                        class="project__icon"><path d="M2.607 16.524.945 14.862 13.303 2.483H3.757L3.778.182h13.488V13.69h-2.323l.021-9.545-12.357 12.38Z" 
                        fill="#fff"></path></svg>
                    </li>
                </ul>
            </div>
        </section>

    )
}