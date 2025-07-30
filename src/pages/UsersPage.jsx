import DashboardLayout from "../layouts/DashboardLayout";
import { Table, Button, Form, Dropdown, Badge } from "react-bootstrap";
import { Search, Download, Filter, ArrowUpDown, ChevronDown, MoreVertical } from "lucide-react";

import { useState } from "react";

export default function UsersPage() {
    const allUsers = [
        {
            id: 1,
            name: "James Brown",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Aktif",
            lastAction: "İçerik Güncellendi",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 2,
            name: "Sophia Williams",
            email: "john@example.com",
            role: "Admin",
            registerDate: "22/10/2024",
            status: "Aktif",
            lastAction: "Yeni Sayfa Eklendi",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b048?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 3,
            name: "Arthur Taylor",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Askıya Alındı",
            lastAction: "Yeni Sayfa Eklendi",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 4,
            name: "Emma Wright",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Aktif",
            lastAction: "Yeni Sayfa Eklendi",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 5,
            name: "Matthew Johnson",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Aktif",
            lastAction: "İçerik Güncellendi",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 6,
            name: "Laura Perez",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Aktif",
            lastAction: "İçerik Güncellendi",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 7,
            name: "Wei Chen",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Aktif",
            lastAction: "İçerik Güncellendi",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 8,
            name: "Arthur Taylor",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Askıya Alındı",
            lastAction: "Yeni Sayfa Eklendi",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 9,
            name: "Emma Wright",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Aktif",
            lastAction: "Yeni Sayfa Eklendi",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 10,
            name: "Matthew Johnson",
            email: "john@example.com",
            role: "Editör",
            registerDate: "22/10/2024",
            status: "Aktif",
            lastAction: "İçerik Güncellendi",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face"
        }
    ];

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState(allUsers);
    const [sortField, setSortField] = useState("");
    const [sortDirection, setSortDirection] = useState("asc");
    //search section
    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearch(value);
        setUsers(
            allUsers.filter(
                (u) => u.name.toLowerCase().includes(value) ||
                    u.email.toLowerCase().includes(value) ||
                    u.role.toLowerCase().includes(value) ||
                    u.status.toLowerCase().includes(value)
            )
        );
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
                return b[field].localeCompare(a[field])
            }
        });
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

    return (
        <DashboardLayout>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Kullanıcılar</h4>

                            <button className="btn btn-primary">+ Yeni Kullanıcı Ekle</button>
                        </div>
                    </div>
                    <div className="text-muted text-start mb-4 ">
                        Bu listede sisteminize kayıtlı kullanıcıların ad ve soyadlarını görüntüleyebilirsiniz. Kullanıcı profillerine tıklayarak detaylarını inceleyebilirsiniz.
                    </div>
                </div>
            </div>
<hr className="my-2" />


            <div className="container-fluid mt-4">
             

                {/* Search and Filter Bar */}
                <div className="d-flex flex-wrap align-items-center gap-3 mb-4">
                    {/* Search Input */}
                    <div className="position-relative">
                        <Search
                            size={16}
                            className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"
                        />
                        <Form.Control
                            type="text"
                            placeholder="Arama..."
                            value={search}
                            onChange={handleSearch}
                            style={{
                                paddingLeft: "2.5rem",
                                width: "300px",
                                border: "1px solid #e9ecef",
                                borderRadius: "8px"
                            }}
                        />
                    </div>
                    <hr className="my-2" />
                    {/* Export Button */}
                    <Button
                        variant="outline-secondary"
                        onClick={handleExport}
                        className="d-flex align-items-center gap-2"
                        style={{ borderRadius: "8px" }}
                    >
                        <Download size={16} />
                        Dışa Aktar
                    </Button>

                    {/* Filter Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="outline-secondary"
                            className="d-flex align-items-center gap-2"
                            style={{ borderRadius: "8px" }}
                        >
                            <Filter size={16} />
                            Filtrele
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleFilter("")}>Tümü</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilter("Aktif")}>Aktif</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilter("Askıya Alındı")}>Askıya Alındı</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Sort Dropdown */}
                    <Dropdown>
                        <Dropdown.Toggle
                            variant="outline-secondary"
                            className="d-flex align-items-center gap-2"
                            style={{ borderRadius: "8px" }}
                        >
                            Sırala
                            <ChevronDown size={16} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleSort("name")}>Ada Göre</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSort("role")}>Role Göre</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSort("registerDate")}>Tarihe Göre</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                {/* Users Table */}
                <div className="bg-white rounded-3 shadow-sm">
                    <Table responsive className="mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th
                                    className="border-0 py-3 px-4 text-muted fw-medium"
                                    style={{ fontSize: "0.875rem" }}
                                >
                                    <Form.Check type="checkbox" />
                                </th>
                                <th
                                    className="border-0 py-3 px-4 text-muted fw-medium cursor-pointer"
                                    style={{ fontSize: "0.875rem" }}
                                    onClick={() => handleSort("name")}
                                >
                                    Adı Soyadı {sortField === "name" && <ChevronDown size={14} />}
                                </th>
                                <th
                                    className="border-0 py-3 px-4 text-muted fw-medium"
                                    style={{ fontSize: "0.875rem" }}
                                >
                                    E-posta
                                </th>
                                <th
                                    className="border-0 py-3 px-4 text-muted fw-medium cursor-pointer"
                                    style={{ fontSize: "0.875rem" }}
                                    onClick={() => handleSort("role")}
                                >
                                    Rol {sortField === "role" && <ChevronDown size={14} />}
                                </th>
                                <th
                                    className="border-0 py-3 px-4 text-muted fw-medium cursor-pointer"
                                    style={{ fontSize: "0.875rem" }}
                                    onClick={() => handleSort("registerDate")}
                                >
                                    Kayıt Tarihi {sortField === "registerDate" && <ChevronDown size={14} />}
                                </th>
                                <th
                                    className="border-0 py-3 px-4 text-muted fw-medium"
                                    style={{ fontSize: "0.875rem" }}
                                >
                                    Durumu
                                </th>
                                <th
                                    className="border-0 py-3 px-4 text-muted fw-medium"
                                    style={{ fontSize: "0.875rem" }}
                                >
                                    Son İşlem
                                </th>
                                <th className="border-0 py-3 px-4"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className="border-bottom">
                                    <td className="py-3 px-4 border-0">
                                        <Form.Check type="checkbox" />
                                    </td>
                                    <td className="py-3 px-4 border-0">
                                        <div className="d-flex align-items-center gap-3">
                                            <img
                                                src={user.avatar}
                                                alt={user.name}
                                                className="rounded-circle"
                                                style={{ width: "40px", height: "40px", objectFit: "cover" }}
                                            />
                                            <span className="fw-medium">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 border-0 text-muted">
                                        {user.email}
                                    </td>
                                    <td className="py-3 px-4 border-0">
                                        {user.role}
                                    </td>
                                    <td className="py-3 px-4 border-0 text-muted">
                                        {user.registerDate}
                                    </td>
                                    <td className="py-3 px-4 border-0">
                                        <Badge
                                            bg={user.status === "Aktif" ? "success" : "secondary"}
                                            className="px-3 py-2 rounded-pill"
                                            style={{ fontSize: "0.75rem" }}
                                        >
                                            {user.status === "Aktif" && "● "}
                                            {user.status === "Askıya Alındı" && "● "}
                                            {user.status}
                                        </Badge>
                                    </td>
                                    <td className="py-3 px-4 border-0 text-muted">
                                        {user.lastAction}
                                    </td>
                                    <td className="py-3 px-4 border-0 text-end">
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant="link"
                                                className="border-0 text-muted p-0"
                                                style={{ boxShadow: "none" }}
                                            >
                                                <MoreVertical size={16} />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu align="end">
                                                <Dropdown.Item>Düzenle</Dropdown.Item>
                                                <Dropdown.Item>Görüntüle</Dropdown.Item>
                                                <Dropdown.Divider />
                                                <Dropdown.Item className="text-danger">Sil</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>

            <style jsx>{`
        .cursor-pointer {
          cursor: pointer;
        }
        .cursor-pointer:hover {
          background-color: #f8f9fa;
        }
        .table tbody tr:hover {
          background-color: #f8f9fa;
        }
      `}</style>



        </DashboardLayout>
    )

}