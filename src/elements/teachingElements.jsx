import { Header } from "semantic-ui-react";
// TODO - add a link to the teaching

export const teachingElement = (teaching, i) => {
  let el;

  el = (
    <Header key={`teaching-container-${i}`} size="small">
      {teaching.subject && (
        <Header.Subheader>
          <p style={{ marginBottom: "0" }}>
            {`${teaching.subject}: ${teaching.number}`}
            {/* <span className="year--emphasis">({teaching.year})</span> */}
          </p>
        </Header.Subheader>
      )}
      <Header
        style={{ marginTop: "0", marginBottom: "0" }}
        key={`teaching-title-${i}`}
        size="tiny"
      >
        {teaching.title}
      </Header>
      <Header.Subheader
        key={`teaching-sections-${i}`}
        style={{ marginBottom: "1rem" }}
      >
        <p style={{ marginBottom: "0" }}>
          {teaching.level !== "Language Schools" ? (
            teaching.sections.map((section, j) => (
              <span key={`teaching-${i}-${j}`}>
                {`${section.semester} ${section.year}`}
                {section.mode && ` (${section.mode})`}

                {`${j === teaching.sections.length - 1 ? "" : ", "}`}
              </span>
            ))
          ) : (
            <span>
              {Math.min(
                ...teaching.sections.map((s) => {
                  return s.year;
                })
              )}
              {" - "}
              {Math.max(
                ...teaching.sections.map((s) => {
                  return s.year;
                })
              )}
            </span>
          )}
        </p>
      </Header.Subheader>
      <Header.Subheader key={`teaching-location-${i}`}></Header.Subheader>
    </Header>
  );
  return el;
};

export default teachingElement;
