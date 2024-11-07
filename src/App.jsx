import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AddUserPage, UpdateUserPage, UserPage, GithubPage } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserPage />} />
        <Route path="add" element={<AddUserPage />} />
        <Route path="edit/:id" element={<UpdateUserPage />} />
        <Route path="github" element={<GithubPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
