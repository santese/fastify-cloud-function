# Fastify & Google Cloud Function v2
###### Template for Fastify & Google Cloud Function v2

- Fastify Autoload Plugin
- Fastify Bearer Auth Plugin
- Zod for ENV variables

###### Update deployment commands with your needed settings, below is the current example set for prod and dev(yarn deploy:dev, yarn deploy:prod):

"gcloud functions deploy hello-world --entry-point main --runtime nodejs20 --trigger-http --project projectName --gen2 --region us-central1 --set-env-vars TZ='America/Los_Angeles'"
