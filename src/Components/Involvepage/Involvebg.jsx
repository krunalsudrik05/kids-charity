import "./Involve.css";
import Involvecard from "./Involvecard";
import volunteer from "./images/volunteer.jpg";
import student from "./images/student.jpg";
import educator from "./images/educator.jpg";
const Involvebg = () => {
  return (
    <>
      <div className="involvetxt">
        <h2 className="p-4">GET INVOLVED</h2>
        <div className="row">
          <div className="col-lg-4">
            <Involvecard
              title={"VOLUNTEERING"}
              img={volunteer}
              info={
                "Volunteers play a vital role in supporting kids’ charity and educational projects. By giving their time and skills, they help make learning more accessible and joyful for underprivileged children."
              }
            />
          </div>
          <div className="col-lg-4">
            <Involvecard
              title={"STUDENTS"}
              img={student}
              info={
                "Students play a key role in driving change through kids’ charity and educational projects. By getting involved, they contribute to social good while developing leadership, empathy, and teamwork skills."
              }
            />
          </div>
          <div className="col-lg-4">
            <Involvecard
              title={"EDUCATORS"}
              img={educator}
              info={
                "Educators play a vital role in kids' charity and educational initiatives by bringing expertise, mentorship, and structure to learning-focused projects. Their involvement helps ensure that activities are engaging, inclusive, and impactful."
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Involvebg;
