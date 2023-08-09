import * as React from "react";
import "./Project.css";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Project(props) {
  const [count, setCount] = useState(1);
  const [project1, setProject1] = useState([{ id: 0, value: "" }]);

  const handleInput = (e) => {
    e.preventDefault();

    const lastField = project1[project1.length - 1];
    if (lastField.value !== "") {
      setProject1([...project1, { id: count, value: "" }]);
      setCount(count + 1);
    } else {
      alert("please first fill the box");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setProject([...project1]);
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
            <h1>Project</h1>
          </div>
          <Divider style={{ marginBottom: "10px" }} />
          <div>
            <h3>Project-1</h3>
          </div>
          <form className="Form">
            <div className="inputs">
              {project1.map((field) => (
                <TextField
                  key={field.id}
                  id="outlined-basic"
                  label={`project-${field.id}`}
                  variant="outlined"
                  value={field.value}
                  onChange={(e) => {
                    const upadateField = project1.map((item) =>
                      item.id === field.id
                        ? { ...item, value: e.target.value }
                        : item
                    );
                    setProject1(upadateField);
                  }}
                />
              ))}
            </div>

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
