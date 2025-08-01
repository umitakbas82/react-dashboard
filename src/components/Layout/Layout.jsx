import React, { useState, useEffect } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import Header from '../Dashboard/Header'
import './Layout.css'

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 768)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768
      setIsMobile(mobile)
      
      if (mobile) {
        setSidebarOpen(false) // Mobilde sidebar kapalı başlasın
      } else if (window.innerWidth > 1470) {
        setSidebarOpen(true)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="layout">
      {/* Mobilde sidebar overlay olarak göster */}
      {isMobile && sidebarOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <Sidebar 
        isOpen={sidebarOpen} 
        onToggle={toggleSidebar}
        isMobile={isMobile}
      />
      
      <div className="main-content" style={{
        marginLeft: isMobile ? 0 : (sidebarOpen ? '265px' : '70px'),
        transition: 'margin-left 0.3s ease'
      }}>
        <Header onToggle={toggleSidebar} isMobile={isMobile} />
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
