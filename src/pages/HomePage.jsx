import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'
import RegistrationPage from './RegistrationPage'
const HomePage = () => {
    return (
        <div className='home'>
            <div className="container">
                <Sidebar />
                <Chat />
            </div>
        </div>
    )
}
export default HomePage