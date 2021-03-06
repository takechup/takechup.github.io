enchant();

var FPS = 30;



//HTMLが読み込まれた時の処理
window.onload = function(){
    var game = new Core(480,320);

    //画像の読み込み
    game.preload("img/puyos.png");
    game.preload("img/box.png");
    game.preload("img/wood_test.png");
    //音声の読み込み
    game.preload("sounds/bgm07.wav");

    //ゲーム全体の動きを管理する場所
    game.onload = function(){

        //ar hello = new Label("Hello Bear");

        //シーンの背景を設定
        game.rootScene.backgroundColor = "#FFFFFF";
        //game.rootScene.addChild(hello);

        //文字列の描画
/*
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
            game.replaceScene(game.rootScene);
        });
*/


        //2つ目のシーン(ゲームのメインになるシーン)
       // var game.rootScene = new Scene();
       // game.rootScene.backgroundColor = "#FF0000";
        //シーンにメッセージを登録
        var e = new Entity();
        e._element = document.createElement('div');
        e.width = 320;
        e._element.innerHTML = "<h1>タグを使ってみよう！</h1><br><p>enchant.jsでタグを使ってみる。</p>";
        game.rootScene.addChild(e);


        
        var secondMessage = new Label("射的ゲーム");
        secondMessage.x = 10;
        secondMessage.y = 10;
        game.rootScene.addChild(secondMessage);

        //画像の描画
        var tresureBox = [];
        var wood_bar = [];

        for(var i=0; i< 2 ; ++i){

            wood_bar[i] = new Sprite(480,20);
            wood_bar[i].image = game.assets["img/wood_test.png"];
            wood_bar[i].x = 0;
            wood_bar[i].y = 120*i + 150;
            game.rootScene.addChild(wood_bar[i]);
        }


        for(var i=0; i< 6; ++i){
           // console.log("test : " + ind);
                //画像の大きさを取得
                tresureBox[i] = new Sprite(100,70);
                //画像設定
                tresureBox[i].image = game.assets["img/box.png"];
                    //位置を指定
                    tresureBox[i].x = 150*(i%3) + 40; 

                    tresureBox[i].y = 120*(i%2) + 80;


                    game.rootScene.addChild(tresureBox[i]);

                }


        //ブルブルさせる
        tresureBox[0].tl.rotateTo(5,5).rotateTo(-5,5).loop();
        tresureBox[1].tl.rotateTo(5,5).rotateTo(-5,5).loop();
        tresureBox[2].tl.rotateTo(5,5).rotateTo(-5,5).loop();
        tresureBox[3].tl.rotateTo(5,5).rotateTo(-5,5).loop();
        tresureBox[4].tl.rotateTo(5,5).rotateTo(-5,5).loop();
        tresureBox[5].tl.rotateTo(5,5).rotateTo(-5,5).loop();


        //宝箱のクリック設定ーーなぜか直書きじゃないと反映されない
        tresureBox[0].addEventListener("touchstart",function(){

            //描画し直して最前面へ持ってくる
            game.rootScene.removeChild(tresureBox[0]);
            game.rootScene.addChild(tresureBox[0]);
            //回転の初期化
            
            //ループの解除
            for(var i=0; i<6; ++i)
            {
                tresureBox[i].tl.unloop();
            }
            //最大化アニメーション
            //@TODO ここにJSタグ（広告）持ってくる

            tresureBox[0].tl.moveTo(200,130,20).and().scaleTo(2,20).and().rotateTo(0,20);

        });

        tresureBox[1].addEventListener("touchstart",function(){
               //描画し直して最前面へ持ってくる
               game.rootScene.removeChild(tresureBox[1]);
               game.rootScene.addChild(tresureBox[1]);
            //回転の初期化
            
            //ループの解除
            for(var i=0; i<6; ++i)
            {
                tresureBox[i].tl.unloop();
            }
            //最大化アニメーション
            //@TODO ここにJSタグ（広告）持ってくる

            tresureBox[1].tl.moveTo(200,130,20).and().scaleTo(2,20).and().rotateTo(0,20);
            //tresureBox[1].addEventListener("touchstart",function(){
                //game.rootScene.removeChild(tresureBox[1]);
                //log.console("消された");
            // });

    });
        tresureBox[2].addEventListener("touchstart",function(){
           //描画し直して最前面へ持ってくる
           game.rootScene.removeChild(tresureBox[2]);
           game.rootScene.addChild(tresureBox[2]);
            //回転の初期化
            
            //ループの解除
            for(var i=0; i<6; ++i)
            {
                tresureBox[i].tl.unloop();
            }
            //最大化アニメーション
            //@TODO ここにJSタグ（広告）持ってくる

            tresureBox[2].tl.moveTo(200,130,20).and().scaleTo(2,20).and().rotateTo(0,20);
        });


        tresureBox[3].addEventListener("touchstart",function(){
              //描画し直して最前面へ持ってくる
              game.rootScene.removeChild(tresureBox[3]);
              game.rootScene.addChild(tresureBox[3]);
            //回転の初期化
            
            //ループの解除
            for(var i=0; i<6; ++i)
            {
                tresureBox[i].tl.unloop();
            }
            //最大化アニメーション
            //@TODO ここにJSタグ（広告）持ってくる

            tresureBox[3].tl.moveTo(200,130,20).and().scaleTo(2,20).and().rotateTo(0,20);

        });


        tresureBox[4].addEventListener("touchstart",function(){
              //描画し直して最前面へ持ってくる
              game.rootScene.removeChild(tresureBox[4]);
              game.rootScene.addChild(tresureBox[4]);
            //回転の初期化
            
            //ループの解除
            for(var i=0; i<6; ++i)
            {
                tresureBox[i].tl.unloop();
            }
            //最大化アニメーション
            //@TODO ここにJSタグ（広告）持ってくる

            tresureBox[4].tl.moveTo(200,130,20).and().scaleTo(2,20).and().rotateTo(0,20);


        });
        tresureBox[5].addEventListener("touchstart",function(){
               //描画し直して最前面へ持ってくる
               game.rootScene.removeChild(tresureBox[5]);
               game.rootScene.addChild(tresureBox[5]);
            //回転の初期化
            
            //ループの解除
            for(var i=0; i<6; ++i)
            {
                tresureBox[i].tl.unloop();
            }
            //最大化アニメーション
            //@TODO ここにJSタグ（広告）持ってくる

            tresureBox[5].tl.moveTo(200,130,20).and().scaleTo(2,20).and().rotateTo(0,20);

        });


            　 //  game.rootScene.addEventListener("touchstart",function(){
              //  game.pushScene(result);
           // });

        // 衝突は各オブジェクト側で制御する。
        //カーソルの準備
        var cursor = new Sprite(0, 0);
        cursor.moveTo( 0, 0 );
        game.rootScene.addChild(cursor);
        
        // 毎秒描画処理
        game.addEventListener('enterframe', function() {
            setPosition();

            for(var i=0; i<6; ++i){

                if( tresureBox[i].intersect( cursor ) ){
                    if(! tresureBox[i].onMouse){
                        tresureBox[i].onMouse = true;
                        tresureBox[i].image = game.assets["img/wood_test.png"];
                        //console.log("resdfg");

                    }
                } else {
                    if(tresureBox[i].onMouse){
                        tresureBox[i].onMouse = false;
                        tresureBox[i].image = game.assets["img/box.png"];
                    }
                }   
            }

        });
        
        // マウス座標反映関数
        function setPosition(){
            window.document.onmousemove = function(e){
                cursor.moveTo( getMousePosition(e).x-10, getMousePosition(e).y-10 );
            };
        }
        // マウス座標取得関数
        function getMousePosition(e) {
            var obj = [];
            if(e) {
                // game.scaleの値が反映されている？ので割ってあげる
                obj.x = e.pageX / game.scale;
                obj.y = e.pageY / game.scale;
            }
            else {
                obj.x = (event.x + document.body.scrollLeft)/ game.scale;
                obj.y = (event.y + document.body.scrollTop)/ game.scale;
            }
            //確認用
            //console.log(obj.x+" "+obj.y);
            return obj;
        }
        ////////////////////////////////////////////////////////////////////////


        //3つ目のシーン（結果発表画面）
        /*
        var result = new Scene();
        result.backgroundColor = "FFFFFF";

        var thirdMessage = new Label("Hello");
        thirdMessage.x = 100;
        thirdMessage.y = 100;
        result.addChild(thirdMessage);



        result.addEventListener("touchstart",function(){
            game.replaceScene(game.rootScene);
        });
*/
        //



    }
    game.start();
}
