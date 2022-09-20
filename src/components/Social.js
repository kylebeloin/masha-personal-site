import { Icon } from "semantic-ui-react";

export const Social = () => {
  return (
    <div className="mobile-centered">
      <a title="email" className={"social__link"} href={"mailto:masha@nau.edu"}>
        <Icon alt="email" link circular name="mail" />
      </a>
      <a
        className={"social__link"}
        href={"https://twitter.com/mashalinguist"}
        title="twitter"
      >
        <Icon alt="twitter" link circular name="twitter" />
      </a>
      <a
        title="LinkedIn"
        className={"social__link"}
        href={"https://linkedin.com/in/masha-kostromitina"}
      >
        <Icon link circular name="linkedin" />
      </a>
      {/* <a
        title="instagram"
        className={"social__link"}
        href={"https://www.instagram.com/mashie_mashie/"}
      >
        <Icon link circular name="instagram" />
      </a> */}
    </div>
  );
};

export default Social;
