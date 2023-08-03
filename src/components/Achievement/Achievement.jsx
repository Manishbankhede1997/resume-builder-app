import * as React from "react";
import "./Achievement.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Achievement() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "end",
          "& > :not(style)": {
            marginTop: "40px",
            padding: " 0px 10px 10px",
            height: "auto",
          },
        }}
      >
        <Paper className="Paper">
          <div>
            <h1>Achievement</h1>
          </div>
          <Divider style={{ marginBottom: "10px" }} />
          <div>
            <h3>Achievement-1</h3>
          </div>
          <form className="Form">
            <div className="inputs">
              <TextField
                id="outlined-basic"
                label="Achievement-1"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Achievement-2"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Achievement-3"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Achievement-4"
                variant="outlined"
              />
            </div>

            <button className="Addbutton">Add New</button>

            <div className="nxtButton">
              <div>
                <Button
                  variant="outlined"
                  size="large"
                  style={{ padding: "7px 30px" }}
                >
                  Back
                </Button>
              </div>
              <div className="Next">
                <Button
                  variant="outlined"
                  size="large"
                  style={{ padding: "7px 30px" }}
                >
                  Next
                </Button>
              </div>
            </div>
          </form>
        </Paper>
      </Box>
    </>
  );
}
