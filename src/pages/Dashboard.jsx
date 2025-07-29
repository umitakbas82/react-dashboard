// import DashboardLayout from "../layouts/DashboardLayout";

// export default function Dashboard() {
//   return (
//     <DashboardLayout>
//       <h1 className="h4 mb-4">Genel Bakış</h1>
//       <p>Bu alana istatistik kartları, grafikler ve içerikler gelecek.</p>
//     </DashboardLayout>
//   );
// }

import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import { Users, MessageCircle, Eye, ShoppingCart } from "lucide-react";

export default function Dashboard() {
  const stats = [
    { title: "Kullanıcı", value: "8.8k", change: "~ 7.4%", icon: <Users /> },
    { title: "Yorumlar", value: "1.2k", change: "↓ 7.4%", icon: <MessageCircle /> },
    { title: "Ziyaretçi Sayısı", value: "4.894", change: "↑ 7.4%", icon: <Eye /> },
    { title: "Siparişler", value: "8.8k", change: "↑ 7.4%", icon: <ShoppingCart /> },
  ];

  return (
    <DashboardLayout>
    <div className="container-fluid h-100">
        <div className="row h-100">
          {/* Sol İçerik Alanı */}
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4>Genel Bakış</h4>
              <button className="btn btn-primary">+ Yeni içerik</button>
            </div>

            <div className="row g-3 mb-4">
              {stats.map((stat, idx) => (
                <div className="col-md-3" key={idx}>
                  <StatCard {...stat} />
                </div>
              ))}
            </div>

            <div className="row g-4">
              <div className="col-md-8">
                <div className="card shadow-sm h-100">
                  <div className="card-header">Aylara Göre Kullanıcı Ziyaretleri</div>
                  <div className="card-body">
                    <canvas id="visitsChart" height="200"></canvas>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm h-100">
                  <div className="card-header">Son Aktiviteler</div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Yeni içerik eklendi – 12.08.2024</li>
                    <li className="list-group-item">Bir kullanıcı giriş yaptı – 12.08.2024</li>
                    <li className="list-group-item">Yeni yorum alındı – 12.08.2024</li>
                    <li className="list-group-item">Sayfa düzenlendi – 12.08.2024</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}