// import { apple, bill, google } from "../assets";
// import styles, { layout } from "../style";
// import coro from "../assets/coro.png"
// import wom from "../assets/wom.png"
// import arrow from "../assets/arrow.svg"
// const Billing = () => (
//   <section id="product" className={layout.sectionReverse}>
//     <div className={layout.sectionImgReverse}>
//       <img src={arrow} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

//       {/* gradient start */}
//       <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
//       <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
//       {/* gradient end */}
//     </div>

//     <div className={layout.sectionInfo}>
//       <h2 className={styles.heading2}>
//         Easily control your <br className="sm:block hidden" /> billing &
//         invoicing
//       </h2>
//       <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
//         Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
//         aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
//         placerat.
//       </p>

//       <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
//         <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
//         <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
//       </div>
//     </div>
//   </section>
// );

// export default Billing;

import { motion } from 'framer-motion';
import gts from "../assets/get-started.png"
import arrow from "../assets/arrow.svg"
import {styles} from '../styles';
import { newFeatures } from '../constants';
import {TitleText, TypingText } from './CustomTexts';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { Billing } from '.';
const StartSteps = ({imgUrl, title, subtitle }) => (
  <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
    
  <div
    className={`${styles.flexCenter} bg-[#0cb2c7] w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
  >
    <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
  </div>
  <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
    {title}
  </h1>
  <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
    {subtitle}
  </p>
</div>
);

const Billings= () => (
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
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={arrow}
          alt="get-started"
          className="w-[100%] h-[100%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        {/* <TitleText title={<>Enhance your website</>} /> */}
        <h2 className={"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full"}>
        Enhance <span className='hidden md:inline'>and customize</span>  your <span className='hidden md:inline'>existing</span>  website 
      </h2>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <StartSteps key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Billings;
