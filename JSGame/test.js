enchant();

var FPS = 30;


//HTMLが読み込まれた時の処理
window.onload = function(){
    var game = new Core(480,320);

    //画像の読み込み
    game.preload("img/puyos.png");
    //音声の読み込み
    game.preload("sounds/bgm07.wav");

    //ゲーム全体の動きを管理する場所
    game.onload = function(){
        var hello = new Label("Hello Bear");

        //シーンの背景を設定
        game.rootScene.backgroundColor = "#FFFFFF";
        game.rootScene.addChild(hello);

        //文字列の描画
            var hello = new Label("Hello Bear");
            hello.x = 10;
            hello.y = 150;
            game.rootScene.addChild(hello);

        //画像の描画
            var sprite = new Sprite(16, 16);
            sprite.image = game.assets["img/puyos.png"];
            game.rootScene.addChild(sprite);

        //音声の再生
            game.assets["sounds/bgm07.wav"].play();

        //フレームの確認
        game.addEventListener("enterframe",function(){
            sprite.x += 1;
        });

        //クリックした時の処理
        sprite.addEventListener("touchstart",function(){
            sprite.y += 10;
        });

         //画面をタップした時の距離
        sprite.addEventListener("touchstart",function(){
            game.replaceScene(main);
        });


        //2つ目のシーン(ゲームのメインになるシーン)
        var main = new Scene();
        main.backgroundColor = "#FF9999";
        //シーンにメッセージを登録
        var secondMessage = new Label("Hello, secondScene");
        secondMessage.x = 10;
        secondMessage.y = 10;
        main.addChild(secondMessage);

       

        //3つ目のシーン（結果発表画面）
        var result = new Scene();
        result.backgroundColor = "FFFFFF";

        var thirdMessage = new Label("Hello");
        thirdMessage.x = 100;
        thirdMessage.y = 100;
        result.addChild(thirdMessage);

         main.addEventListener("touchstart",function(){
            game.pushScene(result);
        });


        result.addEventListener("touchstart",function(){
            game.replaceScene(main);
        });


       



        //



    }
    game.start();
}
