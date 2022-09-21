import { Header } from "semantic-ui-react";
// TODO - add a link to the presentation
export const presentationElement = (presentation, i) => {
  let el;

  el = (
    <Header
      as={"article"}
      key={`presentation-container-${i}`}
      size="small"
      style={{ marginBottom: "1rem" }}
    >
      <Header.Subheader>
        <p style={{ marginBottom: "0" }}>
          {presentation.conference}{" "}
          <span className="year--emphasis">({presentation.year})</span>
        </p>
      </Header.Subheader>
      <Header
        key={`presentation-title-${i}`}
        size="tiny"
        className={`presentation__link ${
          !presentation.link ? "disabled__link" : ""
        }`}
        as={presentation.link ? "a" : "span"}
        href={presentation.link ? presentation.link : ""}
        target={"_blank"}
        onClick={presentation.link ? null : (event) => event.preventDefault()}
      >
        {presentation.title.primary}
        {presentation.title.secondary !== "" &&
          `: ${presentation.title.secondary}`}
      </Header>
      <Header.Subheader key={`presentation-location-${i}`}>
        {presentation["with"].length !== 0 && (
          <p style={{ marginBottom: "0" }}>
            {"Presented with "}
            {`${presentation["with"].reduce((prev, curr, i) => {
              return i === 0 ? curr : prev + ", " + curr;
            }, "")}`}{" "}
          </p>
        )}

        <p style={{ marginBottom: "0" }}>{presentation.location}</p>
      </Header.Subheader>
    </Header>
  );
  return el;
};

export default presentationElement;
