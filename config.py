from HTTP.HttpHoneyClient import HttpHoneyClient

VERBOSE_ALERT = 1
VERBOSE_WARNING = 3
VERBOSE_DEBUG = 5
VERBOSE_DETAIL = 10

logfilename = None
verboselevel = 0
retrieval_all = False
initial_URL = None
cache_response = False
honeyclient = HttpHoneyClient()
