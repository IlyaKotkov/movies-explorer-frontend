import './Techs.css'

export default function Techs() {
    return (

        <section className="Techs">
            <div className='ProjectContainer'>
                <div className='ProjectHeadingContainer'>
                    <h2 className='ProjectHeading'>Технологии</h2>
                </div>
                <div className='Techs__Container'>
                    <h3 className='Techs__Heading'>7 технологий</h3>
                    <p className='Techs__Discription'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className='Techs__list'>
                        <li className='Techs__enumeration'>HTML</li>
                        <li className='Techs__enumeration'>CSS</li>
                        <li className='Techs__enumeration'>JS</li>
                        <li className='Techs__enumeration'>React</li>
                        <li className='Techs__enumeration'>Git</li>
                        <li className='Techs__enumeration'>Express.js</li>
                        <li className='Techs__enumeration'>mongoDB</li>
                    </ul>
                </div>
            </div>
        </section>

    )
}