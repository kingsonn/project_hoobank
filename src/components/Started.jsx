
import { motion } from 'framer-motion';
import gts from "../assets/get-started.png"
import devweb from "../assets/devweb.png"
import {styles} from '../styles';
import { startingFeatures } from '../constants';
import {TitleText, TypingText } from './CustomTexts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
const StartSteps = ({ number, text }) => (
  <>
  <motion.div whileHover={{scale: 1.05}} className={`${styles.flexCenter} p-1 feat-card hidden sm:flex bg-gray-gradient flex-row rounded-[16px]`}>
    <div
      className={`${styles.flexCenter} ml-2 w-[35px] h-[35px] rounded-[10px] bg-[#0cb2c7]`}
    >
      <span className="font-bold text-[16px] text-black">
        {number}
      </span>
    </div>
    <p className="flex-1  ml-[15px] mt-2 mb-2 oops feat-card font-poppins mr-2 text-[18px]  ">
      {text}
    </p>
  </motion.div>
  <motion.div whileHover={{scale: 1.05}} className={`${styles.flexCenter} p-1 bg-gray-gradient yolo sm:hidden flex-row feat-card rounded-[16px]`}>
    <div
      className={`${styles.flexCenter} ml-2 w-[35px] h-[35px] rounded-[10px] bg-[#0cb2c7]`}
    >
      <span className="font-bold text-[16px] text-black">
        {number}
      </span>
    </div>
    <p className="flex-1  ml-[15px] mt-2 mb-2 oops feat-card font-normal mr-2 text-[18px]  ">
      {text}
    </p>
  </motion.div>
  </>
);

const Started = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants('left')}
        className={`flex-1 ${styles.flexCenter} `}
      >
        <img
          src={devweb}
          alt="get-started"
          className=" w-[90%] h-auto object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        {/* <TitleText title={<>Owning a portfolio website</>} /> */}
        <h2 className={"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full"}>
       Why own a portfolio website?
      </h2>
        <div className="mt-[31px] flex flex-col gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={`${index < 10 ? '0' : ''} ${index + 1}`}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Started;
