import { Header } from "semantic-ui-react";

export const publications = [
  {
    title: {
      primary:
        '"His lack of a mask ruined everything." Restaurant customer satisfaction during the COVID-19 outbreak',
      secondary: "An analysis of Yelp review texts and star-ratings",
    },
    authors: ["Kostromitina, M.", "Keller, D.", "Cavusoglu, M.", "Beloin, K"],
    year: "2021",
    type: "journal",

    data: {
      title: "International Journal of Hospitality Management",
      volume: "98",
      number: "103048",
      page: "",
      link: "https://doi.org/10.1016/j.ijhm.2021.103048",
      keywords: [
        "Corpus linguistics",
        "Independent restaurants",
        "Keyword analysis",
        "Multiple correspondence analysis",
        "Online reviews",
        "Pandemic",
      ],
    },
  },
  {
    title: {
      primary:
        "The effects of ESL immersion and proficiency on learners' pronunciation development",
      secondary: "",
    },
    authors: ["Kostromitina, M.", "Kang, O."],
    year: "2021",
    type: "journal",
    data: {
      title: "Frontiers in Communication",
      volume: "6",
      number: "103048",
      page: "1-14",
      link: "https://doi.org/10.3389/fcomm.2021.636122",
      keywords: [
        "ESL immersion",
        "fluency",
        "functional load",
        "L2 proficiency",
        "L2 pronunciation",
      ],
    },
  },
  {
    title: {
      primary: "Elicited Imitation Tasks as a Measure of L2 Proficiency",
      secondary: "A Meta-Analysis",
    },
    authors: ["Kostromitina, M.", "Plonsky, L."],
    year: "2021",
    type: "journal",

    data: {
      title: "Studies in Second Language Acquisition",
      volume: "",
      number: "",
      page: "1-26",
      link: "https://doi.org/10.1017/S0272263121000395",
      keywords: [],
    },
  },
  {
    title: {
      primary: "Individual learner characteristics and pragmatic competence",
      secondary: "",
    },
    authors: ["Taguchi, N.", "Kostromitina, M.", "Wheeler, H."],
    year: "in press",
    type: "chapter",
    data: {
      title: "Individual learner characteristics and pragmatic competence",
      in: "The Routledge Handbook of Second Language Acquisition and Individual Differences",
      editors: ["S. Li", "P. Hiver", "M. Papi"],
      publisher: "Routledge",
      city: "",
    },
  },
  {
    title: {
      primary: "Characterizing non-chain restaurants' Yelp star-ratings",
      secondary:
        "Generalizable findings from a representative sample of Yelp reviews",
    },
    authors: ["Keller, D.", "Kostromitina, M."],
    year: "2020",
    type: "journal",
    data: {
      title: "International Journal of Hospitality Management",
      volume: "86",
      number: "102440",
      page: "",
      link: "https://doi.org/10.1016/j.ijhm.2019.102440",
      keywords: [
        "Restaurant success",
        "Review criteria",
        "Yelp star rating",
        "Determinants of satisfaction",
        "Multiple correspondence analysis",
        "Wait time",
        "Food quality",
      ],
    },
  },
];

export const publicationElement = (publication, i) => {
  let el;
  switch (publication?.type) {
    case "journal":
      el = (
        <Header key={`pub-container-${i}`} size="small">
          <Header
            key={`pub-title-${i}`}
            className={`publications__link ${
              !(publication.data.link !== "") && "disabled"
            }`}
            size="tiny"
            as={"a"}
            href={publication.data.link ? publication.data.link : ""}
            target={"_blank"}
            onClick={
              publication.data.link ? null : (event) => event.preventDefault()
            }
          >
            {publication.title.primary}
            {publication.title.secondary !== "" &&
              `: ${publication.title.secondary}`}
          </Header>

          <Header.Subheader>
            {publication.authors.reduce((prev, curr, i) => {
              return i === 0 ? curr : prev + ", " + curr;
            })}
            {<p>({publication.year})</p>}
          </Header.Subheader>
        </Header>
      );
      return el;

    case "chapter":
      el = (
        <Header key={`pub-container-${i}`} size="small">
          <Header
            key={`pub-title-${i}`}
            size="tiny"
            className={`publications__link ${
              !publication.data.link ? "disabled__link" : ""
            }`}
            as={"a"}
            href={publication.data.link ? publication.data.link : ""}
            target={"_blank"}
            onClick={
              publication.data.link ? null : (event) => event.preventDefault()
            }
          >
            {publication.title.primary}
            {publication.title.secondary !== "" &&
              `: ${publication.title.secondary}`}
          </Header>
          <Header.Subheader key={`pub-authors-${i}`}>
            {publication.authors.reduce((prev, curr, i) => {
              return i === 0 ? curr : prev + ", " + curr;
            })}
            {<p>({publication.year})</p>}
          </Header.Subheader>
        </Header>
      );
      return el;
    default:
      return null;
  }
};

export default publications;
