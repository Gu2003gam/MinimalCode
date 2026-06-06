from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By

options = Options()
options.add_experimental_option('detach', True)

servico = Service(ChromeDriverManager().install())

navegador = webdriver.Chrome(service=servico, options=options)

navegador.get('https://gu2003gam.github.io/BlueHorizon/')

email = navegador.find_element(By.ID, 'email')
senha = navegador.find_element(By.ID, 'senha')
email.click()
email.send_keys('seu_email@example.com')
senha.click()
senha.send_keys('sua_senha')

botao = navegador.find_element(By.ID, 'submit')
botao.click()