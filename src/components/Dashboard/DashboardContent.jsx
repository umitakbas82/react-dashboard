import React from 'react'
import StatCard from './StatCard'
import AnalyticsChart from './AnalyticsChart'
import PageViewsList from './PageViewsList'
import ActivityList from './ActivityList'
import CountryAnalytics from './CountryAnalytics'
import './DashboardContent.css'

const DashboardContent = () => {
  return (
    <div className="dashboard-content">
      <div className="content-header">
        <div className="header-info">
          <div className="page-title">
            <h1>Genel Bakış</h1>
            <p>Bu panelden web sitenizin durumunu hızlıca gözden geçirebilir, yeni içerikler ekleyebilir ve analizlerinizi inceleyebilirsiniz.</p>
          </div>
        </div>
        <button className="new-content-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white"/>
          </svg>
          <span>Yeni İçerik</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10.879L13.7125 7.1665L14.773 8.227L10 13L5.227 8.227L6.2875 7.1665L10 10.879Z" fill="white"/>
          </svg>
        </button>
      </div>

      <div className="content-main">
        <div className="stats-section">
          <div className="stats-grid">
            <StatCard 
              title="Kullanıcı"
              value="8.8k"
              period="Günlük"
              trend="up"
              percentage="7.4%"
            />
            <StatCard 
              title="Ziyaretçi Sayısı"
              value="8.8k"
              period="Haftalık"
              trend="up"
              percentage="7.4%"
            />
            <StatCard 
              title="Yorumlar"
              value="1.2k"
              period="Aylık"
              trend="down"
              percentage="7.4%"
            />
            <StatCard 
              title="Siparişler"
              value="4.894"
              period="Haftalık"
              trend="up"
              percentage="7.4%"
              large={true}
            />
          </div>
          
          <div className="gradient-cards">
            <div className="gradient-card blue"></div>
            <div className="gradient-card purple"></div>
            <div className="gradient-card cyan"></div>
          </div>
        </div>

        <div className="analytics-section">
          <div className="analytics-chart-container">
            <AnalyticsChart />
          </div>
          <div className="country-analytics-container">
            <CountryAnalytics />
          </div>
        </div>

        <div className="lists-section">
          <div className="page-views-container">
            <PageViewsList />
          </div>
          <div className="activity-container">
            <ActivityList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardContent
