import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CommentCard from "./components/CommentCard";
import ReplyCard from "./components/ReplyCard";

function App() {
  return (
    <Box
      flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{ backgroundColor: "var(--color-neutral-200)" }}
    >
      <Grid container className="App" p={2} spacing={2}>
        <Grid item xs={12} p={0}>
          <CommentCard />
        </Grid>
        <Grid item xs={12}>
          <ReplyCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
