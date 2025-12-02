// components/SocialIcons.js
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 justify-start mt-5">
      <a
        className="hover:text-neutral-500"
        href="https://x.com/sleepycat171036"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={24} />
      </a>
      <a
        className="hover:text-neutral-500"
        href="https://www.linkedin.com/in/tomoyo-hirayama-6587a1391/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
