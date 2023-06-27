import './AboutMe.css'
import PhotoMe from '../../images/Me.jpg'

export default function AboutMe() {
    return (
        
        <section className="AboutMe">
            <div className='ProjectContainer'>
                <div className='ProjectHeadingContainer'>
                    <h2 className='ProjectHeading'>Студент</h2>
                </div>
                <div className='descriptionContainer'>
                    <div className='descriptionStudent'>
                        <h3 className='nameStudent'>Илья</h3>
                        <p className='descriptionMe'>Фронтенд-разработчик, 20 лет</p>
                        <p className='aboutTheStudent'>
                            Я живу в небольшом городе Киржач, закончил профессию специалиста в области ИТ в Ярославском Промышленно-Экономическом колледже.
                            Я люблю слушать музыку. сейчас учусь на курсе Веб-разработчик в Яндекс-практикум.
                         </p>
                        <a className='linkGitHub' href='https://github.com/IlyaKotkov'>GitHub</a>
                    </div>
                    <div className='descriptionStudent'>
                        <img className='photoMe' src={PhotoMe} alt='изображение студента'/>
                    </div>                
                </div>
            </div>
            
        </section>
        
    )
}