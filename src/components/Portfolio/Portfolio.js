import './Portfolio.css'

export default function Portfolio() {
    return (

        <section className="Portfolio">
            <div className='Portfolio__Container'>
                <h3 className='Portfolio__Heading'>Портфолио</h3>
                <ul className='Portfolio__GeneralLinkContainer'>
                    <li className='Portfolio__linkContainer'>
                        <a className='Portfolio__projectName' href='https://github.com/IlyaKotkov/how-to-learn.git' rel="noreferrer"  target="_blank">Статичный сайт</a>
                        <svg width="11" height="11" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" 
                        class="Portfolio__iconArrow"><path d="M2.607 16.524.945 14.862 13.303 2.483H3.757L3.778.182h13.488V13.69h-2.323l.021-9.545-12.357 12.38Z" 
                        fill="#fff"></path></svg>
                    </li>
                    <li className='Portfolio__linkContainer'>
                        <a className='Portfolio__projectName' href='https://ilyakotkov.github.io/russian-travel/' rel="noreferrer"  target="_blank">Адаптивный сайт</a>
                        <svg width="11" height="11" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" 
                        class="Portfolio__iconArrow"><path d="M2.607 16.524.945 14.862 13.303 2.483H3.757L3.778.182h13.488V13.69h-2.323l.021-9.545-12.357 12.38Z" 
                        fill="#fff"></path></svg>
                    </li>
                    <li className='Portfolio__linkContainer'>
                        <a className='Portfolio__projectName' href='https://mopsbox.kotkov.nomoredomains.rocks' rel="noreferrer"  target="_blank">Одностраничное приложение</a>
                        <svg width="11" height="11" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" 
                        class="Portfolio__iconArrow"><path d="M2.607 16.524.945 14.862 13.303 2.483H3.757L3.778.182h13.488V13.69h-2.323l.021-9.545-12.357 12.38Z" 
                        fill="#fff"></path></svg>
                    </li>
                </ul>
            </div>
        </section>

    )
}