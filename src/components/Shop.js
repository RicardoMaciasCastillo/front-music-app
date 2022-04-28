import React from 'react'
import { Artist } from './Artist'

export const Shop = () => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <Artist />
                    </div>
                    <div className="col-3">
                        <Artist />
                    </div>
                    <div className="col-3">
                        <Artist />
                    </div>
                    <div className="col-3">
                        <Artist />
                    </div>
                </div>
            </div>
        </div>
    )
}

