import React, { useState, useMemo } from 'react';
import { Search, Download, Filter, ArrowUpDown, MoreVertical, X, Eye, EyeOff } from 'lucide-react';
import './UserPage.css';
import Layout from '../Layout/Layout';

const data = [
  { 
    id: 1, 
    name: 'Ahmet Yılmaz',
    email: 'ahmet.yilmaz@example.com',
    role: 'Admin',
    registerDate: '15/01/2024',
    status: 'Aktif',
    lastAction: 'Düzenlendi',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  { 
    id: 2, 
    name: 'Ayşe Kaya',
    email: 'ayse.kaya@example.com',
    role: 'Editör',
    registerDate: '20/01/2024',
    status: 'Aktif',
    lastAction: 'Güncellendi',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  { 
    id: 3, 
    name: 'Mehmet Demir',
    email: 'mehmet.demir@example.com',
    role: 'Kullanıcı',
    registerDate: '05/02/2024',
    status: 'Pasif',
    lastAction: 'Oluşturuldu',
    avatar: 'https://i.pravatar.cc/150?u=3'
  },
  { 
    id: 4, 
    name: 'Zeynep Şahin',
    email: 'zeynep.sahin@example.com',
    role: 'Editör',
    registerDate: '12/02/2024',
    status: 'Aktif',
    lastAction: 'Düzenlendi',
    avatar: 'https://i.pravatar.cc/150?u=4'
  },
  { 
    id: 5, 
    name: 'Mustafa Yıldız',
    email: 'mustafa.yildiz@example.com',
    role: 'Kullanıcı',
    registerDate: '28/02/2024',
    status: 'Pasif',
    lastAction: 'Oluşturuldu',
    avatar: 'https://i.pravatar.cc/150?u=5'
  },
  { 
    id: 6, 
    name: 'Elif Korkmaz',
    email: 'elif.korkmaz@example.com',
    role: 'Admin',
    registerDate: '05/03/2024',
    status: 'Aktif',
    lastAction: 'Güncellendi',
    avatar: 'https://i.pravatar.cc/150?u=6'
  },
  { 
    id: 7, 
    name: 'Emre Çelik',
    email: 'emre.celik@example.com',
    role: 'Kullanıcı',
    registerDate: '15/03/2024',
    status: 'Aktif',
    lastAction: 'Düzenlendi',
    avatar: 'https://i.pravatar.cc/150?u=7'
  },
  { 
    id: 8, 
    name: 'Selin Arslan',
    email: 'selin.arslan@example.com',
    role: 'Editör',
    registerDate: '22/03/2024',
    status: 'Aktif',
    lastAction: 'Güncellendi',
    avatar: 'https://i.pravatar.cc/150?u=8'
  },
  { 
    id: 9, 
    name: 'Can Öztürk',
    email: 'can.ozturk@example.com',
    role: 'Kullanıcı',
    registerDate: '30/03/2024',
    status: 'Pasif',
    lastAction: 'Oluşturuldu',
    avatar: 'https://i.pravatar.cc/150?u=9'
  },
  { 
    id: 10, 
    name: 'Deniz Kılıç',
    email: 'deniz.kilic@example.com',
    role: 'Admin',
    registerDate: '05/04/2024',
    status: 'Aktif',
    lastAction: 'Düzenlendi',
    avatar: 'https://i.pravatar.cc/150?u=10'
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
      <div className="content-header mb-4">
        <div className="header-info">
          <div className="page-title">
            <h1>Kullanıcılar</h1>
            <p>Sistem kullanıcılarını yönetin, yeni kullanıcılar ekleyin ve mevcut kullanıcı bilgilerini güncelleyin.</p>
          </div>
        </div>
        <button className="new-content-button" onClick={() => setIsOffcanvasOpen(true)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white"/>
          </svg>
          <span>Yeni Kullanıcı Ekle</span>
        </button>
      </div>
      <hr className="my-4" />
      <div className="users-container">
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
            <button className="btn-sort" onClick={() => handleSort('name')}><ArrowUpDown size={16} /> Sırala</button>
          </div>
        </div>

        <div className="users-table-container">
          <table className="users-table">
            <thead>
              <tr>
                <th><input type="checkbox" className="form-checkbox" /></th>
                <th>Ad Soyad</th>
                <th>E-posta</th>
                <th>Rol</th>
                <th>Kayıt Tarihi</th>
                <th>Durumu</th>
                <th>Son İşlem</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(row => (
                <tr key={row.id}>
                  <td><input type="checkbox" className="form-checkbox" /></td>
                  <td className="user-cell">
                    <div className="user-info">
                      <img src={row.avatar} alt={row.name} className="user-avatar" />
                      <span className="user-name">{row.name}</span>
                    </div>
                  </td>
                  <td className="email-cell">{row.email}</td>
                  <td className="role-cell">{row.role}</td>
                  <td className="date-cell">{row.registerDate}</td>
                  <td className="status-cell">
                    <span className={`status-badge ${row.status === 'Aktif' ? 'status-aktif' : 'status-pasif'}`}>
                      <span className="status-indicator"></span>
                      {row.status}
                    </span>
                  </td>
                  <td className="action-cell">{row.lastAction}</td>
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