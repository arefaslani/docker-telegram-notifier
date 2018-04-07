const {Seq} = require('immutable');
const Docker = require('dockerode');
const TelegramClient = require('./telegram');
const JSONStream = require('JSONStream');
const templates = require('./templates');

const imageRegExp = new RegExp(process.env.image_regexp);
const docker = new Docker();
const telegram = new TelegramClient();

async function sendEvent(event) {
  console.info(event);
  if (imageRegExp.test(event.from)) {
    const template = templates[`${event.Type}_${event.Action}`];
    if (template) {
      const attachment = template(event);
      await telegram.send(attachment)
    }
  }
}

async function sendEventStream() {
  const eventStream = await docker.getEvents();
  eventStream.pipe(JSONStream.parse())
    .on('data', event => sendEvent(event).catch(handleError))
    .on('error', handleError);
}

async function sendVersion() {
  const version = await docker.version();
  const text = 'Docker is running';
  Seq(version).map((value, title) => text += `${title}: <b>${value}</b>`);
  telegram.send(text);
}

async function main() {
  await sendVersion();
  await sendEventStream();
}

function handleError(e) {
  console.error(e);
  telegram.sendError(e).catch(console.error);
}

main().catch(handleError);
