const name = document.getElementById("inputName");
const rText = document.getElementById("resultText");
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
  rText.innerHTML = '<input type=text id="copyText" size=8 /> コピーしました';
  var cText = document.getElementById("copyText");
  cText.value = text;
  cText.select();
  document.execCommand('copy');
}

name.addEventListener('keyup', (event) => {
  rText.innerHTML = "";
  if (event.target.value.length < 3) return;

  var search_result = searchByText(event.target.value);

  if (search_result.length == 0) return;

  var html = "";
  search_result.forEach(function (res) {
    html += `<button id="text" onClick="copyClip('${res.item.kanji}')">${res.item.kanji}</button>`;
  });
  result.innerHTML = html;
});
