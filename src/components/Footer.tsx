import Link from "next/link";
import {
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
  FaSquareFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-stone-900 text-white text-center p-4">
        <p>
          �� {new Date().getFullYear()} {""}
          Junaid Husain. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link
            className="hover:scale-125 transition-transform duration-300 text-xl"
            href="https://www.facebook.com/junaidhusain101"
          >
            <FaSquareFacebook />
          </Link>
          <Link
            className="hover:scale-125 transition-transform duration-300 text-xl"
            href="https://www.linkedin.com/in/junaid-husain-5147a315a/"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="hover:scale-125 transition-transform duration-300 text-xl"
            href="https://github.com/junaidhusain101"
          >
            <FaSquareGithub />
          </Link>
          <Link
            className="hover:scale-125 transition-transform duration-300 text-xl"
            href="https://twitter.com/junaidhusain101"
          >
            <FaSquareXTwitter />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Footer;
