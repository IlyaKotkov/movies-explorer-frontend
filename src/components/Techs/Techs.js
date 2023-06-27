import './Techs.css'

export default function Techs() {
    return (

        <section className="Techs">
            <div className='ProjectContainer'>
                <div className='ProjectHeadingContainer'>
                    <h2 className='ProjectHeading'>Технологии</h2>
                </div>
                <div className='techsContainer'>
                    <h3 className='techsHeading'>7 технологий</h3>
                    <p className='techsDiscription'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                    <ul className='listTechs'>
                        <li className='enumerationTechs'>HTML</li>
                        <li className='enumerationTechs'>CSS</li>
                        <li className='enumerationTechs'>JS</li>
                        <li className='enumerationTechs'>React</li>
                        <li className='enumerationTechs'>Git</li>
                        <li className='enumerationTechs'>Express.js</li>
                        <li className='enumerationTechs'>mongoDB</li>
                    </ul>
                </div>
            </div>
        </section>

    )
}