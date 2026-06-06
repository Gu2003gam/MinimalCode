import requests
from bs4 import BeautifulSoup


link = 'https://quotes.toscrape.com/'
requisicao = requests.get(link)
site = BeautifulSoup(requisicao.text, 'html.parser')
print(site.prettify())