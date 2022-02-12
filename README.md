# About 

便利な調理器具の木べらみたいに、Kibelaをちょっと使いやすくする機能を詰めこんだChrome拡張。 

## 現在含まれる機能

- 記事内のリンクをデフォルトで別タブで開く機能

## Chrome Store

限定公開URL: https://chrome.google.com/webstore/detail/boidicgjhjfndonhaekmpaijhgijklhp

## Chrome Storeを経由しないインストール方法

1.  から ZIPファイルをダウンロードし、ZIPを解凍する

2. chrome://extensions/ にアクセスする

3. 画面右上のデベロッパーモードをONにする

4. 「パッケージ化されていない拡張機能を読み込む」ボタンを押す

5. ZIPを解凍してできたフォルダを指定する

# Special Thanks

公開されていたテンプレートを利用させていただきました。
https://github.com/htlsne/web-ext-react-template

# For Contribute
## Basic Usage

Build a browser extension with React + TypeScript + esbuild.
Following examples are for `yarn`. For `npm`, please translate by yourself.

### Development

#### Build

```shell
yarn run build:chrome
yarn run build:chrome --watch # watch mode
yarn run build:chrome --watch --dev # watch mode with source map
```

#### Run with browsers

```shell
yarn run run:chrome # Launch Chrome browser on your device
```

### Create a package for Chrome

```
yarn run package:chrome
```

### Add background_scripts, etc.

Edit `build.ts` and configure [esbuild](https://esbuild.github.io/).
