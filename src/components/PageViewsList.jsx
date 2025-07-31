import React from 'react'
import './PageViewsList.css'

const PageViewsList = () => {
  const pages = [
    {
      name: 'Anasayfa',
      url: 'websitesiadi.com/anasayfa',
      views: 58
    },
    {
      name: 'Hakkımızda',
      url: 'websitesiadi.com/hakkimizda',
      views: 84
    },
    {
      name: 'İletişim',
      url: 'websitesiadi.com/iletisim',
      views: 76
    },
    {
      name: 'Anasayfa',
      url: 'websitesiadi.com/anasayfa',
      views: 50
    }
  ]

  return (
    <div className="page-views-list">
      <div className="list-header">
        <div className="header-content">
          <h3>En Çok Görüntülenen Sayfalar</h3>
          <div className="header-controls">
            <button className="period-filter">
              <span>Günlük</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99999 10.879L13.7125 7.1665L14.773 8.227L9.99999 13L5.22699 8.227L6.28749 7.1665L9.99999 10.879Z" fill="#525866"/>
              </svg>
            </button>
            <button className="view-all-button">Tümünü Gör</button>
          </div>
        </div>
      </div>
      
      <div className="list-divider"></div>
      
      <div className="pages-container">
        <div className="pages-list">
          {pages.map((page, index) => (
            <div key={index} className="page-item">
              <div className="page-info">
                <div className="page-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.125 13.125C8.125 13.125 12.5 13.75 14.375 15.625H15C15.3452 15.625 15.625 15.3452 15.625 15V11.2106C16.1641 11.0719 16.5625 10.5824 16.5625 10C16.5625 9.41756 16.1641 8.92812 15.625 8.78937V5C15.625 4.65483 15.3452 4.375 15 4.375H14.375C12.5 6.25 8.125 6.875 8.125 6.875H5.625C4.93464 6.875 4.375 7.43464 4.375 8.125V11.875C4.375 12.5654 4.93464 13.125 5.625 13.125H6.25L6.875 16.25H8.125V13.125ZM9.375 7.91325C9.80206 7.82162 10.3297 7.69496 10.8996 7.52733C11.9484 7.21884 13.2812 6.73289 14.375 5.98411V14.0159C13.2812 13.2671 11.9484 12.7812 10.8996 12.4727C10.3297 12.3051 9.80206 12.1784 9.375 12.0868V7.91325ZM5.625 8.125H8.125V11.875H5.625V8.125Z" fill="#335CFF"/>
                  </svg>
                </div>
                <div className="page-details">
                  <div className="page-name">{page.name}</div>
                  <div className="page-url">{page.url}</div>
                </div>
              </div>
              <button className="views-button">
                <span>{page.views} Görüntüleme</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.7958 9.99924L7.08334 6.28674L8.14384 5.22624L12.9168 9.99924L8.14384 14.7722L7.08334 13.7117L10.7958 9.99924Z" fill="#525866"/>
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="scroll-indicator">
          <div className="scroll-track">
            <div className="scroll-thumb"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageViewsList
