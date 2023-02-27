import React from 'react'

interface cardProps {
    name: string,
    img: string,
    description: string,
}

const Card = (props: cardProps) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                    <i className="fa-duotone fa-apartment"></i>
                </div>
                <div className="card-info-wrapper">
                    <div className="card-info">
                        <i className="fa-duotone fa-apartment"></i>
                        <div className="card-info-title">
                            <h5>{props.name}</h5>
                            <img src={props.img} alt="Project"/>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card