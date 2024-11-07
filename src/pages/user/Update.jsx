import { Wrapper, Box, Text, Button, Input, Option } from "../../components";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { filterById, updateUser } from "../../redux/features/user/user";
import { statusOptions } from "../../data";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(filterById(parseInt(id)));
    }
  }, [id, dispatch]);

  const filteredUsers = useSelector((state) => state.users.filteredUsers);

  // initialState
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
    age: "",
    status: "active",
  });

  // updating data
  useEffect(() => {
    if (filteredUsers.length > 0) {
      const user = filteredUsers[0];
      setValues({
        id: user.id,
        name: user.name,
        email: user.email,
        age: user.age,
        status: user.status,
      });
    }
  }, [filteredUsers]);

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // handle status change
  const handleStatusChange = (e) => {
    const { value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      status: value,
    }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, age, status } = values;

    if (!name || !email || !age || !status) {
      alert("Tidak boleh ada yang kosong ya!!!");
      return;
    }

    dispatch(updateUser(values));
    alert("Berhasil mengubah pengguna");
    navigate("/");
  };

  // handling loading
  if (!filteredUsers.length) {
    return <div>Loading...</div>;
  }

  // default user
  const user = filteredUsers[0];

  return (
    <Wrapper>
      {/* header */}
      <Box style={"flex items-center gap-4"}>
        <img
          src="/src/assets/arrow-left.svg"
          alt="Back Icon"
          width={30}
          height={30}
          className="cursor-pointer"
          onClick={() => navigate("/")}
        />
        <Text label={"UBAH PENGGUNA"} />
      </Box>

      {/* form */}
      <Box style={"pb-12"}>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <Input
            label="Nama"
            id="name"
            name="name"
            value={values.name || user.name}
            onChange={handleChange}
            placeholder="Masukkan nama "
          />

          {/* email */}
          <Input
            label="Email"
            id="email"
            name="email"
            value={values.email || user.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            type="email"
            required
          />

          {/* age */}
          <Input
            label="Umur"
            id="age"
            name="age"
            type="number"
            value={values.age || user.age}
            onChange={handleChange}
            placeholder="Masukkan umur"
          />

          {/* status */}
          <Option
            label="Masukkan status"
            value={values.status || user.status}
            onChange={handleStatusChange} // Custom handler for status change
            options={statusOptions}
          />

          <Button
            label={"SIMPAN"}
            style="z-50 fixed bottom-0 left-0 w-full md:static md:w-auto md:left-auto md:right-0 my-0 md:my-6"
            type="submit"
          />
        </form>
      </Box>
    </Wrapper>
  );
};

export default Update;
