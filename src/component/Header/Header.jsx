
import React from 'react'

import './Header.css'
import Headerpic from "../../assets/amico.png"
import DailyResult from '../DailyResult/DailyResult'
import {PersonalData} from '../../Store Data/PersonalData'
const Header = () => {

    const nameProfile = PersonalData[0].name
    
    // const [personal] = PersonalData
    // console.log(personal)
    return (
        <div className='Dashboard'>
            <img src={Headerpic} alt="" />
            <div className='Dashboard-content'>
                <h1>Hi {nameProfile}</h1>
                
                <p>“If you want something you’ve never had,<br />you must be willing to do something you’ve never done.”
                    <br />
                    - Thomas Jefferson -</p>

            </div>
            <div className='dailly-container'>
                <DailyResult />
            </div>

        </div>
    )
}

export default Header