import React, { PropsWithChildren } from 'react'
import SideBar from './SideBar'
import TopBar from './TopBar'

interface SideBarProps extends PropsWithChildren {}

const Layout = ({ children }: SideBarProps) => {
  return (
    <div className='relative grid min-h-[calc(100vh)] grid-cols-[280px_minmax(0,1fr)]'>
      <SideBar />
      <div>
        <TopBar />
        <main className='p-6'>{children}</main>
      </div>
    </div>
  )
}

export default Layout
