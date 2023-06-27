import './AboutProject.css'

export default function AboutProject() {
    return (
        
        <section className="AboutProject">
            <div className='ProjectContainer'>
                <div className='ProjectHeadingContainer'>
                    <h2 className='ProjectHeading'>О проекте</h2>
                </div>
                <div className='descriptionContainer'>
                    <div className='stagesAndTimeContainer'>
                        <h3 className='stagesAndTimeOfTheDiploma'>Дипломный проект включал 5 этапов</h3>
                        <p className='descriptionOfTheDiploma'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className='stagesAndTimeContainer'>
                        <h3 className='stagesAndTimeOfTheDiploma'>На выполнение диплома ушло 5 недель</h3>
                        <p className='descriptionOfTheDiploma'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>                
                </div>
                <div className='stripeContainer'>
                    <div className='timeContainerBackEnd'>
                        <div className='timeBandBackEnd'>
                            <p className='termBackEnd'>1 неделя</p>
                        </div>
                        <p className='stageName'>Back-end</p>
                    </div>
                    <div className='timeContainerFrontEnd'>
                        <div className='timeBandFrontEnd'>
                            <p className='termfrontEnd'>4 недели</p>
                        </div>
                        <p className='stageName'>Front-end</p>
                    </div>
                </div>
            </div>
            
        </section>
        
    )
}