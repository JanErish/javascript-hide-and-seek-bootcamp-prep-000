function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector(`#nested .target`);
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll(' .ranked-list');
  for (let i=0;i<rankedLists.length;i++) {
    for (let j=0;j<rankedLists[i].length;j++) {
      rankedLists[i].children[j].innerHTML = rankedLists[i].children[j].innerHTML + n;
    }
  }
  return rankedLists
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  return nodes[nodes.length- 1];
}