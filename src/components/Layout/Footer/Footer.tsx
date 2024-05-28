import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";

export default function Footer() {
  return (
    <div className="h-[150px] w-screen z-[999] relative">
      <div className="content flex h-full w-full flex-col items-center justify-evenly">
        <div className="footer-links mt-4 flex w-3/5 flex-col items-center justify-evenly text-primary md:flex-row">
          <Link href="/">MODDE</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Size Guide</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms & Conditions</Link>
        </div>
        <div className="mb-4 flex sm:w-1/5 w-4/5 flex-row items-center justify-evenly text-primary">
          <Link href="/">
            <FontAwesomeIcon icon={faFacebook} color="#000" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faLinkedin} color="#000" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faYoutube} color="#000" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faInstagram} color="#000" />
          </Link>
        </div>
      </div>
    </div>
  );
}
