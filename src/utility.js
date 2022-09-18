export const groupBy = (array, key, fn) => {
  console.log(fn);
  return array.reduce((acc, obj) => {
    let group = fn ? fn(obj[key]) : obj[key];

    acc.findIndex((e) => e.group === group) === -1
      ? acc.push({ group: group, items: [obj] })
      : acc.find((e) => e.group === group).items.push(obj);

    return acc;
  }, []);
};
//
