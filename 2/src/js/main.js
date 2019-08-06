function banner() {
    var itemList = document.getElementsByClassName('banner');


    for (var i = 0; i < itemList.length; i++) {
        var str = 'https://api.uuz.bid/random?t=' + Math.random() * 30;
        itemList[i].style.backgroundImage = "url(" + str + ")";

    }
}

/* https://api.imalan.cn/random/?c=unsplash&s=large&r=img?t=*/