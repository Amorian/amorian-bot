require("dotenv").config();

import { TYPES } from "./types";
import { Bot } from "./bot";
import { container } from "./inversify.config";

let bot = container.get<Bot>(TYPES.Bot);

bot
  .listen()
  .then(() => console.log("Log in successful"))
  .catch((error) => console.log("Log in failed"));
