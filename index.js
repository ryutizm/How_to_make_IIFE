// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// カプセル化をするメリット
// 1.スコープを限定できる。
// 2.疑似的なオブジェクト指向開発。
//   -1.再利用できる。
//   -2.必要な時に呼び出せる


// 即時関数→宣言不要ですぐに実行される
const headerModule = (() => {
  let counter = 0;
  
  return {
    countUp: () => {
      counter += 1
      console.log("現在のカウントは", counter)
    },
    selectMenu: () => {
      console.log("ヘッダーのメニュー！");
    }
  }
})();


// 即時関数でasync, awaitを使う
(async() => {
  const url = 'https://api.github.com/users/ryutizm'
  
  const json = await fetch(url)
      .then(res => {
        return res.json()
      }).catch(error => {
          return null
      });
  
  console.log(json.login)
})();