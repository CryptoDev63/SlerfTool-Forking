import React from 'react'
import Header from './Header'
import SideBar from './SideBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className='flex'>
            <SideBar />
            <div className='w-full'>
                <Header />
                <div className='w-full p-12 max-h-[calc(100vh-5rem)] overflow-auto hide-scrollbar'>
                    {children}
                </div>
            </div>
        </main>
    )
}

export default Layout