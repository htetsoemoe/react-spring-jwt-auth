import React from 'react'
import Navbar from '../components/Navbar'

const PublicHome = () => {
    return (
        <div>
            <Navbar />

            <div className='flex justify-center items-center h-screen'>
                <div className="w-96 bg-stone-700 px-5 py-20 text-center rounded">
                    <h1 className='text-cyan-400 font-semibold text-2xl'>
                        This is a Public Content.
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default PublicHome
