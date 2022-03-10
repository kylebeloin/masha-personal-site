import Page from "./Page";

export const Home = () => {
  const title = "Home";
  const content = (
    <p>
      Proin eget tortor risus. Donec rutrum congue leo eget malesuada.
      Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia
      eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia
      eget consectetur sed, convallis at tellus.
    </p>
  );

  return <Page {...{ title, content }} />;
};

export default Home;
