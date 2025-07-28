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
    <nav className="navbar navbar-light bg-white border-bottom px-4 py-2">
      <div className="text-muted small">12 EKİM CUMA 20:07 – 7º TR</div>
      <div className="d-flex align-items-center">
        <div className="text-end me-3">
          <div className="fw-bold">John Due</div>
          <div className="text-muted small">Web Yöneticisi</div>
        </div>
        <div className="rounded-circle bg-secondary" style={{ width: 40, height: 40 }}></div>
      </div>
    </nav>
  );
}