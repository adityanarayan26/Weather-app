import React from 'react'
import './style.css'
const Loader = () => {
    return (
        <div id='box'>
            <div class="container">
                <div class="cloud front">
                    <span class="left-front"></span>
                    <span class="right-front"></span>
                </div>
                <span class="sun sunshine"></span>
                <span class="sun"></span>
                <div class="cloud back">
                    <span class="left-back"></span>
                    <span class="right-back"></span>
                </div>
            </div>
        </div>
    )
}

export default Loader
