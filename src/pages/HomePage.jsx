import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
const HomePage = () => {
    return (
        <div className="home">
            <div className="container">
                <Sidebar></Sidebar>
                <Chat></Chat>
            </div>
        </div>
    )
}
export default HomePage