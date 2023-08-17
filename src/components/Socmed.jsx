import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const Socmed = () => {
  return (
    <>
      <p className="underline font-bold text-xl mb-2">Social Media</p>

      {/* socmeds */}
      <div className="box-center gap-x-4 mb-4">
        {aSocmeds.map((oSocmed, nIndex) => (
          <a
            key={`socmed-${nIndex}`}
            href={oSocmed.sLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <FaInstagram /> */}
            {oSocmed.rnIcon}
          </a>
        ))}
      </div>
    </>
  );
};

const aSocmeds = [
  {
    sLink: "https://instagram.com/anggakswr",
    rnIcon: <FaInstagram size={20} key="ig" />,
  },
  {
    sLink: "https://tiktok.com/@anggakswr",
    rnIcon: <FaTiktok size={20} key="tt" />,
  },
  {
    sLink: "https://youtube.com/@anggakswr",
    rnIcon: <FaYoutube size={20} key="uy" />,
  },
  {
    sLink: "https://linkedin.com/in/anggakswr",
    rnIcon: <FaLinkedin size={20} key="li" />,
  },
  {
    sLink: "https://github.com/anggakswr",
    rnIcon: <FaGithub size={20} key="gh" />,
  },
];

export default Socmed;
