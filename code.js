const name = document.getElementById("inputName");
const cText = document.getElementById("copyText");
const result = document.getElementById("result");

function searchByText(text) {
  const options = {
    includeScore: true,
    keys: ['kanji', 'kana', 'romaji'],
    threshold: 0.3,
  }
  const fuse = new Fuse(List, options);
  return fuse.search(text);
}

function copyClip(text) {
  cText.value = text;
  cText.select();
  document.execCommand('copy');
}

name.addEventListener('change', (event) => {
  search_result = searchByText(event.target.value);
  if (search_result.length == 0) return;
  var html = "";
  search_result.forEach(function (res) {
    html += `<button id="text" onClick="copyClip('${res.item.kanji}')">${res.item.kanji}</button>`;
  });
  result.innerHTML = html;
});
