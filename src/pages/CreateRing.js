import React from 'react'
import link from 'react-router-dom'

import './navbarOne.css'


export const CreateRing = () => {
    return (
        <div>

            <ul>
                <li><link to="/home">Home</link></li>
                <li><link to="/ring">Create Ring</link></li>
                <li><link to="/">Выход</link></li>
            </ul>
            <h1 className="formSignIn">Тут будут Rings</h1>

        </div>
    )
}