import { Icon } from "semantic-ui-react";

export const Social = () => {
  return (
    <>
      <a className={"social__link"} href={"mailto:masha@nau.edu"}>
        <Icon link circular name="mail" />
      </a>
      <a
        className={"social__link"}
        href={"https://twitter.com/mashakostromit2"}
      >
        <Icon link circular name="twitter" />
      </a>
      <a
        className={"social__link"}
        href={"https://www.instagram.com/mashie_mashie/"}
      >
        <Icon link circular name="instagram" />
      </a>
    </>
  );
};

export default Social;
