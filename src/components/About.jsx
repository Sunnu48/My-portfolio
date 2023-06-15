import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';

import {styles} from '../styles';
import { services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';

import { SectionWrapper } from '../hoc';

const ServiceCard =({index,title,icon}) => {
  return(
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-[17px] max-w-full leading-[30px]'>
    As a results-driven software engineer, I am passionate about problem-solving and possess a strong understanding of UNIX/Linux and OS internals. With proficiency in C and experience in systems programming languages such as Rust, Python, C++, and Go, I am looking to contribute to an enterprise-grade hypervisor project and learn from experienced engineers.My experience in contributing to software development, managing SQL databases, and collaborating with on-call teams has honed my skills in Java, C++, C#, Python, MySQL, and SQL.With a Master's in Financial Technology and a Bachelor's in Engineering Physics, I possess a strong foundation in quantitative techniques, data structures and algorithms, database systems, object-oriented programming, and operating systems.Additionally, my strong communication skills, adaptability, organization, and problem-solving abilities make me an asset to any team.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About,"about")