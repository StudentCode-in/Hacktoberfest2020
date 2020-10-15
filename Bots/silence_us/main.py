import discord
import os

token = os.getenv("TOKEN")

class MyClient(discord.Client):
    async def on_ready(self):
        print('Logged on as', self.user)

    async def on_message(self, message):
        # don't respond to ourselves
        if message.author == self.user:
            return

        if message.content == '!playing':
            #Improvement: Verify if the bot has mute permission
            if message.author.voice and message.author.voice.channel:
                channel = message.author.voice.channel
                for member in channel.members:
                    await member.edit(mute = True)
                await message.channel.send('Shhhhhhhhh!')
            else:
                await message.channel.send("You are not connected to a voice channel")
                return


        if message.content == '!meeting':
            if message.author.voice and message.author.voice.channel:
                channel = message.author.voice.channel
                for member in channel.members:
                    await member.edit(mute = False)
                await message.channel.send('You can speak now!')
            else:
                await message.channel.send("You are not connected to a voice channel")
                return

client = MyClient()
client.run(token)