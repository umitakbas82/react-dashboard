import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import './Pages.css'

const Pages = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('Tümü')

  const pagesData = [
    {
      id: 1,
      title: 'Anasayfa',
      author: {
        name: 'James Brown',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Yayında',
      lastUpdate: '02/03/2024'
    },
    {
      id: 2,
      title: 'Hakkımızda',
      author: {
        name: 'Sophia Williams',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b048?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Yayında',
      lastUpdate: '02/03/2024'
    },
    {
      id: 3,
      title: 'Blog',
      author: {
        name: 'Arthur Taylor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Taslak',
      lastUpdate: '02/03/2024'
    },
    {
      id: 4,
      title: 'Hizmetler',
      author: {
        name: 'Matthew Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Arşivlendi',
      lastUpdate: '02/03/2024'
    },
    {
      id: 5,
      title: 'Referanslar',
      author: {
        name: 'Matthew Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Arşivlendi',
      lastUpdate: '02/03/2024'
    },
    {
      id: 6,
      title: 'Contact',
      author: {
        name: 'Laura Perez',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Yayında',
      lastUpdate: '02/03/2024'
    },
    {
      id: 7,
      title: 'Kariyer',
      author: {
        name: 'Wei Chen',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Yayında',
      lastUpdate: '02/03/2024'
    },
    {
      id: 8,
      title: 'İletişim Formu',
      author: {
        name: 'Arthur Taylor',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Taslak',
      lastUpdate: '02/03/2024'
    },
    {
      id: 9,
      title: 'Yazılım',
      author: {
        name: 'Emma Wright',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Arşivlendi',
      lastUpdate: '02/03/2024'
    },
    {
      id: 10,
      title: 'Tasarım',
      author: {
        name: 'Matthew Johnson',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
      },
      createdDate: '22/10/2024',
      status: 'Yayında',
      lastUpdate: '02/03/2024'
    }
  ]

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Yayında': { class: 'status-published', color: '#10B981' },
      'Taslak': { class: 'status-draft', color: '#6B7280' },
      'Arşivlendi': { class: 'status-archived', color: '#EF4444' }
    }
    
    return statusConfig[status] || statusConfig['Taslak']
  }

  const filteredPages = pagesData.filter(page => {
    const matchesSearch = page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = selectedFilter === 'Tümü' || page.status === selectedFilter
    
    return matchesSearch && matchesFilter
  })

  return (
    <Layout>
      <div className="pages-container">
        {/* Header Section */}
        <div className="pages-header">
          <div className="search-section">
            <div className="search-input-container">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 17.5L12.5001 12.5M14.1667 8.33333C14.1667 11.555 11.555 14.1667 8.33333 14.1667C5.11167 14.1667 2.5 11.555 2.5 8.33333C2.5 5.11167 5.11167 2.5 8.33333 2.5C11.555 2.5 14.1667 5.11167 14.1667 8.33333Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Arama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-shortcut">⌘K</span>
            </div>
          </div>

          <div className="header-actions">
            <button className="export-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66667 14.1667L10 17.5M10 17.5L13.3333 14.1667M10 17.5V10M17.5 14.1667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V14.1667" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Dışa Aktar
            </button>
            
            <button className="filter-btn">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Filtrele
            </button>

            <div className="sort-dropdown">
              <button className="sort-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.33333 5H16.6667M5 10H15M7.5 15H12.5" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sırala
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#374151" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="pages-table-container">
          <table className="pages-table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" className="checkbox" />
                </th>
                <th>Başlık</th>
                <th>Yazar</th>
                <th>Oluşturulma Tarihi</th>
                <th>Durum</th>
                <th>Son Güncelleme</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredPages.map((page) => (
                <tr key={page.id} className="table-row">
                  <td>
                    <input type="checkbox" className="checkbox" />
                  </td>
                  <td className="title-cell">
                    <span className="page-title">{page.title}</span>
                  </td>
                  <td className="author-cell">
                    <div className="author-info">
                      <img
                        src={page.author.avatar}
                        alt={page.author.name}
                        className="author-avatar"
                      />
                      <span className="author-name">{page.author.name}</span>
                    </div>
                  </td>
                  <td className="date-cell">{page.createdDate}</td>
                  <td className="status-cell">
                    <span 
                      className={`status-badge ${getStatusBadge(page.status).class}`}
                    >
                      <span className="status-dot">●</span>
                      {page.status}
                    </span>
                  </td>
                  <td className="date-cell">{page.lastUpdate}</td>
                  <td className="actions-cell">
                    <button className="action-menu-btn">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10.8333C10.4602 10.8333 10.8333 10.4602 10.8333 10C10.8333 9.53976 10.4602 9.16667 10 9.16667C9.53976 9.16667 9.16667 9.53976 9.16667 10C9.16667 10.4602 9.53976 10.8333 10 10.8333Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 4.99999C10.4602 4.99999 10.8333 4.62689 10.8333 4.16666C10.8333 3.70642 10.4602 3.33333 10 3.33333C9.53976 3.33333 9.16667 3.70642 9.16667 4.16666C9.16667 4.62689 9.53976 4.99999 10 4.99999Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8333C10.8333 15.3731 10.4602 15 10 15C9.53976 15 9.16667 15.3731 9.16667 15.8333C9.16667 16.2936 9.53976 16.6667 10 16.6667Z" stroke="#9CA3AF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}

export default Pages
