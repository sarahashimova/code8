
import React from 'react'
import User from '../../components/users'
import Aside from '../../components/aside'
import Header from '../header'
import './style.scss'
import Nav from '../navbar'
import Search from '../search'

function Home() {
    return (
        <div id='home'>
            <Aside/>
            
            <div id="layout">
                <Header/>
                <Nav/>
                <Search/>
                <User/>
            </div>
        </div>
    )
}

export default Home