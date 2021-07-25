import "./styles.scss";
import { ReactComponent as GithubLogo } from "../../assets/github.svg";
import { ReactComponent as MailLogo } from "../../assets/mail.svg";
import { ReactComponent as TwitterLogo } from "../../assets/twitter.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/linkedin.svg";
import { ReactComponent as ResumeLogo } from "../../assets/resume.svg";

export const SocialMediaIcons = () => {
  return (
    <div className="social-media-icons">
      <GithubLogo />
      <MailLogo />
      <TwitterLogo />
      <LinkedInLogo />
      <ResumeLogo />
    </div>
  );
};
