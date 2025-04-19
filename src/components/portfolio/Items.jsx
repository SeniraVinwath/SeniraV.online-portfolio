import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import ShapeFour from '../../assets/shape-4.png'
import { motion } from 'framer-motion'

const MotionDiv = motion.div;

const Items = ({projectItems}) => {
  return (
    <>
    {projectItems.map((projectItem) => {
        const {id, img, category, title, description} = projectItem;
        return (
            <MotionDiv
              layout
              animate={{opacity:1, scale: 1}}
              initial={{opacity:0.8, scale: 0.6}}
              exit={{opacity:0.8, scale: 0.6}}
              transition={{duration: 0.3}}
              className="portfolio__items card card-two"
              style={{
                backgroundColor: 'var(--container-color)',
                zIndex: 1,
                position: 'relative'
              }}
              key={id}>
                <div className="portfolio__img-wrapper">
                    <img src={img} alt="" className="portfolio__img" />
                </div>
                
                <span className="portfolio__category text-cs">{category}</span>
                <h3 className="portfolio__title">{title}</h3>
                <p className="portfolio__description">{description}</p>
                
                <a href="#contact" className="link">
                    Request More Details
                    <FaArrowRight className='link__icon'></FaArrowRight>
                </a>
                
                <img src={ShapeFour} alt="" className="shape c__shape" />
            </MotionDiv>
        )
    })}
    </>
  )
}

export default Items