import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { Box } from "@mui/material";

const Uniqueitem = () => {
  const { query: { id } } = useRouter()

  return (
    <Layout>
      <Box>
        {id}
      </Box>
    </Layout>
  );
}

export default Uniqueitem;