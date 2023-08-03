import * as React from "react";
import "./Education.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Education() {
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
            <h1>Education</h1>
          </div>
          <Divider style={{ marginBottom: "10px" }} />
          <div>
            <h3>Education-1</h3>
          </div>
          <form className="Form">
            <div className="inputs">
              <TextField
                id="outlined-basic"
                label="Eduation Domain"
                variant="outlined"
              />
            </div>
            <div className="inputs">
              <TextField
                id="outlined-basic"
                label="University"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Degree"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Start Year"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="End Year"
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
