# docker-telegram-notifier

A Telegram integration to notify Docker events inspired by ***slack-notifier***.

## How to Run

[Set up a telegram bot](https://core.telegram.org/bots#3-how-do-i-create-a-bot) and get the `Bot Token`. then add the bot to a group and make it admin and [extract the Chat ID](https://stackoverflow.com/a/32572159/882223).

Run a container as follows:

```sh
# Docker
docker run -d -e TELEGRAM_NOTIFIER_BOT_TOKEN=token -e TELEGRAM_NOTIFIER_CHAT_ID=chat_id -v /var/run/docker.sock:/var/run/docker.sock arefaslani/docker-telegram-notifier

# Docker Compose
curl -O https://raw.githubusercontent.com/arefaslani/docker-telegram-notifier/master/docker-compose.yml
docker-compose up -d
```

### Filter events by image name

By default all events are sent to Slack, but events can be filtered by the environment variable `image_regexp` as follows:

```sh
# show events only from node
-e image_regexp='^node:'

# show events but exclude from node
-e image_regexp='^(?!node:)'
```


## Contribution

Please let me know an issue or pull request.
