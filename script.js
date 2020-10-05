$(function(){
    // #tab1以外を非表示にする
    $('#contents div[id != "tab1"]').hide();
    
    // タブをクリック
    $("a").click(function(){
        // 一度全てのコンテンツを非表示にする
        $("#contents div").hide();

        // 選択されたコンテンツを再表示
        $($(this).attr("href")).show();
        
        // 現在のcurrentクラスを削除
        $(".current").removeClass("current");
        
        // 選択されたタブ(自分自身)にcurrentを追加
        $(this).addClass("current");
        
        return false;
    
    });

    
});

$(function(){
    // 全てのアラート非表示
    $(".alert").hide();

    $("#submitBtn").click(function(){

        // チェック用の変数
         var sendFlag = true;

        // 氏名チェック
        if(!$("#a").val()){
            $("#a .alert").show();
             sendFlag = false; // 入力がなければfalseに
        }else{

            // 入力ありならアラート文非表示
            $("#alert").hide();
        }

        // メールチェック
        if(!$("#b").val()){
            $("#b .alert").show();
             sendFlag = false // 入力がなければfalseに
        }else{

            //　入力ありならアラート文非表示
            $("#alert").hide();
        }

        // テキストエリアチェック
        if(!$("#c").val()){
            $("#c .alert").show();
             sendFlag = false; // 入力がなければfalseに
        }else{

            // 入力ありならアラート文非表示
            $("#alert").hide();
        }

        if(sendFlag == false){

        
        return false;
        }
        
    });
});

$(function(){
    // 変数navPosに、nav要素の初期値を代入
    var navPos = $("nav").offset().top;

    // ブラウザをスクロール
    $(window).scroll(function() {
        // スクロール量とnav要素の初期位置を比較
        if($(window).scrollTop() > navPos){
            // 条件を満たした場合：nav要素をブラウザ上部に固定
            $("nav").css("position", "fixed");
        }else{
            // 満たさない場合：nav要素を通常のはい位置にする
            $("nav").css("position", "static");
        }
    });
});

$(function(){
    // ボタンをクリック
    $("header a").click(function(){
        // body要素にクラスが付いていれば削除
        $("body").removeClass();
        
        //選択した要素のテキスト内容を取得
        var size = $(this).html();

        if(size == "S"){
                // body要素に.fontSmallを追加
                $("body").addClass("fontSmall");
        }else if(size == "M"){
                // body要素に.fontMediumを追加
                $("body").addClass("fontMedium");
        }else{
                // body要素に.fontLargeを追加
                $("body").addClass("fontLarge");
        }

        return false;
    });
});