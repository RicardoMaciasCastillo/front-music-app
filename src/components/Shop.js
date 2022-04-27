import React from 'react'
import { Artist } from './Artist'

export const Shop = () => {
    return (
        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <Artist />
                    </div>
                    <div class="col-3">
                        <Artist />
                    </div>
                    <div class="col-3">
                        <Artist />
                    </div>
                    <div class="col-3">
                        <Artist />
                    </div>
                </div>
            </div>
        </div>
    )
}

