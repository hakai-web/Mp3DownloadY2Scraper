export function yotubeUrlId(url: string) {
    var regExp: string = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match: string = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}
