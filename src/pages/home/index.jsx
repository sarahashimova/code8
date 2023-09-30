
import React from 'react'
import User from '../../components/users'
import Aside from '../../components/aside'
import Header from '../header'
import './style.scss'

function Home() {
    return (
        <div id='home'>
            <Aside/>
            <div id="layout">
                <Header/>
            </div>
        </div>
    )
}

export default Home