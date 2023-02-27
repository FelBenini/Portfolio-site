import React from 'react'

interface cardProps {
    name: string,
    img: string,
    description: string,
    github: string,
    livedemo: boolean,
    livedemolink: string
}

const Card = (props: cardProps) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-image">
                </div>
                <div className="card-info-wrapper">
                    <div className="card-info">
                        <div className="card-info-title">
                            <h5>{props.name}</h5>
                            <img src={props.img} alt="Project"/>
                            <p>{props.description}</p>
                            <span className='buttons'>
                                <a href={props.github} target='blank'><button>Github</button></a>
                                {props.livedemo === true ? <a href={props.livedemolink} target='blank'><button style={{color: '#08BF9E'}}>Live Demo</button></a> : <p style={{display: 'none'}}></p>}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card