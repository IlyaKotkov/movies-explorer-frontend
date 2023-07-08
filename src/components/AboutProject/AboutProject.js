import './AboutProject.css'

export default function AboutProject() {
    return (
        
        <section className="AboutProject">
            <div className='ProjectContainer'>
                <div className='ProjectHeadingContainer'>
                    <h2 className='ProjectHeading'>О проекте</h2>
                </div>
                <div className='AboutProject__descriptionContainer'>
                    <div className='AboutProject__stagesAndTimeContainer'>
                        <h3 className='AboutProject__stagesAndTimeOfTheDiploma'>Дипломный проект включал 5 этапов</h3>
                        <p className='AboutProject__descriptionOfTheDiploma'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='AboutProject__stagesAndTimeContainer'>
                        <h3 className='AboutProject__stagesAndTimeOfTheDiploma'>На выполнение диплома ушло 5 недель</h3>
                        <p className='AboutProject__descriptionOfTheDiploma'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>                
                </div>
                <div className='AboutProject__stripeContainer'>
                    <div className='AboutProject__timeContainerBackEnd'>
                        <div className='AboutProject__timeBandBackEnd'>
                            <p className='AboutProject__termBackEnd'>1 неделя</p>
                        </div>
                        <p className='AboutProject__stageName'>Back-end</p>
                    </div>
                    <div className='AboutProject__timeContainerFrontEnd'>
                        <div className='AboutProject__timeBandFrontEnd'>
                            <p className='AboutProject__termfrontEnd'>4 недели</p>
                        </div>
                        <p className='AboutProject__stageName'>Front-end</p>
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}