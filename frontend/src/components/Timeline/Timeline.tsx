import React from 'react'
import timelineElements from '../../timelineElement';
import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import dot from '../../resources/dot.png';
import './Timeline.css'


export const Timeline = () => {
  return (
    <div className='timeline'>
        <h2 className='timeline-fim'>Hoje</h2>
        <VerticalTimeline className='timeline-title'>
            {timelineElements.map((element: any) => {
                return ( 
                    <VerticalTimelineElement
                    key={element.id}
                    date={element.year}
                    dateClassName='date'
                    // icon={dot}
                    // iconStyle={{width: 20}}
                    >
                    <h3 className="vertical-timeline-element-title">{element.title}</h3>
                    <h5 className='vertical-timeline-element-subtitle'>{element.institution}</h5>
                    <p id='description'>{element.description}</p> 
                    </VerticalTimelineElement>
                )
            })}
        </VerticalTimeline>
        <h2 className='timeline-inicio'>2015</h2>
    </div>
  )
}
