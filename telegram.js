const {promisify} = require('util');
const Telegram = require('telegraf/telegram');

class TelegramClient {
  constructor(defaults) {
    this.telegram = new Telegram(process.env.TELEGRAM_NOTIFIER_BOT_TOKEN,
                                  defaults);
  }

  send(message) {
    this.telegram.sendMessage(
      process.env.TELEGRAM_NOTIFIER_CHAT_ID,
      message,
      { parse_mode: 'HTML' }
    );
  }

  async sendError(e) {
    await this.send(`Error: ${e}`);
  }
}

module.exports = TelegramClient;
