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
    status: 'Askıya Alındı',
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
    status: 'Askıya Alındı',
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
    status: 'Askıya Alındı',
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
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Sayfa başına 8 kullanıcı
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

  // Pagination calculations
  const totalItems = users.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = users.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {/* Offcanvas - Layout dışında render et */}
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
            <div className="form-row">
              <div className="form-group">
                <label>Ad</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Adınızı girin"
                  required
                />
              </div>
              <div className="form-group">
                <label>Soyad</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Soyadınızı girin"
                  required
                />
              </div>
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
                    <li className={passwordChecks.hasLowerCase ? 'valid' : ''}>Çüçük harf (a-z)</li>
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
                  required
                >
                  <option value="">Rol seçin</option>
                  <option value="admin">Yönetici</option>
                  <option value="editor">Editör</option>
                  <option value="viewer">Görüntüleyici</option>
                </select>
              </div>
              <div className="form-group">
                <label>Departman</label>
                <select 
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Departman seçin</option>
                  <option value="it">Bilgi İşlem</option>
                  <option value="hr">İnsan Kaynakları</option>
                  <option value="finance">Finans</option>
                  <option value="marketing">Pazarlama</option>
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
      
      {/* Ana sayfa içeriği */}
      <div className="fixed top-[90px] left-[265px] right-0 z-[5] bg-white px-6 py-2 border-b border-gray-200 flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-lg font-semibold text-gray-900 ms-3">Kullanıcılar</h1>
          <p className="text-sm text-gray-600 ms-3">Bu listede sisteminize kayıtlı kullanıcıların ad ve soyadlarını görüntüleyebilirsiniz. Kullanıcı profillerine tıklayarak detaylarını inceleyebilirsiniz.</p>
        </div>
        
        <button 
          onClick={() => setIsOffcanvasOpen(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-medium text-sm transition-colors me-3 rounded-lg"
        >
          <svg width="14" height="14" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.25 9.25V4.75H10.75V9.25H15.25V10.75H10.75V15.25H9.25V10.75H4.75V9.25H9.25Z" fill="white"/>
          </svg>
          Yeni Kullanıcı Ekle
        </button>
 
      </div>
      
      <div className="fixed top-[140px] left-[265px] right-0 bottom-0 z-[4] bg-white px-8 py-5 overflow-y-auto">
            <div className="mb-4 me-3">
              <div className="flex justify-end items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Arama..."
                    value={search}
                    onChange={handleSearch}
                    className="w-64 pl-9 pr-12 py-2 border border-gray-300 rounded-lg focus:border-blue-500 text-sm"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">⌘T</span>
                </div>
                <div className="h-6 w-px bg-gray-300"></div>
                <button 
                  onClick={handleExport}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download size={16} /> Dışa Aktar
                </button>
                <button 
                  onClick={() => handleFilter()}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Filter size={16} /> Filtrele
                </button>
                <button 
                  onClick={() => handleSort('name')}
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <ArrowUpDown size={16} /> Sırala
                </button>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr className="border-b border-gray-200">
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                    </th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ad Soyad</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">E-posta</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kayıt Tarihi</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durumu</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Son İşlem</th>
                    <th className="px-3 py-2 text-left text-xs font-medium text-gray-500"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentUsers.map(row => (
                    <tr key={row.id} className="hover:bg-gray-50">
                      <td className="px-3 py-3 whitespace-nowrap">
                        <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <div className="flex items-center">
                          <img src={row.avatar} alt={row.name} className="h-8 w-8 rounded-full" />
                          <span className="ml-3 text-sm font-medium text-gray-900">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{row.email}</td>
                      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-900">{row.role}</td>
                      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{row.registerDate}</td>
                      <td className="px-3 py-3 whitespace-nowrap">
                        <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${
                          row.status === 'Aktif' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${
                            row.status === 'Aktif' 
                              ? 'bg-green-500' 
                              : 'bg-gray-400'
                          }`}></span>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 whitespace-nowrap text-sm text-gray-500">{row.lastAction}</td>
                      <td className="px-3 py-3 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-gray-400 hover:text-gray-600 p-1 rounded">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6 px-2">
              <div>
                <span className="text-sm text-gray-500">
                  {startIndex + 1}-{Math.min(endIndex, totalItems)} / {totalItems} kullanıcı gösteriliyor
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 text-sm border border-gray-300 rounded-md transition-colors ${
                    currentPage === 1 
                      ? 'bg-gray-50 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  ‹
                </button>
                
                {[...Array(totalPages)].map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-3 py-2 text-sm border rounded-md min-w-[40px] transition-colors ${
                        currentPage === page 
                          ? 'bg-blue-600 border-blue-600 text-white' 
                          : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
                
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 text-sm border border-gray-300 rounded-md transition-colors ${
                    currentPage === totalPages 
                      ? 'bg-gray-50 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer'
                  }`}
                >
                  ›
                </button>
              </div>
            </div>

          </div>
      
      <Layout>
        {/* Layout artık boş, tüm içerik yukarıda sabit konumda */}
      </Layout>
    </>
  );
}