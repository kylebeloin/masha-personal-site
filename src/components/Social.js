import { Icon } from "semantic-ui-react";

export const Social = () => {
  return (
    <div>
      <a href={"mailto:masha.kostromitina@gmail.com"}>
        <Icon link circular name="mail" />
      </a>
      <a href={"https://twitter.com/mashakostromit2"}>
        <Icon link circular name="twitter" />
      </a>
    </div>
  );
};

export default Social;
