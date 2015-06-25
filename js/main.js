var Main = (function (my, Helpers) {
    my.instance = {};

    my.initButtons = function () {
        document.getElementById('addTree').addEventListener("click", function () {
            new Kokus.Tree({
                x: Helpers.getRandomInt(0, 360),
                y: Helpers.getRandomInt(0, 360),
                z: Helpers.getRandomInt(0, 360)
            }, {}, my.instance);
        }, false);
        document.getElementById('addHouse').addEventListener("click", function () {
            new Kokus.House({
                x: Helpers.getRandomInt(0, 360),
                y: Helpers.getRandomInt(0, 360),
                z: Helpers.getRandomInt(0, 360)
            }, {}, my.instance);
        }, false);
        document.getElementById('addMountain').addEventListener("click", function () {
            new Kokus.Mountain({
                x: Helpers.getRandomInt(0, 360),
                y: Helpers.getRandomInt(0, 360),
                z: Helpers.getRandomInt(0, 360)
            }, {}, my.instance);
        }, false);
        document.getElementById('reset').addEventListener("click", function () {
            my.instance.reset();
        }, false);
    }
    
    my.afterLoad = function(){
        my.initButtons();
    }

    my.init = function () {
        console.log('init');
        my.instance = new Kokus({idContainer: "coucou"});
    }
    return my;
}(Main || {}, Helpers || {}));


