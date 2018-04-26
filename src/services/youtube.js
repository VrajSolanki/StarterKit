export function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length<=11)? match[7] : false;
}


export function youtube_thumb_small(url){
  let vidid = youtube_parser(url);
  return `http://img.youtube.com/vi/${vidid}/0.jpg`
}
