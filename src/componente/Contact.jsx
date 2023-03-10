import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/81048ecf-476f-4a69-9687-612ed9e424a5"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email- Donnmoreno400@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2 "
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 "
          name="message"
          type="message"
          placeholder="Message"
          rows="10"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's collaborate
        </button>
        <div className="">
          <ul className=" flex justify-around my-6 ">
            <li className=" text-[#6fc2b0] hover:scale-125 ">
              <a href="https://mail.google.com/mail/u/2/?zx=16pgo9g2r02n#inbox">
                <HiOutlineMail size={30} />
              </a>
            </li>
            {/* <li
              className=" text-[#333333]
            hover:scale-125"
            >
              <a href="https://github.com/">
                <FaGithub size={30} />
              </a>
            </li> */}
            <li className=" text-blue-600 hover:scale-125">
              <a href="https://www.linkedin.com/in/fakhreddine-farik-119364134/">
                <FaLinkedin size={30} />
              </a>
            </li>
          </ul>
        </div>
      </form>
    </div>
  );
}

export default Contact;
