// import * as React from "react";
// import "./Education.css";
// import Paper from "@mui/material/Paper";
// import { useState } from "react";
// import Box from "@mui/material/Box";
// import { Button, TextField } from "@mui/material";
// import Divider from "@mui/material/Divider";

// export default function Education(props) {
//   const [domain, setDomain] = useState("");
//   const [university, setUniversity] = useState("");
//   const [degree, setDegree] = useState("");
//   const [startyear, setStartYear] = useState("");
//   const [lastYear, setLastYear] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.setEducation({
//       domain,
//       university,
//       degree,
//       startyear,
//       lastYear,
//     });
//     props.setClick(props.click + 1);
//   };
//   const handleBack = (e) => {
//     e.preventDefault();
//     props.setClick(props.click - 1);
//   };

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "end",
//           "& > :not(style)": {
//             marginTop: "40px",
//             padding: " 0px 10px 10px",
//             height: "auto",
//           },
//         }}
//       >
//         <Paper className="Paper">
//           <div>
//             <h1>Education</h1>
//           </div>
//           <Divider style={{ marginBottom: "10px" }} />
//           <div>
//             <h3>Education-1</h3>
//           </div>
//           <form className="Form">
//             <div className="inputs">
//               <TextField
//                 id="outlined-basic"
//                 label="Eduation Domain"
//                 variant="outlined"
//                 value={domain}
//                 onChange={(e) => setDomain(e.target.value)}
//               />
//             </div>
//             <div className="inputs">
//               <TextField
//                 id="outlined-basic"
//                 label="University"
//                 variant="outlined"
//                 value={university}
//                 onChange={(e) => setUniversity(e.target.value)}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Degree"
//                 variant="outlined"
//                 value={degree}
//                 onChange={(e) => setDegree(e.target.value)}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="Start Year"
//                 variant="outlined"
//                 value={startyear}
//                 onChange={(e) => setStartYear(e.target.value)}
//               />
//               <TextField
//                 id="outlined-basic"
//                 label="End Year"
//                 variant="outlined"
//                 value={lastYear}
//                 onChange={(e) => setLastYear(e.target.value)}
//               />
//             </div>

//             <button className="Addbutton">Add New</button>

//             <div className="nxtButton">
//               <div>
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   style={{ padding: "7px 30px" }}
//                   onClick={handleBack}
//                 >
//                   Back
//                 </Button>
//               </div>
//               <div className="Next">
//                 <Button
//                   variant="outlined"
//                   size="large"
//                   style={{ padding: "7px 30px" }}
//                   onClick={handleSubmit}
//                 >
//                   Next
//                 </Button>
//               </div>
//             </div>
//           </form>
//         </Paper>
//       </Box>
//     </>
//   );
// }
import * as React from "react";
import "./Education.css";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import Box from "@mui/material/Box";
import { Button, TextField } from "@mui/material";
import Divider from "@mui/material/Divider";

export default function Education(props) {
  const [educationList, setEducationList] = useState([
    {
      id: Date.now(),
      domain: "",
      university: "",
      degree: "",
      startyear: "",
      lastYear: "",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setEducation([...educationList]);
    props.setClick(props.click + 1);
  };

  const handleBack = (e) => {
    e.preventDefault();
    props.setClick(props.click - 1);
  };

  const handleAddNew = (e) => {
    e.preventDefault();
    setEducationList([
      ...educationList,
      {
        id: Date.now(),
        domain: "",
        university: "",
        degree: "",
        startyear: "",
        lastYear: "",
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    setEducationList((prevState) =>
      prevState.map((education, i) =>
        i === index ? { ...education, [field]: value } : education
      )
    );
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
            <h1>Education</h1>
          </div>
          <Divider style={{ marginBottom: "10px" }} />

          {educationList.map((education, index) => (
            <div key={education.id}>
              <h3>Education-{index + 1}</h3>
              <form className="Form">
                <div className="inputs">
                  <TextField
                    id="outlined-basic"
                    label="Education Domain"
                    variant="outlined"
                    value={education.domain}
                    onChange={(e) =>
                      handleChange(index, "domain", e.target.value)
                    }
                  />
                </div>
                <div className="inputs">
                  <TextField
                    id="outlined-basic"
                    label="University"
                    variant="outlined"
                    value={education.university}
                    onChange={(e) =>
                      handleChange(index, "university", e.target.value)
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Degree"
                    variant="outlined"
                    value={education.degree}
                    onChange={(e) =>
                      handleChange(index, "degree", e.target.value)
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="Start Year"
                    variant="outlined"
                    value={education.startyear}
                    onChange={(e) =>
                      handleChange(index, "startyear", e.target.value)
                    }
                  />
                  <TextField
                    id="outlined-basic"
                    label="End Year"
                    variant="outlined"
                    value={education.lastYear}
                    onChange={(e) =>
                      handleChange(index, "lastYear", e.target.value)
                    }
                  />
                </div>
              </form>
            </div>
          ))}

          <button className="Addbutton" onClick={handleAddNew}>
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
