import { Text, Button, Option, Box, Table } from "./../../components";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { deleteUser, filterAndSortUsers } from "../../redux/features/user/user";
import { statusOptionsFilter, userColumns } from "../../data";

const User = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // initialState filter
  const [filters, setFilters] = useState({
    status: "",
    sortCriteria: "name",
    sortOrder: "asc",
  });

  // state
  const users = useSelector((state) => state.users.users);
  const filteredUsers = useSelector((state) => state.users.filteredUsers);

  // updating data
  useEffect(() => {
    const { status, sortCriteria, sortOrder } = filters;
    dispatch(filterAndSortUsers({ status, sortBy: sortCriteria, sortOrder }));
  }, [filters, dispatch]);

  // handle status change
  const handleStatusChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      status: event.target.value,
    }));
  };

  // handle sorting
  const handleSortChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sortCriteria: event.target.value,
    }));
  };

  // handle asc desc
  const handleSortOrderChange = (event) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sortOrder: event.target.value,
    }));
  };

  // handle add, update and delete
  const handleAddUser = () => navigate("/add");
  const handleUpdate = (userId) => navigate(`/edit/${userId}`);
  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
    setFilters({
      status: "",
      sortCriteria: "name",
      sortOrder: "asc",
    });
  };

  // handle reset
  const handleResetFilters = () => {
    setFilters({
      status: "",
      sortCriteria: "name",
      sortOrder: "asc",
    });
  };

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-white relative">
      {/* header */}
      <Box style={"flex justify-between items-center"}>
        <Text label={"DATA NET"} />
        <Button
          label={"TAMBAH PENGGUNA"}
          style="z-50 fixed bottom-0 left-0 w-full md:static md:w-auto md:left-auto md:right-0"
          onClick={handleAddUser}
        />
      </Box>

      {/* filter */}
      <Box>
        <Option
          label="Urutkan Berdasarkan"
          value={filters.sortCriteria}
          onChange={handleSortChange}
          options={[
            { label: "Nama", value: "name" },
            { label: "Email", value: "email" },
            { label: "Status", value: "status" },
          ]}
        />
        <Option
          label="Status"
          value={filters.status}
          onChange={handleStatusChange}
          options={statusOptionsFilter}
        />
        <Option
          label="Urutan"
          value={filters.sortOrder}
          onChange={handleSortOrderChange}
          options={[
            { label: "Ascending", value: "asc" },
            { label: "Descending", value: "desc" },
          ]}
        />
        <Button
          label="Reset Filter"
          onClick={handleResetFilters}
          style="mt-4"
        />
      </Box>

      {/* Table */}
      <Box style={"overflow-x-auto pb-12"}>
        <Table
          columns={userColumns}
          data={filteredUsers.length > 0 ? filteredUsers : users}
          showButtons={true}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </Box>
    </div>
  );
};

export default User;
