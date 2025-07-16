import { Helmet } from "react-helmet";
import { useState } from "react";
import "./adminproject.css";
import Aheader from "../Admincomponent/Aheader";
import Adminprojectcard from "../Admincomponent/Adminproject/Adminprojectcard";
import schoolkit from "../Admincomponent/Adminproject/images/schoolkit.jpg";
import bookdonate from "../Admincomponent/Adminproject/images/bookdonate.jpg";
import fwe from "../Admincomponent/Adminproject/images/fwe.jpg";
import digital from "../Admincomponent/Adminproject/images/digital.jpg";
import health from "../Admincomponent/Adminproject/images/hygin.jpg";
import toy from "../Admincomponent/Adminproject/images/toy.jpg";
import b2s from "../Admincomponent/Adminproject/images/B2S.jpg";
import plant from "../Admincomponent/Adminproject/images/plant.avif";
import Afooter from "../Admincomponent/Afooter";

const Adminproject = () => {
  const [projects] = useState([
    {
      img: schoolkit,
      title: "SCHOOL KIT DRIVE",
      info: "The School Kit Drive is a charitable initiative aimed at supporting underprivileged children by providing them with essential school supplies. The goal is to ensure that no child is held back from learning due to a lack of basic materials.",
    },
    {
      img: bookdonate,
      title: "BOOK DONATION CAMPAIGN",
      info: "The Book Donation Campaig was organized to promote literacy and a love for reading among underprivileged children. The aim was to collect and distribute books to those who have limited or no access to reading materials.",
    },
    {
      img: fwe,
      title: "FUN WITH EDUCATION",
      info: "Fun With Education was an interactive educational festival designed to make learning enjoyable and accessible for all children, especially those from underserved communities. The event combined fun activities with creative learning experiences to spark curiosity and build confidence.",
    },
    {
      img: digital,
      title: "DIGITAL ACCESS PROJECT",
      info: "The Digital Access Project was launched to help bridge the digital divide by providing devices and digital learning resources to children who lacked access to online education.",
    },
    {
      img: health,
      title: "HYGIENE & HEALTH WORKSHOP",
      info: "The Hygiene & Health Workshop was organized to educate children on the importance of personal hygiene, cleanliness, and basic health practices. The goal was to promote healthy habits and prevent common illnesses through awareness and hands-on learning.",
    },
    {
      img: toy,
      title: "TOY & PUZZLE DRIVE",
      info: "The Toy & Puzzle Drive was organized to support the emotional and cognitive development of underprivileged children by providing them with educational and recreational materials.",
    },
    {
      img: b2s,
      title: "BACK TO SCHOOL CAMPAIGN",
      info: "The Back to School Campaign was launched to support children who had dropped out or couldn’t afford to return to school. The campaign focused on removing barriers to education and encouraging continued learning for all.",
    },
    {
      img: plant,
      title: "GREEN CLASSROOM PROJECT",
      info: "The Green Classroom Project was an eco-friendly initiative aimed at creating a healthier, more sustainable learning environment for children while teaching the importance of environmental responsibility.",
    },
  ]);
  return (
    <>
      <Helmet>
        <title>AdminProject</title>
      </Helmet>
      <Aheader />
      <div className="apbg">
        <div className="projectsinfo">
          <div className="row row-cols-xl-2">
            {projects.map((proj, index) => (
              <div className="col-md-6" key={index}>
                <Adminprojectcard
                  img={proj.img}
                  title={proj.title}
                  info={proj.info}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Afooter />
    </>
  );
};

export default Adminproject;
