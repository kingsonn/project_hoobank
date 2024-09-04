import { motion } from 'framer-motion';
import { analytics } from '../constants';
import {TitleText, TypingText } from './CustomTexts';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';
import {styles} from '../styles';
import arrow2 from "../assets/arrow2.png"

const NewFeatures = ({ imgUrl, title, subtitle }) => (
  <>
  <motion.div whileHover={{scale: 1.05}} className="flex-1  flex flex-col  bg-gray-gradient yolo sm:hidden rounded-[20px] pt-0 p-3 min-w-[210px]">
    {/* <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div> */}
    <h1 className="font-poppins mt-[13px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[5px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </motion.div>
  <motion.div whileHover={{scale: 1.05}} className="flex-1  flex flex-col  bg-gray-gradient feat-card hidden sm:block rounded-[20px] pt-0 p-3 min-w-[210px]">
    {/* <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
    </div> */}
    <h1 className="font-poppins mt-[13px] font-bold text-[24px] leading-[30.24px] text-white">
      {title}
    </h1>
    <p className="flex-1 mt-[5px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {subtitle}
    </p>
  </motion.div>
  </>
);
const CardDeal = () => (
  <section className={`${styles.paddings}  pb-16  z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Whats new?" />
        {/* <TitleText title={<>What's new about Metaversus?</>} /> */}
        <h2 className={"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full"}>
        How does data analytics help? 
      </h2>
        <div className="mt-[20px] flex flex-wrap justify-between gap-[24px]">
          {analytics.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`px-0 mx-0 flex-1 ${styles.flexCenter}`}
      >
        <img
          src={arrow2}
          alt="get-started"
          className="w-[100%] mt-20 h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default CardDeal;
