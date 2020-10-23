from __future__ import absolute_import, print_function

from tweepy import OAuthHandler, Stream, StreamListener, API
import json
import re

consumer_key="put here your consumer key"
consumer_secret="put here your consumer secret"
access_token="put here your access token"
access_token_secret="put here your access token secret"

class StdOutListener(StreamListener):
    """ A listener handles tweets that are received from the stream.
    This is a basic listener that just prints received tweets to stdout.
    """
    def on_data(self, data):
        twittes = []
        new_data = data.replace('}{', '},{').replace('}\n{', '},{')
        json_data = json.loads(f'[{new_data}]')
        for d in json_data:
            twittes.append(d)
                
        for twitte in twittes:
            if "created_at" in twitte:
                if twitte["user"]["id"] in [user.id]:
                    if "truncated" in twitte:
                        if twitte["truncated"] == True:
                            print(twitte["extended_tweet"]["full_text"])
                        else:
                            print(twitte["text"])
        return True

    def on_error(self, status):
        print('error')
        print(status)

if __name__ == '__main__':
    l = StdOutListener()
    auth = OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)
    
    api = API(auth)
    
    
    user = api.get_user('put here the @ from twitter you want to stream')
    
    id = str(user.id)
    stream = Stream(auth, l)
    stream.filter(follow=[id])