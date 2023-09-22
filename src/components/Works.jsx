import React, {useState} from "react";
// import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import webdev from "../assets/webdev.png"
import codeedit from "../assets/codeedit.svg"
import das from "../assets/das.svg"
import { styles } from "../styles";
// import { github } from "../assets";
import { StarsCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { web } from "../../../project_3D_developer_portfolio/src/assets";
import { TitleText } from "./CustomTexts";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [active, setActive] = useState(false);

  const handleMouseOver = () => {
    setActive(true);
  };

  const handleMouseOut = () => {
    setActive(false);
  };
  return (
    <motion.div onMouseOver={handleMouseOver}
    onMouseOut ={handleMouseOut} variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        
        className={active? "gradient-01 p-5 rounded-2xl sm:w-[360px] w-full": "bg-gray-gradient p-5 rounded-2xl sm:w-[360px] w-full"}
        // className='bg-gray-gradient p-5 rounded-2xl sm:w-[360px] w-full'
      >
            <StarsCanvas/>

        <motion.div 
     whileHover={{scale: 1.25}}
     
        className='relative w-full h-full'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-contain rounded-2xl'
          />
        
          
        </motion.div>

        <div className='mt-5'>
        <TitleText title={<>{name}</>} textStyles={"text-gradient"} />

          {/* <h3 className='text-Black font-bold text-[24px]'>{name}</h3> */}
          <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-3 text-[18px] max-w-3xl leading-[30px]'>{description}</p>
        </div>

        {/* <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div> */}

      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* <motion.div variants={textVariant()}>
        
      </motion.div> */}
<TitleText title={<>Our Services</>} textStyles={"text-center mt-16"} />
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-3 text-[17px] mx-16 justify-center  text-center leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex justify-center flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default Works;
