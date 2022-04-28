import React from 'react'


export const Artist = () => {
    return (
        <div className="card shadow-sm">
            <img src="https://cdn.abicart.com/shop/22218/art18/h6979/78916979-origpic-517757.jpg?max-width=294&max-height=294&quality=100"
                className="card-img-top" alt="...">
            </img>

            <div className="card-body">
                <p className="card-text">TruckFuckers</p>
                <div className="d-flex justify-content-between align-items-center">
                    <audio controls>
                        <source src="https://www.w3schools.com/html/horse.ogg" type="audio/ogg" />
                        <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

