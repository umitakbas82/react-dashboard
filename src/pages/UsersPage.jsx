import DashboardLayout from "../layouts/DashboardLayout";
import { Table, Button, Form, Dropdown } from "react-bootstrap";
import { Search, Download, Filter, ArrowUpDown } from "lucide-react";
import { useState } from "react";

export default function UsersPage(){
    const allUsers=[
        { id: 1, name: "James Brown", email: "john@example.com", role: "Editor", registerDate: "22/10/2024", status: "Aktif", lastAction: "İçerik Güncellendi" },
        { id: 2, name: "Sophia Williams", email: "john@example.com", role: "Admin", registerDate: "22/10/2024", status: "Aktif", lastAction: "Yeni Sayfa Eklendi" },
        { id: 3, name: "Arthur Taylor", email: "john@example.com", role: "Editor", registerDate: "22/10/2024", status: "Askıya Alındı", lastAction: "Yeni Sayfa Eklendi" },
        { id: 4, name: "Emma Wright", email: "john@example.com", role: "Editor", registerDate: "22/10/2024", status: "Aktif", lastAction: "Yeni Sayfa Eklendi" },
        { id: 5, name: "Matthew Johnson", email: "john@example.com", role: "Editor", registerDate: "22/10/2024", status: "Aktif", lastAction: "İçerik Güncellendi" },
        { id: 6, name: "Laura Perez", email: "john@example.com", role: "Editor", registerDate: "22/10/2024", status: "Aktif", lastAction: "İçerik Güncellendi" },
        { id: 7, name: "Wei Chen", email: "john@example.com", role: "Editor", registerDate: "22/10/2024", status: "Aktif", lastAction: "İçerik Güncellendi" },
    ];

    const [search, setSearch]=useState("");
    const [users, setUsers]=useState(allUsers);


    //search section
    const handleSearch=(e)=>{
        const value = e.target.value.toLowerCase();
        setSearch(value);
        setUsers(
            allUsers.filter(
                (u)=>u.name.toLowerCase().includes(value) ||
                u.email.toLowerCase().includes(value) ||
                u.role.toLowerCase().includes(value) ||
                u.status.toLowerCase().includes(value)
            )
        );
    };

    const handleSort= ()=>{
        const sorted=[...users].sort((a,b)=> a.name.localeCompare(b.name)
        );
        setUsers(sorted);
    };

//action filter

const handleFilter = (status) => {
    if (!status) {
      setUsers(allUsers);
    } else {
      setUsers(allUsers.filter((u) => u.status === status));
    }
  };


  //export table 
  const handleExport = () => {
    const csv = [
      ["Ad Soyad", "E-posta", "Rol", "Kayıt Tarihi", "Durumu", "Son İşlem"],
      ...users.map((u) => [
        u.name,
        u.email,
        u.role,
        u.registerDate,
        u.status,
        u.lastAction,
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

return(
    <DashboardLayout>
        <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Kullanıcılar</h4>
        <Button variant="primary">+ Yeni Kullanıcı</Button>
        </div>
        <div className="d-flex flex-wrap gap-2 mb-3">
            <div className="position-relative">
            <Search size={16} className="position-absolute top-50 start-0 translate-middle-y ms-2" />
          <Form.Control
            type="text"
            placeholder="Ara..."
            value={search}
            onChange={handleSearch}
            style={{ paddingLeft: "2.2rem", width: 200 }}
          />
            </div>
            <Button variant="outline-secondary" onClick={handleExport}>
          <Download size={16} className="me-1" /> Dışa Aktar
        </Button>

        <Dropdown>
          <Dropdown.Toggle variant="outline-secondary" id="dropdown-filter">
            <Filter size={16} className="me-1" /> Filtrele
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleFilter("")}>Tümü</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter("Aktif")}>Aktif</Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter("Askıya Alındı")}>Askıya Alındı</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button variant="outline-secondary" onClick={handleSort}>
          <ArrowUpDown size={16} className="me-1" /> Sırala
        </Button>


        </div>
    <Table striped bordered hover responsive>
        <thead>
            <tr>
            <th>#</th>
            <th>Adı Soyadı</th>
            <th>E-posta</th>
            <th>Rol</th>
            <th>Kayıt Tarihi</th>
            <th>Durumu</th>
            <th>Son İşlem</th>
            <th>İşlemler</th> 
            </tr>
        </thead>
    </Table>




    </DashboardLayout>
)

}