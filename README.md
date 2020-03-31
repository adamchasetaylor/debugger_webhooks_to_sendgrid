# debugger_webhooks_to_sendgrid


## Bootstrap with Blank Template

twilio serverless:init debugger-webhook

cd debugger-webhook

rm -rf functions/*

rm -rf assets/*

cp .env-sample .env


## Dependencies

npm install [@sendgrid/mail@6.5.5](https://www.npmjs.com/package/@sendgrid/mail)

## Setup

Copy webhook.js into your functions folder

Setup .env with your SENDGRID_API_KEY, TO_EMAIL_ADDRESS, FROM_EMAIL_ADDRESS

## Deploy

twilio serverless:deploy
