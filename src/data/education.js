import { Header } from "semantic-ui-react";

export const education = [
  {
    level: "Ph.D.",
    graduated: "2023 Expected",
    area: "Applied Linguistics",
    school: "Northern Arizona University",
    country: "United States",
  },
  {
    level: "M.A.",
    graduated: "2018",
    area: "Teaching English as a Second Language (TESL)",
    school: "Northern Arizona University",
    country: "United States",
  },
  {
    level: "B.A.",
    graduated: "2012",
    area: "Teaching of English and German",
    school: "Penza State Pedagogical University",
    country: "Russia",
  },
];

export const educationElement = (education, i) => {
  let el;

  el = (
    <Header key={`education-container-${i}`} size="small">
      <Header.Subheader style={{ marginBottom: "0" }}>
        <p
          style={{
            marginBottom: "0",
          }}
        >
          {education.school}{" "}
          <span className="year--emphasis">({education.graduated})</span>
        </p>
      </Header.Subheader>
      <Header
        as="a"
        key={`education-title-${i}`}
        size="tiny"
        className="disabled__link"
      >
        {education.level} in {education.area}
      </Header>
      <Header.Subheader>
        <p
          style={{
            marginBottom: "0",
            fontWeight: "100",
            opacity: 0.6,
          }}
        >
          {education.country}
        </p>
      </Header.Subheader>
    </Header>
  );
  return el;
};

export const educationElements = () => {
  return education.map((education, i) => {
    return educationElement(education, i);
  });
};

export default education;
