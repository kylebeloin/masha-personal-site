export const groupBy = (array, key, fn) => {
  console.log("groupBy", array, key, fn);
  return array.reduce((acc, obj) => {
    console.log("groupBy", acc, obj);
    let group = fn ? fn(obj[key]) : obj[key];

    acc.findIndex((e) => e.group === group) === -1
      ? acc.push({ group: group, items: [obj] })
      : acc
          .find((e) => JSON.stringify(e.group) === JSON.stringify(group))
          .items.push(obj);

    return acc;
  }, []);
};
//
