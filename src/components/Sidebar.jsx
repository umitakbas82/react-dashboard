// import { Nav } from "react-bootstrap";
// import { House,Users,FileText } from "lucide-react";


// export default function Sidebar(){
//     return(
//         <div className="d-flex flex-column flex-shrink-0 p-3 bg-light border-end" style={{ width: '250px', height: '100vh' }}>
//         <span className="fs-4 fw-bold mb-4">HR Management</span>
//         <Nav className="flex-column">
//           <Nav.Link href="#"><House size={16} className="me-2" /> Genel Bakış</Nav.Link>
//           <Nav.Link href="#"><Users size={16} className="me-2" /> Kullanıcılar</Nav.Link>
//           <Nav.Link href="#"><FileText size={16} className="me-2" /> Sayfalar</Nav.Link>
//           <Nav.Link href="#">Blog / Duyuru</Nav.Link>
//           <Nav.Link href="#">Ürünler</Nav.Link>
//           <Nav.Link href="#">Galeri</Nav.Link>
//           <Nav.Link href="#">Kategoriler</Nav.Link>
//           <Nav.Link href="#">Site Ayarları</Nav.Link>
//         </Nav>
//       </div>
//     );
// }

import { Nav } from "react-bootstrap";
import { useNavigate} from "react-router-dom";
import { BarChart2, Users, FileText, ShoppingBag, Image, Grid, MessageSquare, Settings, Globe, Menu,Accessibility } from "lucide-react";

export default function Sidebar() {
  const navigate=useNavigate();
  const navItems = [
    { icon: BarChart2, label: "Genel Bakış", active: true },
    { icon: Users, label: "Kullanıcılar" },
    { icon: FileText, label: "Sayfalar" },
    { icon: ShoppingBag, label: "Ürünler" },
    { icon: Image, label: "Galeri" },
    { icon: Menu, label: "Menü" },
    { icon: Accessibility, label: "Kategoriler" },
    { icon: Settings, label: "Site Ayarları" },
  ];

  return (
    <div
      className="d-flex flex-column p-3 bg-light border-end"
      style={{ width: 250, height: "100vh", overflowY: "auto" }}
    >
      <div className="d-flex align-items-center">
      <div className="rounded-circle bg-secondary me-3" style={{ width: 40, height: 40 }}></div>
      <div >
        <div className="fw-bold">Company Name</div>
        <div className="text-muted small">HR Management</div>
      </div>
    </div>
    <hr className="my-2" />
      <Nav className="flex-column align-items-start">
        {navItems.map((item, idx) => (
          <Nav.Link
            key={idx}
            onClick={() => navigate(item.path)}
            className={`d-flex align-items-center w-100 text-start ${
              item.active ? "fw-bold text-primary" : "text-dark"
            }`}
          >
            <item.icon size={18} className="me-2" />
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

