---
title: デプロイ手順
date: 2020-05-27
tags:
 - tag2
categories:
 -  category2
---

## build

```
npm run build
gcloud builds submit --tag gcr.io/blaze-d9b06/kikuyomu-blog:v1
```

## deploy

```
gcloud run deploy kikuyomu-blog --image gcr.io/blaze-d9b06/kikuyomu-blog:v1 --region=us-central1
```