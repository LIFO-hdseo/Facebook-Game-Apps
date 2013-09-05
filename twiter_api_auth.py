import request

TWITER_SEARCH_GET_REQUEST_v1 = 'http://search.twitter.com/search.json'
param = {'q':'python'}
response_deprecated = request.get(TWITTER_SEARCH_GET_REQUEST_v1, params=params)

response.text

#output:u'{"errors":[{"message":"Bad Authentication data", "code":215}]}'


