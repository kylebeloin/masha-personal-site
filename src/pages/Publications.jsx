import Page from "./Page";
import { publications, sortPublications } from "../data/publications";
import { publicationElement } from "../elements/publicationElements";
import { Divider, Header, Label, Search } from "semantic-ui-react";
import { groupBy } from "../utility";
import { useSearch } from "../components/useSearch";
import { useState, useEffect } from "react";

// TODO: Add filter and sort / search

const groupSortPublications = (data) => {
  let sortedPublications = [...data].sort(sortPublications);
  let groupedPublications = groupBy(sortedPublications, "type").map(
    (grouped, i) => {
      return {
        group: grouped.group,
        items: groupBy(grouped.items, "year", (group) => {
          return parseInt(group) ? "published" : group;
        }),
      };
    }
  );
  return groupedPublications;
};

const flattenSearchData = (pub) =>
  `${pub.data?.abstract?.props?.children ?? ""} ${
    pub.data?.keywords?.join(" ") ?? ""
  } ${pub.data?.description?.props?.children ?? ""} ${pub.title.primary} ${
    pub.title.secondary
  } ${pub.authors.join(" ")}`;

export const Publications = () => {
  const [pubs, setPublications] = useState(groupSortPublications(publications));
  const { loading, results, value, handleSearchChange } = useSearch({
    key: flattenSearchData,
    source: publications,
  });

  const title = "Publications";

  const content = (
    <div style={{ position: "relative" }}>
      <Search
        style={{
          display: "grid",
        }}
        open={false}
        loading={loading}
        placeholder={"Search..."}
        onSearchChange={handleSearchChange}
        value={value}
      />
      {pubs.map(({ group, items }, i) => {
        return (
          <section id={group} key={`${group}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3">{`${group}s`}</Header>
            </Divider>
            {items.map((inner, j) => {
              return (
                <div
                  key={`${inner.group}-${j}-div`}
                  id={`${group}-${inner.group.replace(" ", "-")}`}
                >
                  <Label color="red" ribbon>
                    {`${inner.group}`}
                  </Label>
                  {inner.items.map((publication, k) => {
                    return publicationElement(publication, k);
                  })}
                </div>
              );
            })}
          </section>
        );
      })}
    </div>
  );

  useEffect(() => {
    let pubs;
    if (results.length > 0) {
      pubs = groupSortPublications(results);
    } else {
      pubs = groupSortPublications(publications);
    }

    setPublications(pubs);
  }, [results]);

  return <Page {...{ title, content }} />;
};

export default Publications;
