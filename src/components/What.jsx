import { motion } from 'framer-motion';
import { TypingText } from '../components';

import {styles} from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const What = () => (
  <section className={`${styles.paddings} mb-24 mt-20 relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| What's a portfolio website |" textStyles="text-[30px] mb-3 font-Georgia text-center text-white" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-white"
      >
        {/* <span className="font-extrabold text-white">Metaverse</span> is a new
        thing in the future, where you can enjoy the virtual world by feeling
        like it's really real, you can feel what you feel in this metaverse
        world, because this is really the{' '}
        <span className="font-extrabold text-white">
          madness of the metaverse
        </span>{' '}
        of today, using only{' '}
        <span className="font-extrabold text-white">VR</span> devices you can
        easily explore the metaverse world you want, turn your dreams into
        reality. Let's{' '}
        <span className="font-extrabold text-white">explore</span> the madness
        of the metaverse by scrolling down */}
        Portfolio websites are crucial <span className="font-extrabold text-white">digital assets</span> for individuals and businesses. For individuals, they serve as <span className="font-extrabold text-white">online resumes</span>, <span className="font-extrabold text-white">showcasing skills</span> and <span className="font-extrabold text-white">work</span>. For businesses, they're powerful <span className="font-extrabold text-white">marketing tools</span>, <span className="font-extrabold text-white">displaying products</span>, <span className="font-extrabold text-white">services</span>, <span className="font-extrabold text-white">and successes</span>, <span className="font-extrabold text-white">attracting customers</span>, and engaging the audience. These sites create a <span className="font-extrabold text-white">professional online presence</span>, building credibility and fostering growth.
        Owning a portfolio website offers numerous benefits, especially for professionals and businesses in creative fields or those looking to showcase their work.
      </motion.p>

      {/* <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      /> */}
    </motion.div>
  </section>
);

export default What;
