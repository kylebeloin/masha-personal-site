import Page from "./Page";
export const Dissertation = () => {
  const title = "Dissertation Project";
  const content = (
    <>
      <p>Placeholder for a dissertation project.</p>
    </>
  );
  return <Page {...{ title, content }} />;
};

export default Dissertation;
