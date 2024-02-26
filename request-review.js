"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var url = process.env.SLACK_WEBHOOK_URL;
var prNum = process.env.PULL_REQUEST_NUMBER;
var prTitle = process.env.PULL_REQUEST_TITLE;
var prUrl = process.env.PULL_REQUEST_URL;
var prBody = process.env.PULL_REQUEST_BODY || "No description provided.";
var authorName = process.env.PULL_REQUEST_AUTHOR_NAME;
var repo = process.env.REPO_NAME;
var message = {
    attachments: [
        {
            color: "#00ff00",
            blocks: [
                {
                    type: "section",
                    block_id: "commit_title",
                    text: {
                        type: "mrkdwn",
                        text: authorName + " has requested a review of " + repo + ": " + "<" + prUrl + "|" + prTitle + "> (# " + prNum + ")"
                    }
                }
            ]
        }
    ]
};
axios_1.default.post(url, message);
