const List = [
  ["曹操", "そうそう"],
  ["劉備", "りゅうび"],
  ["孫堅", "そんけん"],
  ["孫策", "そんさく"],
  ["孫権", "そんけん"],
  ["諸葛亮", "しょかつりょう"]
].map(function (ary) {
  return {
    kanji: ary[0],
    kana: ary[1],
    romaji: jaconv.toHebon(ary[1]).toLowerCase(),
  }
});
