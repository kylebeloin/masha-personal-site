import { Container, Header } from "semantic-ui-react";

export const Page = (props) => {
  return (
    <>
      <Container fluid>
        <Header as="h3" className="header--bold mobile-centered">
          {props.title}
        </Header>
        <hr style={{ marginBottom: "2rem" }}></hr>

        {props.content}
      </Container>
    </>
  );
};

export default Page;
