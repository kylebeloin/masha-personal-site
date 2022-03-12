import Page from "./Page";

export const Home = () => {
  const title = "Home";
  const content = (
    <p>
      Thank you for visiting my website! If you would like to see my recent work, please check out my <a className="ui" href={"https://www.mariakostromitina.com/publications"}>
            Publications </a> page. You can also find my past and current research projects on the <a className="ui" href={"https://www.mariakostromitina.com/projects"}> Projects </a> page. You can visit the <a className="ui" href={"https://www.mariakostromitina.com/cv"}> CV </a> page to learn about my teaching experience as well as service and awards. 
          </a>
    </p>
  );

  return <Page {...{ title, content }} />;
};

export default Home;
