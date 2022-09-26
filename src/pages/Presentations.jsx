import { presentations, sortPresentations } from "../data/presentations";
import { Page } from "./Page";
import { presentationElement } from "../elements/presentationElements";
import { groupBy } from "../utility";
import { Divider, Header, Label, Search } from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import useSearch from "../components/useSearch";

const groupSortPresentations = (data) => {
  let sortedPresentations = data.sort(sortPresentations);
  const groupedPresentations = groupBy(sortedPresentations, "type").map(
    (grouped, i) => {
      return {
        group: grouped.group,
        items: groupBy(grouped.items, "year"),
      };
    }
  );
  return groupedPresentations;
};

const flattenSearchData = (pres) =>
  `${pres.title.primary} ${pres.title.secondary} ${pres.with.join(" ")} ${
    pres.conference
  } ${pres.location}`;

export const Presentations = () => {
  const [pres, setPresentations] = useState(
    groupSortPresentations(presentations)
  );
  const { loading, results, value, handleSearchChange } = useSearch({
    key: flattenSearchData,
    source: presentations,
  });

  const title = "Presentations";
  const content = (
    <div style={{ position: "relative" }}>
      <div className={"search__container"} style={{ position: "relative" }}>
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
        <p style={{ position: "absolute", top: "25%", right: "2.67142857em" }}>
          {results.length > 0 && <span>{results.length} Results</span>}
        </p>
      </div>
      {pres.map((group, i) => {
        return (
          <section id={group.group} key={`${group.group}-${i}-div`}>
            <Divider horizontal section>
              <Header as="h3">{`${group.group}`}</Header>
            </Divider>

            {group.items.map((inner, j) => {
              return (
                <React.Fragment key={`${inner.group}-${j}-div`}>
                  <Label color="red" ribbon>
                    {`${inner.group}`}
                  </Label>
                  {inner.items.map((presentation, k) => {
                    return presentationElement(presentation, k);
                  })}
                </React.Fragment>
              );
            })}
          </section>
        );
      })}
    </div>
  );

  useEffect(() => {
    let newPresentations;
    if (results.length > 0) {
      newPresentations = groupSortPresentations(results);
    } else {
      newPresentations = groupSortPresentations(presentations);
    }

    setPresentations(newPresentations);
  }, [results]);

  return <Page {...{ title, content }} />;
};

export default Presentations;
