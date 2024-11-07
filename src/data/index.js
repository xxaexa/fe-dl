//data dummy users
export const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 28,
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 32,
    status: "inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 24,
    status: "active",
  },
  {
    id: 4,
    name: "Bob Williams",
    email: "bob.williams@example.com",
    age: 45,
    status: "inactive",
  },
  {
    id: 5,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    age: 30,
    status: "active",
  },
];

// data status agar tidak selalu menulis
export const statusOptions = [
  { value: "active", label: "Aktif" },
  { value: "inactive", label: "Tidak Aktif" },
];

// data pengurutan agar tidak selalu menulis
export const sortOptionsFilter = [
  { value: "name", label: "Nama" },
  { value: "email", label: "Email" },
  { value: "age", label: "Umur" },
];

// data pengurutan status agar tidak selalu menulis
export const statusOptionsFilter = [
  { value: "", label: "Semua" },
  { value: "active", label: "Aktif" },
  { value: "inactive", label: "Tidak Aktif" },
];

// data untuk user kolom
export const userColumns = [
  { Header: "Nama", accessor: "name" },
  { Header: "Email", accessor: "email" },
  { Header: "Age", accessor: "age" },
  { Header: "Status", accessor: "status" },
];

// data untuk user dari api
export const githubColumns = [
  { Header: "Login", accessor: "login" },
  { Header: "ID", accessor: "id" },
];
