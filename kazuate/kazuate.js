// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();


// ボタンを押した後の処理をする関数 hantei() の定義

function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    let y = document.querySelector('span#yoso');
    y.textContent = yoso;
    // 課題3-1：ここの判定処理を作成する．
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    kaisu = kaisu + 1;
    //let kaisu2 = (kaisu + "回目の予想: " + yoso);
    let kaisu2 = document.querySelector('span#kaisu2');
    kaisu2.textContent = kaisu;

    let p = document.querySelector('p#result');
    if (kaisu < 3) {
        if (kotae === yoso) {
            p.textContent = ("正解です．おめでとう!");
        }
        else if (kotae > yoso){
            p.textContent = ("まちがい．答えはもっと大きいですよ");
        }
        else if (kotae < yoso){
            p.textContent = ("まちがい．答えはもっと小さいですよ");
        }
    }
    else if (kaisu === 3) {
        p.textContent = ("まちがい．残念でした答えは " + kotae +" です．")
    }
    else {
        p.textContent = ("答えは" + kotae +"でした. すでにゲームは終わっています")
    }
}
