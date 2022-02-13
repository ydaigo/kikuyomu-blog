npm i
npm run build
gcloud builds submit --tag gcr.io/blaze-d9b06/kikuyomu-blog:v1
gcloud run deploy kikuyomu-blog --image gcr.io/blaze-d9b06/kikuyomu-blog:v1 --region=us-central1
rm -r public