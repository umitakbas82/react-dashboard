
import React, { useState, useMemo } from 'react';
import { Search, Download, Filter, ArrowUpDown, MoreVertical, X, Eye, EyeOff } from 'lucide-react';

import Layout from '../Layout/Layout';


// Search functionality
 
 
 
 const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    if (value === '') {
      setUsers(data);
    } else {
      setUsers(
        data.filter(
          (u) => u.title.toLowerCase().includes(value) ||
                 u.authors.some(a => a.name.toLowerCase().includes(value)) ||
                 u.status.toLowerCase().includes(value)
        )
      );
    }
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
        return b[field].localeCompare(a[field]);
      }
    });
    setUsers(sorted);
  };

  // Filter functionality
  const handleFilter = (status) => {
    if (!status) {
      setUsers(data);
    } else {
      setUsers(data.filter((u) => u.status === status));
    }
  };

  // Export functionality
  const handleExport = () => {
    const csv = [
      ["Başlık", "Yazar", "Tarih", "Durumu", "Son Güncelleme"],
      ...users.map((u) => [
        u.title,
        u.authors.map(a => a.name).join('; '),
        u.date,
        u.status,
        u.lastUpdate,
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