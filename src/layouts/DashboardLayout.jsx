

// export default function DashboardLayout({ children }) {
//     return (
//       <div className="d-flex">
//         <Sidebar />
//         <div className="flex-grow-1 d-flex flex-column" style={{ height: "100vh", overflow: "hidden" }}>
//           <Header />
//           <main className="flex-grow-1 overflow-auto p-4 bg-light">
//             {children}
//           </main>
//         </div>
//       </div>
//     );
//   }

// import Sidebar from "../components/Dashboard/Sidebar";
// import Header from "../components/Dashboard/Header";

// export default function DashboardLayout({ children }) {

  
//   return (
//     <div className="d-flex vh-100 vw-100 overflow-hidden">
//       <Sidebar />
//       <div className="flex-grow-1 d-flex flex-column" >
//         <Header />
//         <main className="flex-grow-1 overflow-auto p-4 bg-light">{children}</main>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import { Outlet } from "react-router-dom";
export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="d-flex flex-column flex-md-row" style={{ height: "100vh" }}>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-grow-1 overflow-auto p-3 bg-light">
          {children}
          <Outlet />
        </main>
      </div>
    </div>
  );
}

