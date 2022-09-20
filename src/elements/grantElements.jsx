export const grantElement = (grant) => {
  let element;
  if (grant?.link) {
    element = (
      <a
        className="ui"
        href={`${grant.link}`}
        title={`${grant?.by ?? ""}`}
        aria-label="link"
        target={"_blank"}
        rel="noreferrer"
        key={"test"}
      >
        {grant.by}
      </a>
    );
  } else {
    element = (
      <span key={"test"} className="ui">
        {grant.by}
      </span>
    );
  }

  return element;
};

export default grantElement;
