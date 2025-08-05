import React, { useState, useMemo } from 'react';
import { Search, Download, Filter, ArrowUpDown, MoreVertical, X, Eye, EyeOff } from 'lucide-react';
import './Pages.css';
import Layout from '../Layout/Layout';

const data = [
  { 
    id: 1, 
    title: 'Anasayfa', 
    authors: [{ name: 'James Brown', avatar: 'https://i.pravatar.cc/32?u=1' }], 
    date: '22/10/2024', 
    status: 'Yayında', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 2, 
    title: 'Hakkımızda', 
    authors: [{ name: 'Sophia Williams', avatar: 'https://i.pravatar.cc/32?u=2' }], 
    date: '22/10/2024', 
    status: 'Yayında', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 3, 
    title: 'Blog', 
    authors: [{ name: 'Arthur Taylor', avatar: 'https://i.pravatar.cc/32?u=3' }], 
    date: '22/10/2024', 
    status: 'Taslak', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 4, 
    title: 'Hizmetler', 
    authors: [
      { name: 'Matthew Johnson', avatar: 'https://i.pravatar.cc/32?u=4' },
      { name: 'Laura Perez', avatar: 'https://i.pravatar.cc/32?u=5' },
      { name: 'Wei Chen', avatar: 'https://i.pravatar.cc/32?u=6' },
      { name: 'Emma Wright', avatar: 'https://i.pravatar.cc/32?u=7' },
      { name: 'Arthur Taylor', avatar: 'https://i.pravatar.cc/32?u=8' }
    ], 
    date: '22/10/2024', 
    status: 'Arşivlendi', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 5, 
    title: 'Referanslar', 
    authors: [{ name: 'Matthew Johnson', avatar: 'https://i.pravatar.cc/32?u=9' }], 
    date: '22/10/2024', 
    status: 'Arşivlendi', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 6, 
    title: 'Contact', 
    authors: [{ name: 'Laura Perez', avatar: 'https://i.pravatar.cc/32?u=10' }], 
    date: '22/10/2024', 
    status: 'Yayında', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 7, 
    title: 'Kariyer', 
    authors: [{ name: 'Wei Chen', avatar: 'https://i.pravatar.cc/32?u=11' }], 
    date: '22/10/2024', 
    status: 'Yayında', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 8, 
    title: 'İletişim Formu', 
    authors: [{ name: 'Arthur Taylor', avatar: 'https://i.pravatar.cc/32?u=12' }], 
    date: '22/10/2024', 
    status: 'Taslak', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 9, 
    title: 'Yazılım', 
    authors: [{ name: 'Emma Wright', avatar: 'https://i.pravatar.cc/32?u=13' }], 
    date: '22/10/2024', 
    status: 'Arşivlendi', 
    lastUpdate: '02/03/2024' 
  },
  { 
    id: 10, 
    title: 'Tasarım', 
    authors: [{ name: 'Matthew Johnson', avatar: 'https://i.pravatar.cc/32?u=14' }], 
    date: '22/10/2024', 
    status: 'Yayında', 
    lastUpdate: '02/03/2024' 
  }
];

