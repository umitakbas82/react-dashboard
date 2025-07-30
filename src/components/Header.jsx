
export default function Header() {
  return (
    <nav className="navbar navbar-light bg-white border-bottom px-4 py-2 d-flex justify-content-between align-items-center">
    {/* Sol: Kullanıcı bilgileri */}
    <div className="d-flex align-items-center">
      <div className="rounded-circle bg-secondary me-3" ><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"></img></div>
      <div >
        <div className="fw-bold">John Due</div>
        <div className="text-muted small">Web Yöneticisi</div>
      </div>
    </div>

    {/* Sağ: Tarih ve saat */}
    <div className="card shadow-sm">
    <div className="text-muted small">12 EKİM CUMA 20:07 – 7º TR</div>
    </div>
  </nav>
  );
}