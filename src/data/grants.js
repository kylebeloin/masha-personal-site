import { Header } from "semantic-ui-react";
export const grants = [
  {
    year: "2022",
    name: "Doctoral Dissertation Grant",
    by: "The International Research Foundation for English Language Education (TIRF)",
    link: "https://www.tirfonline.org/doctoral-dissertation-grants/",
  },
  {
    year: "2022",
    name: "Research Grant",
    by: "Duolingo",
    link: "https://blog.duolingo.com/p/afdd21ae-2e18-4628-b5fe-d2c7ad484f89/",
  },
  {
    year: "2022",
    name: "Dissertation Grant",
    by: "Language Learning",
  },
  {
    year: "2021",
    name: "Support for Graduate Students",
    by: "Office of the Vice President for Research",
    institution: "Northern Arizona University",
  },
];

export const grantElement = (grant, i) => {
  let el;

  el = (
    <Header key={`grant-container-${i}`} size="small">
      <Header.Subheader style={{ marginBottom: "0" }}>
        <p style={{ marginBottom: "0" }}>
          {grant.by} <span className="year--emphasis">({grant.year})</span>
        </p>
      </Header.Subheader>
      <Header
        as="a"
        key={`grant-title-${i}`}
        size="tiny"
        className="disabled__link"
      >
        {grant.name}
      </Header>
      <Header.Subheader>
        <p
          style={{
            marginBottom: "0",
            fontWeight: "100",
            opacity: 0.6,
          }}
        >
          {grant.institution}
        </p>
      </Header.Subheader>
    </Header>
  );
  return el;
};

export default grants;
