import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Comment from "./components/Comment";
import AddCommentCard from "./components/AddCommentCard";

import DUMMY_DATA from "./data.json";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const { comments } = DUMMY_DATA;

  return (
    <Box
      flex
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{ backgroundColor: "var(--color-neutral-200)" }}
    >
      <Grid container className="App" p={2} spacing={2}>
        {comments.map((comment) => (
          <Grid item xs={12} key={comment.id}>
            <Comment {...comment} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <AddCommentCard />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
