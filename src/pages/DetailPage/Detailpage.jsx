import React from "react";
import "./Detailpage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import PersonalImfo from "../../components/PersonalImfo/PersonalImfo";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Education from "../../components/Education/Education";
import KeySkill from "../../components/KeySkill/KeySkill";
import Project from "../../components/Project/Project";
import Achievement from "../../components/Achievement/Achievement";
function Detailpage() {
  return (
    <div className="detailfilling">
      <Sidebar />
      {/* <PersonalImfo /> */}
      {/* <WorkExperience /> */}
      {/* <Education /> */}
      {/* <KeySkill /> */}
      {/* <Project /> */}
      <Achievement />
    </div>
  );
}

export default Detailpage;
