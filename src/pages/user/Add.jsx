import { Wrapper, Box, Text, Button, Input, Option } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/features/user/user";
import { statusOptions } from "../../data";

const Add = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // initialState
  const [values, setValues] = useState({
    id: Date.now(),
    name: "",
    email: "",
    age: "",
    status: "active",
  });

  // handle change
  const handleChange = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setValues({ ...values, [name]: value });
  };

  // handle status
  const handleStatusChange = (e) => {
    const { value } = e.target;
    setValues((prevState) => ({ ...prevState, status: value }));
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, age, status } = values;
    if (!name || !email || !age || !status) {
      alert("Tidak boleh ada yang kosong ya!!!");
      return;
    }

    dispatch(addUser(values));
    alert("Berhasil menambah pengguna");
    navigate("/");
  };

  // handle navigate
  const handleNavigate = () => {
    navigate("/");
  };

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
          onClick={handleNavigate}
        />
        <Text label={"TAMBAH PENGGUNA"} />
      </Box>

      {/* form */}
      <Box style={"pb-12"}>
        <form onSubmit={handleSubmit}>
          {/* name */}
          <Input
            label="Nama Pengguna"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Masukkan nama pengguna"
          />

          {/* email */}
          <Input
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            label={"Email"}
            type={"email"}
            required
          />

          {/* age */}
          <Input
            label="Umur"
            id="age"
            name="age"
            type="number"
            value={values.age}
            onChange={handleChange}
            placeholder="Masukkan umur"
          />

          {/* status */}
          <Option
            label="Masukan status"
            value={values.status}
            onChange={handleStatusChange}
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

export default Add;
