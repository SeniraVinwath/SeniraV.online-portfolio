import React from 'react'
import { cv } from '../../Data'
import Card from './Card'
import './resume.css'

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section__title text-cs">Resume</h2>
      <p className="section__subtitle">
        My <span>Journey</span>
      </p>
      
      <div className="resume__container container grid">
        <div className="resume__group">
          <h3 className="resume__heading">Education</h3>
          
          <div className="resume__items">
            {cv.map((val, id) => {
              if(val.category === 'education') {
                return (
                  <Card 
                    key={id} 
                    title={val.title} 
                    subtitle={val.subtitle} 
                    date={val.date} 
                    description={val.description}
                  />
                )
              }
              return null; // Add return for non-matching items
            })}
          </div>
        </div>

        <div className="resume__group">
          <h3 className="resume__heading2">Experience</h3>
          
          <div className="resume__items">
            {cv.map((val, id) => {
              if(val.category === 'experience') {
                return (
                  <Card 
                    key={id} 
                    title={val.title} 
                    subtitle={val.subtitle} 
                    date={val.date} 
                    description={val.description}
                  />
                )
              }
              return null; // Add return for non-matching items
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume