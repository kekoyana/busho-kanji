const name = document.getElementById("inputName");
const result = document.getElementById("result");

function searchByText(text) {
  const options = {
    includeScore: true
  }
  const fuse = new Fuse(List, options);
  return fuse.search(text)[0];
}

name.addEventListener('change', (event) => {
  search_result = searchByText(event.target.value);
  if (search_result) result.value = search_result.item;
});
