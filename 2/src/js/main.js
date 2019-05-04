function banner() {
    var itemList = document.getElementsByClassName('banner');


    for (var i = 0; i < itemList.length; i++) {
        var str = 'https://api.imalan.cn/random/?c=unsplash&s=large&r=img?t=' + Math.random() * 20;
        itemList[i].style.backgroundImage = "url(" + str + ")";

    }
}