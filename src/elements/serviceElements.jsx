import { Header, Label } from "semantic-ui-react";
import { groupBy } from "../utility";

const defaultServiceElement = (service, i) => {
  let el = (
    <Header key={`service-container-${i}`} size="small">
      <Header.Subheader style={{ marginBottom: "0" }}>
        <p style={{ marginBottom: "0" }}>
          {service.role}{" "}
          {service.active && (
            <span className="year--emphasis">
              (
              {service.active.length > 1 && `${Math.min(...service.active)} - `}
              {Math.max(...service.active)})
            </span>
          )}
        </p>
      </Header.Subheader>
      <Header
        as="a"
        key={`service-title-${i}`}
        size="tiny"
        className="disabled__link"
      >
        {service.details}
      </Header>
      <Header.Subheader>
        <p
          style={{
            marginBottom: "0",
            fontWeight: "100",
            opacity: 0.6,
          }}
        >
          {service.organization}
        </p>
      </Header.Subheader>
    </Header>
  );
  return el;
};

const manuscriptReviewerElement = (service, i) => {
  let el;

  el = (
    <Header key={`service-container-${i}`} size="small">
      <Header
        as="article"
        key={`service-title-${i}`}
        size="tiny"
        className="disabled__link"
      >
        {service.details}
      </Header>
    </Header>
  );

  return el;
};

export const affiliationElements = (group) => {
  let elements = groupBy(
    group.items.map((affiliation, i) => ({
      ...affiliation,
      active: affiliation.active[0],
    })),
    "active",
    (group) => {
      return group ? "Present" : "Past";
    }
  ).map((a, j) => {
    return (
      <div key={`${a.group}-${j}-div`} id={`affiliation-${a}`}>
        <Label color="red" ribbon>
          {`${a.group}`}
        </Label>
        <Header
          as={"article"}
          key={`service-container-${j}`}
          size="small"
          className="service"
          style={{ marginTop: "0" }}
        >
          {a.items.map((affiliation, k) => {
            return (
              <Header
                as={affiliation.link ? "a" : "div"}
                key={`service-organization-${k}`}
                size="tiny"
                style={{
                  display: "inline-block",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
                className="service-organization link"
                href={affiliation.link}
              >
                {affiliation.organization}
              </Header>
            );
          })}
        </Header>
      </div>
    );
  });
  return elements;
};

export const serviceElement = (service, i, group) => {
  let el;

  switch (group) {
    case "Manuscript Reviewer":
      el = manuscriptReviewerElement(service, i);
      break;
    default:
      el = defaultServiceElement(service, i);
      break;
  }

  return el;
};
