---
title: Flutterを使ってみた
date: 2021-11-21
tags:
 - Flatter
categories:
 -  native app
---


友達と発音練習用のネイティブアプリを作ることになったので、Flutterを勉強しています。
発音練習で必要なのは音声認識であるため、Flutterで音声認識のサンプルを動かしました。参考にしたサイトです。

https://zenn.dev/kazutxt/books/flutter_practice_introduction/viewer/smartphone_stt#android

動かそうとしたところ、依存関係の問題が多発しました。インストールするライブラリのバージョンの依存関係の問題、実機のandroidのバージョン、targetSdkVersionです。アプリを実際に公開するとなると古いバージョンのandroidを使っている人もいるから、考慮事項が多くなると思いました。

こちらが利用した、Flutterの音声認識のライブラリです。最新バージョンの5.2.0はAndroidのAPIレベルが31である実機が対応していなかったため、4.2.2 を使いました。

https://pub.dev/packages/speech_to_text


## レイアウトについて
Flutterのレイアウト作成をAdobeXDでもできます。こちらの動画を参考にやってみました。レイアウトの作成をする時の参考になりそうです。

https://www.youtube.com/watch?v=ZcS66NNbTGw