import { Box, Text, Wrapper, Button } from "./index";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigateLocal = () => navigate("");
  const handleNavigateApi = () => navigate("/github");

  return (
    <Wrapper>
      <Box>
        <nav className="flex justify-between items-center">
          <Text label="DATA NET" />
          <div className="flex flex-row gap-2">
            <Button
              label="Data lokal"
              onClick={() => handleNavigateLocal("")}
            />
            <Button label="Data API" onClick={() => handleNavigateApi()} />
          </div>
        </nav>
      </Box>
    </Wrapper>
  );
};

export default Navbar;
