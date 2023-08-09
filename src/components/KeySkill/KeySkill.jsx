import * as React from "react";
import { useState } from "react";
import "./KeySkill.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function KeySkill(props) {
  const [skill, setSkill] = useState([{ id: 0, value: "" }]);
  const [count, setCount] = useState(1);
  const handleInput = (e) => {
    e.preventDefault();
    const lastField = skill[skill.length - 1];
    if (lastField.value !== "") {
      setSkill([...skill, { id: count, value: "" }]);
      setCount(count + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setKeySkill([...skill]);
    props.setClick(props.click + 1);
  };
  const handleBack = (e) => {
    e.preventDefault();
    props.setClick(props.click - 1);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          "& > :not(style)": {
            marginTop: "40px",
            padding: " 0px 10px 10px",
            height: "auto",
            width: "50vw",
          },
        }}
      >
        <Paper className="Paper">
          <div>
            <h1>Skills</h1>
          </div>
          <Divider style={{ marginBottom: "10px" }} />
          <div>
            <h3>Skills-1</h3>
          </div>
          <form className="Form">
            {skill.map((field) => (
              <TextField
                key={field.id}
                id="outlined-basic"
                label={`skill-${field.id}`}
                variant="outlined"
                value={field.value}
                onChange={(e) => {
                  const upadateField = skill.map((item) =>
                    item.id === field.id
                      ? { ...item, value: e.target.value }
                      : item
                  );
                  setSkill(upadateField);
                }}
              />
            ))}

            <button className="Addbutton" onClick={handleInput}>
              Add New
            </button>

            <div className="nxtButton">
              <div>
                <Button
                  variant="outlined"
                  size="large"
                  style={{ padding: "7px 30px" }}
                  onClick={handleBack}
                >
                  Back
                </Button>
              </div>
              <div className="Next">
                <Button
                  variant="outlined"
                  size="large"
                  style={{ padding: "7px 30px" }}
                  onClick={handleSubmit}
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
