import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    return (
        <footer className=' bg-gray-800 text-white py-3'>
            <div className="container mx-auto text-center">
                <p className='text-sm'> Yernazar Yakupov || SE-2201 &copy; {currentYear}</p>
            </div>
        </footer>
    )
}
