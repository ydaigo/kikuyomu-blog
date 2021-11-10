---
title: デプロイ手順
date: 2020-05-27
---

## build

```
gcloud builds submit --tag gcr.io/blaze-d9b06/kikuyomu-blog:v1
```

## deploy

```
npm run build
gcloud run deploy kikuyomu-blog --image gcr.io/blaze-d9b06/kikuyomu-blog:v1 --region=us-central1
```