const badgeColor = { Yayında: 'live', Taslak: 'draft', Arşivlendi: 'archived' };

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState(data);
  const [sortField, setSortField] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
    status: 'active',
    phone: '',
    city: 'ankara',
    profilePhoto: null
  });

  // Search functionality
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value === '') {
      setUsers(data);
    } else {
      setUsers(
        data.filter(
          (u) => u.title.toLowerCase().includes(value) ||
                 u.authors.some(a => a.name.toLowerCase().includes(value)) ||
                 u.status.toLowerCase().includes(value)
        )
      );
    }
  };

  // Sort functionality
  const handleSort = (field) => {
    const direction = sortField === field && sortDirection === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortDirection(direction);

    const sorted = [...users].sort((a, b) => {
      if (direction === "asc") {
        return a[field].localeCompare(b[field]);
      } else {
        return b[field].localeCompare(a[field]);
      }
    });
    setUsers(sorted);
  };

  // Filter functionality
  const handleFilter = (status) => {
    if (!status) {
      setUsers(data);
    } else {
      setUsers(data.filter((u) => u.status === status));
    }
  };

  // Export functionality
  const handleExport = () => {
    const csv = [
      ["Başlık", "Yazar", "Tarih", "Durumu", "Son Güncelleme"],
      ...users.map((u) => [
        u.title,
        u.authors.map(a => a.name).join('; '),
        u.date,
        u.status,
        u.lastUpdate,
      ]),
    ]
      .map((row) => row.join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "kullanicilar.csv");
    link.click();
  };

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsOffcanvasOpen(false);
    // Reset form
    setFormData({
      name: '',
      email: '',
      password: '',
      role: 'admin',
      status: 'active',
      phone: '',
      city: 'ankara',
      profilePhoto: null
    });
  };

  const checkPasswordStrength = (password) => {
    const checks = {
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumbers: /\d/.test(password),
      hasMinLength: password.length >= 8
    };
    return checks;
  };

  const passwordChecks = checkPasswordStrength(formData.password);
  const passwordScore = Object.values(passwordChecks).filter(Boolean).length;

  return (
    <Layout>
        <div className="fixed top-[90px] left-[265px] right-0 z-[5] bg-white px-6 py-2 border-b border-gray-200 flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-gray-900 ms-3">Sayfalar</h1>
          <p className="text-sm text-gray-600 ms-3">Bu bölümde web sitenizdeki tüm sayfaları oluşturabilir, düzenleyebilir ve yönetebilirsiniz.</p>
        </div>
        
        <button 
          onClick={() => setIsOffcanvasOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-medium text-sm transition-colors me-3 rounded-lg"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white"/>
          </svg>
          Yeni Sayfa Ekle
        </button>
 
      </div>
      <hr className="my-4" />
      <div className="fixed top-[140px] left-[265px] right-0 bottom-0 z-[4] bg-white px-8 py-5 overflow-y-auto">
        <div className="users-header">
          <div className="header-actions">
            <div className="search-input-container">
              <Search size={18} />
              <input
                type="text"
                placeholder="Arama..."
                value={search}
                onChange={handleSearch}
              />
              <span className="search-shortcut">⌘T</span>
            </div>
            <button className="btn-export" onClick={handleExport}><Download size={16} /> Dışa Aktar</button>
            <button className="btn-filter" onClick={() => handleFilter()}><Filter size={16} /> Filtrele</button>
            <button className="btn-sort" onClick={() => handleSort('title')}><ArrowUpDown size={16} /> Sırala</button>
          </div>
        </div>

        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th><input type="checkbox" /></th>
                <th>Yazar</th>
                <th>Başlık</th>
                
                <th>Oluşturulma Tarihi</th>
                <th>Durumu</th>
                <th>Son Güncelleme</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(row => (
                <tr key={row.id}>
                  <td><input type="checkbox" /></td>
                  <td className="author-cell">
                    <div className="author-info">
                      {row.authors.length === 1 ? (
                        <>
                          <img src={row.authors[0].avatar} alt={row.authors[0].name} className="author-avatar-single" />
                          <span className="author-name">{row.authors[0].name}</span>
                        </>
                      ) : (
                        <div className="author-group">
                          {row.authors.slice(0, 3).map((author, idx) => (
                            <img
                              key={author.name}
                              src={author.avatar}
                              alt={author.name}
                              className="author-avatar-group"
                              style={{ zIndex: 3 - idx }}
                            />
                          ))}
                          {row.authors.length > 3 && (
                            <span className="author-more">+{row.authors.length - 3}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="title-cell">{row.title}</td>
               
                  <td className="date-cell">{row.date}</td>
                  <td className="status-cell">
                    <span className={`status-badge status-${row.status.toLowerCase()}`}>
                      <span className="status-indicator"></span>
                      {row.status}
                    </span>
                  </td>
                  <td className="date-cell">{row.lastUpdate}</td>
                  <td className="actions-cell">
                    <button className="action-btn">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Offcanvas Panel */}
        <div className={`offcanvas-panel ${isOffcanvasOpen ? 'open' : ''}`}>
          <div className="offcanvas-header">
            <h2>Yeni Kullanıcı Ekle</h2>
            <button className="close-btn" onClick={() => setIsOffcanvasOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="offcanvas-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Ad Soyad</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Ad Soyad giriniz"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="ornek@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Şifre</label>
                <div className="password-input">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    required
                  />
                  <button 
                    type="button" 
                    className="toggle-password"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                <div className="password-strength">
                  <div className="strength-bars">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className={`strength-bar ${i <= passwordScore ? 'active' : ''}`}
                        style={{ '--bar-color': passwordScore >= 4 ? '#10B981' : passwordScore >= 2 ? '#F59E0B' : '#EF4444' }}
                      />
                    ))}
                  </div>
                  <div className="password-requirements">
                    <p>Şifre en az 8 karakter uzunluğunda olmalı ve şunları içermelidir:</p>
                    <ul>
                      <li className={passwordChecks.hasUpperCase ? 'valid' : ''}>Büyük harf (A-Z)</li>
                      <li className={passwordChecks.hasLowerCase ? 'valid' : ''}>Küçük harf (a-z)</li>
                      <li className={passwordChecks.hasNumbers ? 'valid' : ''}>Rakam (0-9)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Rol</label>
                  <select 
                    name="role" 
                    value={formData.role}
                    onChange={handleInputChange}
                  >
                    <option value="admin">Admin</option>
                    <option value="editor">Editör</option>
                    <option value="author">Yazar</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Durum</label>
                  <select 
                    name="status" 
                    value={formData.status}
                    onChange={handleInputChange}
                  >
                    <option value="active">Aktif</option>
                    <option value="passive">Pasif</option>
                  </select>
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Telefon</label>
                  <div className="phone-input">
                    <span className="country-code">+90</span>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="5__ ___ __ __"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Şehir</label>
                  <select 
                    name="city" 
                    value={formData.city}
                    onChange={handleInputChange}
                  >
                    <option value="istanbul">İstanbul</option>
                    <option value="ankara">Ankara</option>
                    <option value="izmir">İzmir</option>
                    <option value="antalya">Antalya</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label>Profil Fotoğrafı</label>
                <div className="file-upload">
                  <input 
                    type="file" 
                    id="profile-photo" 
                    accept="image/*"
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        profilePhoto: e.target.files[0]
                      }));
                    }}
                  />
                  <label htmlFor="profile-photo">
                    <span>Dosya Seç</span>
                    {formData.profilePhoto ? (
                      <span className="file-name">{formData.profilePhoto.name}</span>
                    ) : (
                      <span className="file-placeholder">Dosya seçilmedi</span>
                    )}
                  </label>
                </div>
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="btn-cancel"
                  onClick={() => setIsOffcanvasOpen(false)}
                >
                  İptal
                </button>
                <button 
                  type="submit" 
                  className="btn-submit"
                  disabled={passwordScore < 3}
                >
                  Kullanıcıyı Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
        <div 
          className={`offcanvas-overlay ${isOffcanvasOpen ? 'active' : ''}`}
          onClick={() => setIsOffcanvasOpen(false)}
        />
      </div>
    </Layout>
  );
}