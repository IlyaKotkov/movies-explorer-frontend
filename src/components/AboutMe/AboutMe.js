import './AboutMe.css'
import PhotoMe from '../../images/Me.jpg'

export default function AboutMe() {
    return (
        
        <section className="AboutMe">
            <div className='ProjectContainer'>
                <div className='ProjectHeadingContainer'>
                    <h2 className='ProjectHeading'>Студент</h2>
                </div>
                <div className='AboutMe__descriptionStudentContainer'>
                    <div className='AboutMe__descriptionStudent'>
                        <h3 className='AboutMe__nameStudent'>Илья</h3>
                        <p className='AboutMe__descriptionMe'>Фронтенд-разработчик, 20 лет</p>
                        <p className='AboutMe__aboutTheStudent'>
                            Я живу в небольшом городе Киржач, закончил профессию специалиста в области ИТ в Ярославском Промышленно-Экономическом колледже.
                            Я люблю слушать музыку. сейчас учусь на курсе Веб-разработчик в Яндекс-практикум.
                         </p>
                        <a className='AboutMe__linkGitHub' href='https://github.com/IlyaKotkov'>GitHub</a>
                    </div>
                    <div className='AboutMe__descriptionStudent'>
                        <img className='AboutMe__photoMe' src={PhotoMe} alt='изображение студента'/>
                    </div>                
                </div>
            </div>
            
        </section>
        
    )
}