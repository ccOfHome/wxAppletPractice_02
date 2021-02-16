var appid=56130;
var secret="16a8240cf65b4cdd94c665b824a8d2a1";

var param="?showapi_appid="+appid+"&showapi_sign="+secret;

var textJoke = "https://route.showapi.com/341-1" + param;
var imgJoke = "https://route.showapi.com/342-2" + param;
var gifJoke = "https://route.showapi.com/342-3" + param;

module.exports={
  textJoke: textJoke,
  imgJoke: imgJoke,
  gifJoke: gifJoke
};




