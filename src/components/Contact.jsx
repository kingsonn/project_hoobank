import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
// import { ComputersCanvas } from "./canvas";
// import axios from "axios";
import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
   
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            email: form.email,
        due: form.name,
        task: form.message
        })
    };
    fetch('https://prod-71.eastus.logic.azure.com:443/workflows/06afadc15b914169ac1955fd347b23e6/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Zd10pn0zDqmZamJJfGYiyAsxt-HdEgTUOIsRcCrA9DY', requestOptions)
        .then(response => {
            setLoading(false)
            alert("Thank you. I will get back to you as soon as possible.");
            setForm({
                        name: "",
                        email: "",
                        message: "",
                      });
        })
        .catch(error => {
        setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        });

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "JavaScript Mastery",
    //       from_email: form.email,
    //       to_email: "sujata@jsmastery.pro",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");

    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
  };

  return (
    <div
      className={`xl:mt-6 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-gray-gradient p-8  rounded-2xl'
      >
        <h2 className={"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full"}>
       Contact Us
      </h2>
        <p className={styles.sectionSubText}>Get in touch</p>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='oop text-white text-[20px] font-medium mb-4'>Your Name:</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-black text-black  rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='oop text-white font-medium text-[20px] mb-4'>Your email:</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='oop text-[20px] text-white font-medium mb-4'>Your Message:</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='How can we help you?'
              className='bg-tertiary py-4 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
          
            type='submit'
            className='py-3 px-10 font-poppins font-medium text-[20px] text-primary bg-blue-gradient rounded-[10px] outline-none w-fit'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <ComputersCanvas/>
      </motion.div> */}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
