import { Image } from "semantic-ui-react";

export const projects = [
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title:
      "Equality, Diversity, and Inclusion: Different Varieties of Accents in Aptis English Listening Tests",
    // Primary text on card
    description: (
      <>
        The purpose of the project is to examine the impact of English accent
        varieties on test-takers' performance on Aptis listening tasks and the
        effect of shared-L1 background between the listener and speaker. In
        particular, the study investigates potential shared-L1 effect as well as
        the effect of unfamiliar, but widely encountered L2 English accents on
        listeners' test performance. In doing so, the project provides
        localization-related validity evidence of the listening tasks of the
        Aptis General test (Aptis hereinafter). Findings of the study will
        inform the development of the listening tasks on Aptis and provide a
        better understanding of the equality, diversity, and inclusion (EDI)
        issues related to the design and administration of the test.
      </>
    ),
    // Appears in grey at top of card
    role: "Co-Principal Investigator",
    principal: "Okim Kang & Maria Kostromitina",
    collaborators: "",
    funding: "British Council Assessment Grant 2022",
    className: "projects__card",
    img: (
      <Image
        size="medium"
        title="British Council Logo"
        floated="right"
        width="500"
        height="500"
        src={process.env.PUBLIC_URL + "/images/british-council-logo.png"}
        alt={"British Council Logo."}
        style={{ maxWidth: "35%", padding: "0.75rem", marginTop: "2rem" }}
      />
    ),
  },
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title:
      "Fairness of Using Different English Accents in Listening Tasks of the Duolingo English Test",
    // Primary text on card
    description: (
      <>
        {" "}
        The project explores the fairness of using different English accents in
        DET listening tasks by examining the impact of accent varieties on
        listeners' performances and the effect of the listener sharing the same
        English accent as the speaker. It further investigates how different
        task characteristics affect listeners' performances with varieties of
        English accents and listeners' attitudes towards the inclusion of
        accented English in the DET from the perspectives of test fairness. The
        findings of the project provide important guidance to promote the DET as
        a test of international English and to better understand fairness,
        equality, and practicality of designing and administering high-stakes
        English tests.
      </>
    ),
    // Appears in grey at top of card
    role: "Research Assistant",
    principal: "Okim Kang",
    collaborators: "Xun Yan, Ron Thomson, Talia Isaacs",
    funding: "Duolingo Research Grant 2021",
    className: "projects__card",
    img: (
      <Image
        size="medium"
        title="Duolingo Logo"
        verticalAlign="middle"
        floated="right"
        width="500"
        height="500"
        src={process.env.PUBLIC_URL + "/images/duolingo-logo.png"}
        alt={"Duolingo Logo."}
        style={{ maxWidth: "35%", padding: "1rem", marginTop: "2rem" }}
      />
    ),
  },
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title: "Raising Readers",
    // Primary text on card
    description: (
      <>
        The program I lead at the Literacy Center in Flagstaff serves K-2
        students (mostly ESL) who have been identified as underperforming
        readers as defined by school assessments. Volunteers involved in the
        program undergo targeted training and use a vetted currilculum (Heggerty
        Phonemic Awareness) to provide supplemental reading support. In order to
        monitor the learning progress, we conduct pre-, mid-, and
        post-intervention assessments aimed that measure students' phonemic
        awareness skills. <br />
        <br />
        <span style={{ textDecoration: "underline" }}>
          Click here to read a recent article about the program in the AZ Daily
          Sun.
        </span>
      </>
    ),
    // Appears in grey at top of card
    role: "Program Coordinator",
    link: "https://azdailysun.com/news/local/education/raising-readers-program-returns-to-flagstaff-unified-school-district/article_f1f00a3b-e6db-566f-b42e-d9fb401f4ddb.html",

    className: "projects__card",
    img: (
      <div style={{}}>
        <Image
          size="medium"
          verticalAlign="middle"
          title="The Literacy Center Logo"
          floated="right"
          width="500"
          height="375"
          src={process.env.PUBLIC_URL + "/images/tlc-logo.png"}
          alt={"British Council Logo."}
          style={{ maxWidth: "35%", padding: "0.75rem", marginTop: "1rem" }}
        />
      </div>
    ),
  },
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title:
      "Lexico-Grammatical and Acoustic Features of Transitional Language in Spoken Discourse",
    // Primary text on card
    description: (
      <>
        {" "}
        Using the BNC-S 2014 corpus of conversations, the study attempts to
        apply a corpus-driven method of keyword analysis, lexical bundle
        analysis, and accompanying analysis of suprasegmental speech features to
        identify the linguistic features that characterize the shifts in the
        communicative purpose in spoken discourse. The results of the study will
        help us understand how shifts in communicative purpose happen in
        conversations and what linguistic features the speakers use to
        accomplish such shifts.
      </>
    ),
    // Appears in grey at top of card
    role: "Co-principal Investigator",
    collaborators: "Daniel Keller",
    className: "projects__card",
  },
  {
    // If true, card animates on hover. Set an "href: [link]" property on this card to link.

    // Label at bottom of card (Header)
    title: "Listeners' Perceptions of Appropriateness in English Refusals",
    // Primary text on card
    description: (
      <>
        {" "}
        The project investigates the role of prosodic features of refusals
        produced by L1 and L2 English users in L1 and L2 English listeners
        appropriateness perceptions. Refusals produced by L1 English and L2
        English speakers from China are rated for appropriateness by listeners
        from different language backgrounds (L1 English, L2 English speakers
        from China, Spain, and India). In order to better capture the concept of
        appropriateness and how it is understood and used by the listeners, the
        study triangulates perception surveys and stimulated recalls with a
        focus group. The study results will demonstrate how appropriateness is
        operationalized by speakers of World Englishes, and what linguistic
        features play a role in appropriateness perceptions of speakers from
        Inner, Outer, and Expanding Circles of English. The study results will
        inform English teaching practices as well as the development of teaching
        materials that focus on learners` interactional success in global
        communication, espsecially in performing speech acts.
      </>
    ),
    // Appears in grey at top of card
    role: "Co-principal Investigator",
    collaborators: "Vito Miao",
    className: "projects__card",
  },
];

export default projects;
