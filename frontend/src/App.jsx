import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CommentCard from "./components/CommentCard";

function App() {
  return (
    <Box
      flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
    >
      <Grid container className="App" p={2}>
        <Grid item xs={12}>
          <CommentCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
