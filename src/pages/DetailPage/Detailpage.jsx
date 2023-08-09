import React from "react";
import "./Detailpage.css";
import Sidebar from "../../components/Grid/Grid";
import { useState } from "react";
import PersonalImfo from "../../components/PersonalImfo/PersonalImfo";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import Education from "../../components/Education/Education";
import KeySkill from "../../components/KeySkill/KeySkill";
import Project from "../../components/Project/Project";
import Achievement from "../../components/Achievement/Achievement";
import Template1 from "../../Templates/Template1/Template1";
import Template2 from "../../Templates/Template2/Template2";
import Template3 from "../../Templates/Template3/Template3";
import { useSelector } from "react-redux";
function Detailpage() {
  const [personalImfo, setPersonalImfo] = useState({});
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);
  const [keySkill, setKeySkill] = useState([]);
  const [project, setProject] = useState([]);
  const [achievement, setAchievement] = useState([]);
  const [click, setClick] = useState(0);
  console.log("myinformation", personalImfo);
  const temp = useSelector((state) => state.reducer.templeteId);
  console.log("recieve", temp);

  return (
    <>
      <div className="detailfilling">
        <div>
          <Sidebar click={click} setClick={setClick} />
        </div>
        {click === 0 ? (
          <PersonalImfo
            click={click}
            setClick={setClick}
            setPersonalImfo={setPersonalImfo}
          />
        ) : null}

        {click === 1 ? (
          <WorkExperience
            click={click}
            setClick={setClick}
            setWorkExperience={setWorkExperience}
          />
        ) : null}
        {click === 2 ? (
          <Education
            click={click}
            setClick={setClick}
            setEducation={setEducation}
          />
        ) : null}
        {click === 3 ? (
          <KeySkill
            click={click}
            setClick={setClick}
            setKeySkill={setKeySkill}
            keySkill={keySkill}
          />
        ) : null}
        {click === 4 ? (
          <Project
            click={click}
            setClick={setClick}
            setProject={setProject}
            project={project}
          />
        ) : null}
        {click === 5 ? (
          <Achievement
            click={click}
            setClick={setClick}
            setAchievement={setAchievement}
          />
        ) : null}
        {click === 6 ? (
          <>
            {temp === "template1" ? (
              <Template1
                personalImfo={personalImfo}
                workExperience={workExperience}
                education={education}
                keySkill={keySkill}
                project={project}
                achievement={achievement}
              />
            ) : null}
            {temp === "template2" ? (
              <Template2
                personalImfo={personalImfo}
                workExperience={workExperience}
                education={education}
                keySkill={keySkill}
                project={project}
                achievement={achievement}
              />
            ) : null}
            {temp === "template3" ? (
              <Template3
                personalImfo={personalImfo}
                workExperience={workExperience}
                education={education}
                keySkill={keySkill}
                project={project}
                achievement={achievement}
              />
            ) : null}
          </>
        ) : null}
      </div>
    </>
  );
}

export default Detailpage;
