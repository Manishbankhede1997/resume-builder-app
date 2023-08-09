import * as React from "react";
import "./WorkExperience.css";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function WorkExperience(props) {
  const [experience, setExperience] = useState([
    {
      id: Date.now(),
      jobtitle: "",
      organisation: "",
      startyear: "",
      lastYear: "",
    },
  ]);
  const handleAdd = (e) => {
    e.preventDefault();
    setExperience([
      ...experience,
      {
        id: Date.now(),
        jobtitle: "",
        organisation: "",
        startyear: "",
        lastYear: "",
      },
    ]);
  };
  const handleChange = (index, field, value) => {
    setExperience((prev) => {
      return prev.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      );
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setWorkExperience([...experience]);
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
            <h1>Work Experience</h1>
          </div>
          <Divider style={{ marginBottom: "10px" }} />
          {experience.map((exp, index) => (
            <div>
              <div>
                <h3>Experience-{index + 1}</h3>
              </div>
              <form className="Form">
                <div className="inputs">
                  <TextField
                    id="outlined-basic"
                    label="Job Tittle"
                    variant="outlined"
                    value={exp.jobtitle}
                    onChange={(e) =>
                      handleChange(index, "jobtitle", e.target.value)
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Organisation Name"
                    variant="outlined"
                    value={exp.organisation}
                    onChange={(e) =>
                      handleChange(index, "organisation", e.target.value)
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Start Year"
                    variant="outlined"
                    value={exp.startyear}
                    onChange={(e) =>
                      handleChange(index, "startyear", e.target.value)
                    }
                  />

                  <TextField
                    id="outlined-basic"
                    label="End Year"
                    variant="outlined"
                    value={exp.lastYear}
                    onChange={(e) =>
                      handleChange(index, "lastYear", e.target.value)
                    }
                  />
                </div>
              </form>
            </div>
          ))}

          <button className="Addbutton" onClick={handleAdd}>
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
        </Paper>
      </Box>
    </>
  );
}
