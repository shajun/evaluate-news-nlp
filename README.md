# Evaluate a news article with Natural Language Processing

The goal of this repo is a Web tool that allows users to run natural language processing (NLP) on articles or blogs on other websites. With the new API-aylien, we can build a simple Web interface to interact with its NLP system. The tool will provide relevant information about the article, such as whether the content is subjective (opinions) or objective (based on facts); Whether the content is positive, neutral or negative.

## Get Up and Running

Fork this repo, then clone the branch of your choice from your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/evaluate-news-nlp.git --
```

`cd` into your new folder and run:
- ```npm install```
- ```npm test``` to test the app
- ```npm run build-dev``` to build a development environment
- ```npm run build-prod``` to build a production environment
- ```npm start``` to start the app
- this app runs on localhost:8081, but you can of course edit that in server.js
