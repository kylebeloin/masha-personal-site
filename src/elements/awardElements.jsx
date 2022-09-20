import { Header } from "semantic-ui-react";
export const awardElement = (award, i) => {
  let el;

  el = (
    <Header key={`award-container-${i}`} size="small">
      <Header.Subheader style={{ marginBottom: "0" }}>
        <p style={{ marginBottom: "0" }}>
          {award.by} <span className="year--emphasis">({award.year})</span>
        </p>
      </Header.Subheader>
      <Header
        as="a"
        key={`award-title-${i}`}
        size="tiny"
        className="disabled__link"
      >
        {award.name}
      </Header>
      <Header.Subheader>
        <p
          style={{
            marginBottom: "0",
            fontWeight: "100",
            opacity: 0.6,
          }}
        >
          {award.institution}
        </p>
        {award?.amount && (
          <p
            style={{
              marginBottom: "0",
              fontWeight: "100",
              opacity: 0.6,
            }}
          >
            {`$${award.amount}`}
          </p>
        )}
      </Header.Subheader>
    </Header>
  );
  return el;
};

export const grantInlineElement = (grant) => {
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
