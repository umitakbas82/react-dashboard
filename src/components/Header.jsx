// export default function Header() {
//     return (
//       <nav className="navbar navbar-light bg-white border-bottom px-4">
//         <div className="text-muted small">12 EKİM CUMA 20:07 – 7º TR</div>
//         <div className="d-flex align-items-center">
//           <div className="text-end me-3">
//             <div className="fw-bold">John Due</div>
//             <div className="text-muted small">Web Yöneticisi</div>
//           </div>
//           <div className="rounded-circle bg-secondary" style={{ width: 40, height: 40 }}></div>
//         </div>
//       </nav>
//     );
//   }
export default function Header() {
  return (
    <nav className="navbar navbar-light bg-white border-bottom px-4 py-2 d-flex justify-content-between align-items-center">
    {/* Sol: Kullanıcı bilgileri */}
    <div className="d-flex align-items-center">
      <div className="rounded-circle bg-secondary me-3" style={{ width: 40, height: 40 }}></div>
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