import { Header } from "semantic-ui-react";

export const service = [
  {
    year: "2021-present",
    role: "College of Arts and Letters Representative",
    organization: "Graduate Student Government",
    institution: "Northern Arizona University",
  },
  {
    year: "2020-present",
    role: "Event Planning Sub-Committee Member",
    organization: "Graduate Student Council",
    institution: "American Association of Applied Linguistics",
  },
  {
    year: "2020-2021",
    role: "President",
    organization: "Graduate Student Association of Applied Linguistics (GSAAL)",
    institution: "Northern Arizona University",
  },
  {
    year: "2017-2018",
    role: "Social Media Coordinator",
    organization: "Graduate English Organization (GEO)",
    institution: "Northern Arizona University",
  },
];

export const serviceElement = (service, i) => {
  let el;

  el = (
    <Header key={`service-container-${i}`} size="small">
      <Header.Subheader style={{ marginBottom: "0" }}>
        <p style={{ marginBottom: "0" }}>
          {service.organization}{" "}
          <span className="year--emphasis">({service.year})</span>
        </p>
      </Header.Subheader>
      <Header
        as="a"
        key={`service-title-${i}`}
        size="tiny"
        className="disabled__link"
      >
        {service.role}
      </Header>
      <Header.Subheader>
        <p
          style={{
            marginBottom: "0",
            fontWeight: "100",
            opacity: 0.6,
          }}
        >
          {service.institution}
        </p>
      </Header.Subheader>
    </Header>
  );
  return el;
};

export default service;
