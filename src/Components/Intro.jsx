import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {Link} from 'react-router-dom'

const Intro = (props) => {
  return (
    <div className={"flex justify-between h-screen duration-300 "+  (props.darkMode ? 'bg-[#181818] text-white' : 'bg-white')}>
      <div className="left">
        <div className="social flex md:flex-col  gap-2 absolute bottom-10 left-15">
          <FaFacebookF className={"border-2 rounded-full w-6 h-6 p-1 cursor-pointer hover:text-[#ff5e00] hover:border-[#ff5e00] duration-250 " + (props.darkMode ? 'border-white' : 'border-black')} />
          <FaInstagram className={"border-2 rounded-full w-6 h-6 p-1 cursor-pointer hover:text-[#ff5e00] hover:border-[#ff5e00] duration-250 " + (props.darkMode ? 'border-white' : 'border-black')} />
          <FaTwitter className={"border-2 rounded-full w-6 h-6 p-1 cursor-pointer hover:text-[#ff5e00] hover:border-[#ff5e00] duration-250 " + (props.darkMode ? 'border-white' : 'border-black')} />
          <FaGithub className={"border-2 rounded-full w-6 h-6 p-1 cursor-pointer hover:text-[#ff5e00] hover:border-[#ff5e00] duration-250 " + (props.darkMode ? 'border-white' : 'border-black')} />
          <FaLinkedin className={"border-2 rounded-full w-6 h-6 p-1 cursor-pointer hover:text-[#ff5e00] hover:border-[#ff5e00] duration-250 " + (props.darkMode ? 'border-white' : 'border-black')} />
          <SiGmail className={"border-2 rounded-full w-6 h-6 p-1 cursor-pointer hover:text-[#ff5e00] hover:border-[#ff5e00] duration-250 " + (props.darkMode ? 'border-white' : 'border-black')}  />
        </div>
        <div className="info px-10 md:pl-30 flex flex-col gap-1 justify-center h-[90%]">
          <span className={"bg-gradient-to-r from-[#32F6F6] to-[#A6A79F] rounded-t-4xl rounded-br-3xl text-xl md:text-4xl font-[Pacifico] text-white w-fit px-5 py-3 shadow-2xl " + (props.darkMode ? 'shadow-[#363636]' : 'shadow-[#0000004d]')}>
            Hello!
          </span>
          <h3 className="text-2xl md:text-4xl font-[Varela Round] font-medium">
            I'm <span className={"underline " + (props.darkMode ? 'text-[#797979f1]' : 'text-[#363333f1]')}>Anish</span>
            <span
              className="inline-block z-[-1] relative animate-[wave_1.5s_infinite]"
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
          </h3>
          <p className="text-lg md:text-2xl font-light mt-2">
            UI/UX Designer, Front End Developer & Thinker.
          </p>
          <p className="text-2xl font-light mt-2">From India</p>
          <div className="info-actions mt-9 w-fit">
            <ul className="flex gap-4 text-xl font-[Varela Round]">
              <li
                className={"text-sm md:text-md w-fit cursor-pointer bg-linear-to-r bg-gradient-to-r from-[#DF580C] to-[#FD993D] hover:from-[#FD993D] hover:to-[#DF580C]  transition-colors duration-1000 rounded-2xl px-5 py-3 text-white font-[Varela Round] border-white border-2 shadow-2xl " + (props.darkMode ? 'shadow-[#363636]' : 'shadow-[#0000004d]')}
              ><Link to="/cv">Download CV</Link>
                
              </li>
              <li className={"text-sm md:text-md w-fit cursor-pointer bg-linear-to-r from-[#434343] to-[#181818] hover:from-[#181818] hover:to-[#434343] duration-1000 transition-colors px-5 py-3 text-white font-[Varela Round] border-white border-2 shadow-2xl rounded-2xl " + (props.darkMode ? 'shadow-[#363636]' : 'shadow-[#0000004d]')}>
                <Link to="/contact">Get in Touch!</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right w-fit m-auto hidden sm:block">
        <img src="./Images/Image.png" alt="Anish" className="w-100" />
      </div>
    </div>
  );
};

export default Intro;
