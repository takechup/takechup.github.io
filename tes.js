enchant(); // initialize
window.onload = function () {
	var game = new Game(300, 300);
    game.preload('http://jsrun.it/assets/9/y/R/I/9yRIw');
    game.onload = function () {
        var scene = new Scene();
        
        ///////////////////////////////////////////////////////////////////////
		// ボタン
		///////////////////////////////////////////////////////////////////////
		var Button = enchant.Class.create(enchant.Sprite, {
			initialize: function(){
				enchant.Sprite.call( this, 100, 50 );
				this.backgroundColor = '#ff0';
                this.onMouse = false;
                scene.addChild( this );
			},
            onenterframe: function(){
                // オンマウス処理
                if( this.intersect( cursor ) ){
                    if(! this.onMouse){
                        this.onMouse = true;
                        // 色を変える
                        this.backgroundColor = '#00f';
                    }
                } else {
                    if(this.onMouse){
                        this.onMouse = false;
                        // 色を戻す
                        this.backgroundColor = '#ff0';
                    }
                }   
            }
		});
        
		///////////////////////////////////////////////////////////////////////
		// マウス追従型スプライト移動判定
		// 衝突は各オブジェクト側で制御する。
		
		var cursor = new Sprite(10, 10); // 実際には 0, 0 で宣言する
        cursor.backgroundColor = '#f00'; // ここは実際には宣言しない
		cursor.moveTo( 0, 0 );
		scene.addChild( cursor );
		
		// 毎秒描画処理
		game.addEventListener('enterframe', function() {
			setPosition();
		});
		
		// マウス座標反映関数
		function setPosition(){
			window.document.onmousemove = function(e){
				cursor.moveTo( getMousePosition(e).x, getMousePosition(e).y );
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
            console.log(obj.x+" "+obj.y);
			return obj;
		}
        ////////////////////////////////////////////////////////////////////////
        var button = new Button();
        button.moveTo(20, 20);
        
        game.pushScene( scene );
    };
    game.start();
};