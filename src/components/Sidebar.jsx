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
import { BarChart2, Users, FileText, ShoppingBag, Image, Grid, MessageSquare, Settings, Globe } from "lucide-react";

export default function Sidebar() {
  const navItems = [
    { icon: BarChart2, label: "Genel Bakış", active: true },
    { icon: Users, label: "Kullanıcılar" },
    { icon: FileText, label: "Sayfalar" },
    { icon: ShoppingBag, label: "Ürünler" },
    { icon: Image, label: "Galeri" },
    { icon: Grid, label: "Kategoriler" },
    { icon: MessageSquare, label: "Blog / Haber / Duyuru" },
    { icon: Settings, label: "Site Ayarları" },
  ];

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light border-end" style={{ width: 250, height: '100vh' }}>
      <span className="fs-5 fw-bold mb-4">HR Management</span>
      <Nav className="flex-column">
        {navItems.map((item, idx) => (
          <Nav.Link key={idx} href="#" className={item.active ? "fw-bold text-primary" : "text-dark"}>
            <item.icon size={16} className="me-2" />
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

