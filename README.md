自分用作業テンプレート
====

Web制作の自分用テンプレートです。  
タスクランナーはgulp、HTMLはJade、CSSはSCSSで制作します。  
node.js, npm, bowerが使える環境が必要です。

---

## **作業環境設定**
作業環境を作る手順です  
下記の流れでコマンドも叩いてもらえればと思います

### gulp/config.js
プロジェクトに合わせて設定を書き換えます  
必ず書き換えが必要なのはbrowserSyncのproxy設定くらいでしょうか

### bower install
bower.jsonにあるパッケージをインストールします

### npm install
必要なgulpファイルをインストールします

### gulp build
watch以外のタスクが走ります  
初期化の処理のタスクです

### gulp
watchタスクが走ります

---

## **ディレクト構成**

```
├── README.md
├── bower_components
├── dest                             // コンパイル後の格納ディレクトリ
├── gulp                             // タスクランナー
│   ├── config.js                    // タスクの設定
│   └── tasks                        // タスクの格納ディレクトリ
├── gulpfile.js
├── package.json
└── src                              // 作業ディレクトリ
    ├── assets                       // html・jade以外のファイル
    │   ├── audio
    │   ├── css
    │   ├── doc
    │   ├── font
    │   ├── img                      // htmlディレクトリに合わせる　共通ファイルはルート
    │   │   ├── category01
    │   │   └── index
    │   ├── inc
    │   ├── js
    │   ├── scss
    │   │   ├── _assets
    │   │   │   ├── bourbon          // ライブラリ bourbon
    │   │   │   ├── project-setting  // プロジェクト用
    │   │   │   └── template-setting // 個人用
    │   │   ├── _foundation
    │   │   ├── _import.scss
    │   │   ├── _layout
    │   │   ├── _object
    │   │   ├── app.scss             // 共通スタイル連結
    │   │   ├── common.scss          // category01共通スタイル
    │   │   │   └── index.scss
    │   │   └── index
    │   │       └── index.scss
    │   ├── svg
    │   └── video
    ├── category01
    │   ├── index.html
    │   └── index.jade
    ├── index.html
    └── index.jade
```

---

## **CSSルール**
CSSの設計は[FLOCSS](https://github.com/hiloki/flocss)、命名規則は[MindBEMding](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)を採用しています。  
※後に詳細追加します。

---

## **ライブラリの管理について**
jQueryやanimate.cssなどのライブラリはBowerで管理しています。  
bower.jsonに記述されたライブラリをjs, cssそれぞれ  

dest/assets/js/libs.min.js  
dest/assets/css/libs.min.css  

にコンパイルします。  
追加する場合もBowerでインストールしてください。
