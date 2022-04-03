# UI / Front-end Developer assessment

Please create a `.env.development.local` file inside the client folder and paste variable set from below:

```
DOMAIN=localhost
PROTOCOL=http
PORT=3000
API_PORT=3001

BASE_URL=http://localhost:3000
STATIC_URL=http://localhost:3001
API_URL=http://localhost:3001/graphql
SUBSCRIPTION_URL=ws://localhost:3001/subscriptions
SESSION_TOKEN_SECRET=992tWkxwyaClocleint7m6NWEw23HREgfFPtF7bDwv12bv9paJe

FACEBOOK_APP_ID=
FACEBOOK_APP_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_SECRET=

LINKEDIN_KEY=
LINKEDIN_SECRET=

EMAIL_FROM=
SENDGRID_API_KEY=
```

## This is a next.js client application
download the resource on your local machine, navigate client folder and than run the below command from your terminal,

```
yarn
yarn run dev
```