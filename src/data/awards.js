import { Header } from "semantic-ui-react";
export const awards = [
  {
    year: "2022",
    name: "SGS Dissertation Award",
    by: "Graduate College",
    institution: "Northern Arizona University",
  },
  {
    year: "2020",
    name: "Gary Kenneth Buettner Scholarship & Patricia Mapes Andersen Scholarship",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
  },
  {
    year: "2019",
    name: "Gary Kenneth Buettner Scholarship & Patricia Mapes Andersen Scholarship",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
  },
  {
    year: "2017",
    name: "S.H. Shot Award",
    by: "English Department, College of Arts and Letters",
    institution: "Northern Arizona University",
  },
];

export const awardElement = (award, i) => {
  let el;

  el = (
    <Header key={`award-container-${i}`} size="small">
      <Header.Subheader style={{ marginBottom: "0" }}>
        <p style={{ marginBottom: "0" }}>
          {award.by} <span class="year--emphasis">({award.year})</span>
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
      </Header.Subheader>
    </Header>
  );
  return el;
};

export default awards;
