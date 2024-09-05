import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGoogle,
  faSlack,
  faGithub,
  faYoutube,
  faLinkedinIn,
  faSpotify,
  faRedditAlien,
} from "@fortawesome/free-brands-svg-icons";

export const icons = [
  {
    id: 1,
    icon: (
      <FontAwesomeIcon
        icon={faGoogle}
        color="#7F5CFF"
        style={{ height: "24px" }}
      />
    ),
    text: "Google",
  },
  {
    id: 2,
    icon: (
      <FontAwesomeIcon
        icon={faYoutube}
        color="#7F5CFF"
        style={{ height: "24px" }}
      />
    ),
    text: "Youtube",
  },
  {
    id: 3,
    icon: (
      <FontAwesomeIcon
        icon={faTwitter}
        color="#7F5CFF"
        style={{ height: "24px" }}
      />
    ),
    text: "Twitter",
  },
  {
    id: 4,
    icon: (
      <FontAwesomeIcon
        icon={faSpotify}
        color="#7F5CFF"
        style={{ height: "24px" }}
      />
    ),
    text: "Spotify",
  },
  {
    id: 5,
    icon: (
      <FontAwesomeIcon
        icon={faRedditAlien}
        color="#7F5CFF"
        style={{ height: "24px" }}
      />
    ),
    text: "Reddit",
  },
  {
    id: 6,
    icon: (
      <FontAwesomeIcon
        icon={faSlack}
        color="#7F5CFF"
        style={{ height: "24px" }}
      />
    ),
    text: "Slack",
  },
  {
    id: 7,
    icon: (
      <FontAwesomeIcon
        icon={faGithub}
        color="#7F5CFF"
        style={{ height: "24px" }}
      />
    ),
    text: "Github",
  },
  {
    id: 8,
    icon: (
      <FontAwesomeIcon
        icon={faLinkedinIn}
        color="#7F5CFF"
        style={{ height: "24px" }}
      />
    ),
    text: "Linkedin",
  },
];
