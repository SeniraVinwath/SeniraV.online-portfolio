import React, { useState } from 'react'

const Card = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    
    // Toggle content visibility
    const toggleContent = () => {
        setShowInfo(!showInfo);
    };
    
    return (
        <div className={`resume__item ${showInfo ? 'expanded' : ''}`}>
            <div className="resume__header" onClick={toggleContent}>
                <h3 className="resume__subtitle">{props.title}</h3>
                <span className="resume__icon">{showInfo ? '-' : '+'}</span>
            </div>
            
            <div className={`resume__content ${showInfo ? 'show-content' : ''}`}>
                <div className="resume__date-title">
                    <h3 className="resume__title">{props.subtitle}</h3>
                    <span className="resume__date text-cs">{props.date}</span>
                </div>
                
                <p className="resume__description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card