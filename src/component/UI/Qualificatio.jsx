import React from "react";

const Qualificatio = () => {
  return (
    <section id="qualification">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h1 
          data-aos ="fade-down"
          data-aos-duration = "1000"
          data-aos-delay = "300"
          className="text-headingColor font-[800] text-[3rem] mb-5 border-b border-solid border-smallTextColor">
            Education{" "}
          </h1>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex items-center mt-5 flex-col">
            
            <h3 className="text-smallTextColor text-[1.5rem] font-[500] mt-5">
              Master Of Computer Applications
            </h3>
            <p>
              <ul>
                <li>University Institute of Technology</li>
                
                <li>
                  <span className="text-[1rem]">Jul/2022 - June/2024</span>
                </li>
              </ul>
            </p>
            <h3 className="text-smallTextColor text-[1.5rem] font-[500] mt-5">
              Bachelors Of Computer Application
            </h3>
            <p>
              <ul>
                <li>Barkatullah University Bhopal</li>
                
                <li>
                  <span className="text-[1rem]">july/2018 - June/2021</span>
                </li>
              </ul>
            </p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Qualificatio;
