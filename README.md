# モデル ジェネレーター プラグイン

## 概要

任意のマーカー上に 3D モデルを配置することができるプラグインです。

## 使用方法

### 編集画面での事前準備
- あらかじめ右サイドメニューの「モデル」で 配置する3D モデルをアセットから選択するか、URLを指定して設定してください。

  ![](https://eukarya-inc.github.io/reearth-plugin-modelgenerator/src/img2.png)


### プラグインの操作方法

![](https://eukarya-inc.github.io/reearth-plugin-modelgenerator/src/img1.png)

- 地図上左上のアイコン（上図での赤枠部分）をクリックして、モデルの作成画面を開きます。

- 予め配置したマーカーを「選択フォルダ」で選択できます。初期状態では「全て」となっており、フォルダやタグの選択も可能です。
  - フォルダを選択した場合、指定したフォルダ内に含まれているマーカーレイヤを対象に処理が行われます。
  - タグを選択した場合、指定したタグが付けられているマーカーレイヤを対象に処理が行われます。
- モデルを拡大するサイズを指定します。プラグインでは、CZML パラメータのピクセルの最小値は 128 ピクセルに設定されています。
  ![](https://eukarya-inc.github.io/reearth-plugin-modelgenerator/src/img3.png)
- 「Model 作成」ボタンを押すと、選択したマーカーの位置に 3D モデルが配置されます。
  ![](https://eukarya-inc.github.io/reearth-plugin-modelgenerator/src/img4.png)
- 「全て消去」をクリックすると、生成したモデルを一括で削除できます。
- 「CZML をエクスポート」ボタンを押すと、CZML ファイルが作成されます。
- CZML ファイルは、Re:Earth のファイルインポート機能で読み込むことができます。

## 備考

このプラグインは、以下の OS,ブラウザで動作確認をしています。

- OS

  - Mac OS

- ブラウザ
  - Chrome: 107.0.5304.110
  - Safari: 16.0 (17614.1.25.9.10, 17614)
  - FireFox: 107.0
  - Edge: 107.0.1418.56

## 開発者欄

このプラグインは、Re:Earth 公式プラグインです。

![](https://eukarya-inc.github.io/reearth-plugin-modelgenerator/src/logo-3.png)

ソースコードはこちら(https://github.com/eukarya-inc/reearth-plugin-modelgenerator)

- コミュニティ

  - このプラグインを利用したプロジェクトをユーザーコミュニティでシェアしましょう。

  - このプラグインについての不明点がある場合にもここから Re:Earth チームや他の開発者に質問することができます。

  - Discord へのリンクはこちら(https://discord.gg/BXcQhvwqqM)
