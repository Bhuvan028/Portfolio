import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={50} height={33} />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.hackerrank.com/profile/pb3668"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="HackerRank">
        <SiHackerrank />
        </a>
        <a
          href="https://www.linkedin.com/in/bhuvan028"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn">
        <FaLinkedin />
        </a>

        <a
          href="https://github.com/Bhuvan028"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub">
        <FaGithub />
        </a>

        <a
          href="https://leetcode.com/u/bhuvan__17/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode">
        <SiLeetcode />
        </a>

      </div>
    </nav>
  );
};

export default Navbar;
