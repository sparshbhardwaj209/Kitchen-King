// import { Outlet } from "react-router-dom";
import React from "react";
import Plogo from "../assets/Images/aboutPhoto.jpg";
import Profile from "./Profile";

import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-2 p-2 flex flex-col  md:flex-row ">
        <div className="md:w-1/2  p-3">
          <img
            className="h-[450px] rounded-2xl content-center mx-auto "
            src={Plogo}
            alt="Profile image"
          />
        </div>
        <div className="md:w-2/3 mx-auto p-6 ">
          <h4 className="font-semibold">
           <span className="font-extrabold text-xl">Hello!</span>, I'm <span className="text-2xl underline font-bold">Sparsh Bhardwaj</span>, an MCA student at YMCA JCBose UST.
            Coding is not just a part of my studies; it's a passion that fuels
            my enthusiasm. In my journey, I've cultivated a solid foundation in
            various technologies.
          </h4>
          <br />
          <h4 className="font-semibold">
            My proficiency spans HTML, CSS, JavaScript, Bootstrap, TailwindCSS,
            React, C, CPP, Java, and AWS services like EC2, IAM, S3, CloudWatch,
            Load Balancer, Auto Scaling, CloudFront, and Amazon RDS.
            Additionally, I'm well-versed in SQL, DBMS, and more.
          </h4>
          <br />
          <h4 className="font-semibold">
            During my spare time, I channel my passion into meaningful projects.
            One such project is "<span className="font-extrabold text-lg">DevSpace</span>," a social media site tailored for
            developers to connect and share knowledge through posts. This
            project reflects not only my technical skills but also my commitment
            to fostering a collaborative developer community.
          </h4>
          <br />
          <h4 className="font-semibold">
            I've also ventured into data-driven decision-making using Python. In
            my project on <span className="font-extrabold text-lg">Supermarket Sales Analysis and Forecasting</span>, I employed
            tools like NumPy, Pandas, Matplotlib, Seaborn, and ARIMA. This
            project showcases my analytical skills in handling and interpreting
            data to make informed decisions, a valuable asset for any team.
          </h4>
          <h4 className="font-semibold">
            You can explore more about my projects on my GitHub profile:&nbsp;
            <span className="font-light italic">
              <a target="_blank" href="https://github.com/sparshbhardwaj209"> here ↗️</a>
            </span>
            and learn more about me through my LinkTree:&nbsp;
            <span className="font-light italic">
              <a target="_blank" href="https://linktr.ee/SparshBhardwaj">here ↗️</a>
            </span>
          </h4>
        </div>
      </div>
    );
  }
}

export default About;

{
  /* <UserContext.Consumer>
            {({ user }) => (
              <h4 className="font-bold text-xl p-5">
                {user.name} - {user.email}
              </h4>
            )}
          </UserContext.Consumer> */
}
{
  /* <Profile /> */
}
