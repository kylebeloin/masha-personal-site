import React from "react";

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function searchReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

export const useSearch = ({ source, key }) => {
  const [state, dispatch] = React.useReducer(searchReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();

  const handleSearchChange = React.useCallback(
    (e, data) => {
      clearTimeout(timeoutRef.current);
      dispatch({ type: "START_SEARCH", query: data.value });

      timeoutRef.current = setTimeout(() => {
        if (data.value.length === 0) {
          dispatch({ type: "CLEAN_QUERY" });
          return;
        }

        const re = new RegExp(data.value, "i");
        const isMatch = (result) => re.test(key(result));

        dispatch({
          type: "FINISH_SEARCH",
          results: source.filter(isMatch),
        });
      }, 500);
    },
    [key, source]
  );

  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return {
    loading,
    results,
    value,
    handleSearchChange,
  };
};

export default useSearch;
