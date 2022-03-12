import Page from "./Page";
export const About = () => {
  const title = "About Me";
  const content = (
    <>
      <p>
       I am a Ph.D. candidate in Applied Linguistics at Northern Arizona University. 
       My research interests lie at the intersection of second language prosody and pragmatics. 
       Specifically, I investigate the effectiveness of pragma–prosodic training in improving learners’ use of prosody in speech acts and the role of cognitive individual differences in prosody acquisition. 
       I have also been involved in research projects in the domains of speech perception, language assessment, and corpus linguistics. For more information about the past an current research projects I have been a part of, please visit the "Projects" page.
      </p>
      <p>
        Apart from my work in Applied Linguistics, I enjoy climbing and hiking. These hobbies are a given when you live in Flagstaff, AZ! Other interests of mine include learning languages (so far, I have tackled German, French, and Mandarin), cats, and traveling.
      </p>
    </>
  );
  return <Page {...{ title, content }} />;
};

export default About;
