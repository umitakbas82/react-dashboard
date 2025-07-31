import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import DashboardContent from './DashboardContent'
import './Dashboard.css'

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1470)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1470) {
        setSidebarOpen(true)
      } else {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="dashboard">
      {sidebarOpen}
      <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      <div className="main-content">
        <Header />
        <DashboardContent />
      </div>
    </div>
  )
}

export default Dashboard
