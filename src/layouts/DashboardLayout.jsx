// import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";

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

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function DashboardLayout({ children }) {

  
  return (
    <div className="d-flex vh-100 vw-100 overflow-hidden">
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column" >
        <Header />
        <main className="flex-grow-1 overflow-auto p-4 bg-light">{children}</main>
      </div>
    </div>
  );
}