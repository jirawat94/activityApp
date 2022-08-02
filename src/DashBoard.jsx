import React from 'react'
import Header from './component/Header/Header'
import Toolbar from './component/Toolbar/Toolbar'
import Content from './component/content/Content'
import './Dashboard.css'

const DashBoard = () => {
    return (
        <div>
            <div className='Header-section'>
                <Header />

            </div>
            <Toolbar />
            <Content />

        </div>
    )
}

export default DashBoard