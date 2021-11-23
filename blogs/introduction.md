---
title: このブログについて
date: 2021-11-6
tags:
 - Docker
 - GCP
categories:
 -  Web
---

# 開発環境
- Windows10
- Ubuntu20.04(WSL2)

# 本番環境
- GCP

# 利用技術
- vuepress
- docker
- cloud run 
- container registry

# 作ろうと思ったきっかけ
自分でブログを作ることでブログの構築から運用までの流れを学べたかったからです。はてなブログやnoteのようなブログサービスを使うとすぐにブログを始められますが、技術的な部分は学ぶことができません。結果的に、自分でサーバーを立ててドメインを購入するという手間をかけるため、自分のブログに愛着を持てると持つことが出来ています。

# 利用技術の選定理由
vuepressを選択した理由はお金がかからないからです。最初はwordpressでブログを立てることを考えていましたが、wordpressだとDBが必要でありお金がかかるので断念しました。vuepressはDBがいらないため、アクセス数が少ないとお金がかかりません。vuepressはwordpressと違い静的Webサイトであり、開発環境で記事を書いてビルドしホスティングサービスにデプロイします。そのため、ブラウザから記事をかけるWordpressと比較して記事を書くのは少し不便です。

続いてcloud runを使った理由です。これは単純にDockerを用いたデプロイがしたかったからです。静的サイトをデプロイしたいだけなので、Firebase hostingのようなホスティングサービスでも良かったです。cloud runでのデプロイを通して使い方やDockerの利点がわかったので良かったです。

# deployとbuildについて

gcloudにログインしている状態で下記のコマンドをたたくとbuildとdeployができます。

## build

```
npm run build
gcloud builds submit --tag gcr.io/blaze-d9b06/kikuyomu-blog:v1
```

## deploy

```
gcloud run deploy kikuyomu-blog --image gcr.io/blaze-d9b06/kikuyomu-blog:v1 --region=us-central1