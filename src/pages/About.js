import Page from "./Page";
export const About = () => {
  const title = "About Me";
  const content = (
    <>
      <p>
        Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo
        eget malesuada. Pellentesque in ipsum id orci porta dapibus. Vivamus
        magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nulla porttitor accumsan tincidunt. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet
        quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus suscipit
        tortor eget felis porttitor volutpat.
      </p>
      <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla
        quis lorem ut libero malesuada feugiat.
      </p>
    </>
  );
  return <Page {...{ title, content }} />;
};

export default About;
