function test(group) {
  if (parseInt(group)) {
    return "published";
  }
  return group;
}

export const groupBy = (array, key, fn) => {
  return array.reduce((acc, obj) => {
    let group = fn ? fn(obj[key]) : obj[key];

    group = test(group);
    acc.findIndex((e) => e.group === group) === -1
      ? acc.push({ group: group, items: [obj] })
      : acc.find((e) => e.group === group).items.push(obj);

    return acc;
  }, []);
};
//
