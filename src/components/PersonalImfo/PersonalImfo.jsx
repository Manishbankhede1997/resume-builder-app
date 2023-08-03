import * as React from "react";
import "./Personalimpfo.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";

export default function PersonalImfo() {
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
        <Paper>
          <Box className="AvtarBox">
            <Avatar src="/broken-image.jpg" />
            <div className="button">
              <Button variant="outlined">Set Profile </Button>
            </div>
          </Box>
          <Divider style={{ marginBottom: "10px" }} />
          <form className="Form">
            <div className="inputs">
              <TextField
                id="outlined-basic"
                label="First name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email Adress"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
              />
            </div>
            <div>
              <TextareaAutosize
                style={{ width: "50vw", padding: "10px 0px 0px 10px" }}
                aria-label="minimum height"
                minRows={3}
                placeholder="Write your address here"
              />
            </div>
            <div className="inputs">
              <TextField id="outlined-basic" label="City" variant="outlined" />
              <TextField id="outlined-basic" label="State" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="pincode"
                variant="outlined"
              />
            </div>
            <div>
              <TextareaAutosize
                style={{ width: "50vw", padding: "10px 0px 0px 10px" }}
                aria-label="minimum height"
                minRows={4}
                placeholder="Objective"
              />
            </div>
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
