const subsetsOfSet = function (set) {
  const subsets = [[]];
  for (let i = 0; i < set.length; i++) {
    subsets[subsets.length] = [set[i]];
  }
  if (set.length > 1) {
    for (let i = 0; i < set.length - 1; i++){
      subsets[subsets.length] = set.slice(i, i + 2);
    }
  }
  console.log(subsets);
  return subsets;
};

exports.subsetsOfSet = subsetsOfSet;
