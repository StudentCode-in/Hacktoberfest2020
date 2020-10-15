## Example of Discord Bot to mute channel's members for Among Us game:
When in a Voice Channel, a member can tip '!playing' to mute all members in the same Voice Channel.
For unmute, just tip '!meeting'.

### Steps to set up the Bot:
- Go to https://discord.com/developers/applications and create a New Application
- On main menu, click Bot and Add Bot
- Copy the token and export as an environment variable called TOKEN
- In OAuth2 scopes check bot and browse to url generated
- Authorize the bot in your Discord's server
- Run the bot with 'python main.py' command
- Give permission to bot to Mute Members