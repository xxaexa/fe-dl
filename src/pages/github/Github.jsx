import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllGithubUsers } from "../../redux/features/githubUser/githubUser";
import { Text, Table, Box, Wrapper } from "../../components";
import { githubColumns } from "../../data";

const Github = () => {
  const dispatch = useDispatch();

  // state
  const {
    users: githubUsers,
    loading,
    error,
  } = useSelector((state) => state.github);

  // get users
  useEffect(() => {
    dispatch(fetchAllGithubUsers());
  }, [dispatch]);

  // handling loading
  if (loading)
    return (
      <Wrapper>
        <Text label={"Loading...."} />
      </Wrapper>
    );

  // handling error
  if (error)
    return (
      <Wrapper>
        <Text label={`Error: ${error}`} />
      </Wrapper>
    );

  return (
    <Wrapper>
      <Box>
        <Text label="Data Pengguna GitHub" />
        <Table columns={githubColumns} data={githubUsers} showButtons={false} />
      </Box>
    </Wrapper>
  );
};

export default Github;
