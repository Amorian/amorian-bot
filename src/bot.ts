import { Client, Message } from "discord.js";
import { inject, injectable } from "inversify";
import { TYPES } from "./types";

@injectable()
export class Bot {
  private client: Client;
  private readonly token: string;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string
  ) {
    this.client = client;
    this.token = token;
  }

  public async listen(): Promise<string> {
    this.client.on("messageCreate", (message: Message) => {
      if (message.author.bot) {
        return;
      }
      console.log("Message: ", message.content);
      message.channel.send(message.content);
    });

    return this.client.login(this.token);
  }
}
