import { VerticalTimeline ,VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useState,useRef } from "react";

const ExperienceCard =({experience}) => {
  const [numPoints, setNumPoints] = useState(4);
  const [readMore, setReadMore] = useState(false);
  const listRef = useRef();

  const handleShowLess = () => {
    setNumPoints(4);
    setReadMore(false);
    listRef.current.scrollIntoView({ behavior: "smooth" });
  };

    return (
     <VerticalTimelineElement
     contentStyle={{background :'#1d1836',color:'#fff'}}
     contentArrowStyle={{borderRight:'7px solid #232631'}}
     date={experience.date}
     iconStyle={{background : experience.iconbg}}
     icon={
      <div className="flex justify-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name} className='w-[60%] h-[90%] object-contain'/>
      </div>
     }
     >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
      </div>
      {/*<ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point,index)=>(
          <li
          key={`experince-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
          <p>{readmore ? point :`${point.substring(0,20)}...`}</p>
          <button onClick={() => setReadMore(!readmore)}>
             {readmore ? 'Show less' : 'Read more'}
          </button>
           {{point}}
          </li>
        ))}
        </ul>*/}
        <ul className="mt-5 list-disc ml-5 space-y-2" ref={listRef}>
      {experience.points.slice(0, numPoints).map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
          <p>{point}</p>
        </li>
      ))}
      {experience.points.length > 4 && !readMore && (
        <li className="text-white-100 text-[14px] pl-1 tracking-wider">
          <button onClick={() => setReadMore(true)}>Read more</button>
        </li>
      )}
      {readMore && (
        <>
          {experience.points.slice(numPoints).map((point, index) => (
            <li key={`experience-point-${numPoints + index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              <p>{point}</p>
            </li>
          ))}
          <li className="text-white-100 text-[14px] pl-1 tracking-wider">
            <button onClick={handleShowLess}>Show less</button>
          </li>
        </>
      )}
    </ul>

     </VerticalTimelineElement>
  )
}



const Experience = () => {
  return (
    <>
    <motion.div>
      <p className={styles.sectionSubText}>
         What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
        Work Experience.
      </h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
       <VerticalTimeline>
        {experiences.map((experience,index)=>(
          <ExperienceCard key={index} experience={experience}/>
        ))}
       </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience,'work')