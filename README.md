# Request Review via Slack Notification
Use GitHub Actions to request a PR review via Slack notification.

## Usage
Add the following YAML to your new GitHub Actions workflow:

```yaml
name: Request Review via Slack

on:
  pull_request:
    types: [opened, reopened]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Request Review via Slack
      env: 
        SLACK_WEBHOOK_URL : ${{ secrets.SLACK_WEBHOOK_URL }}
        PULL_REQUEST_NUMBER : ${{ github.event.pull_request.number }}
        PULL_REQUEST_TITLE : ${{ github.event.pull_request.title }}
        PULL_REQUEST_AUTHOR_NAME : ${{ github.event.pull_request.user.login }}
        PULL_REQUEST_URL : ${{ github.event.pull_request.html_url }}
        REPO_NAME : ${{ github.event.repository.name }}
      uses: ilia/request-review-action@v0.0.1
```

Message in the channel will be based on:

PULL_REQUEST_AUTHOR_NAME requested a review of REPO_NAME:<a href="PULL_REQUEST_URL"> PULL_REQUEST_TITLE </a> (#PULL_REQUEST_NUMBER)