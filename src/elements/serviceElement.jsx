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
