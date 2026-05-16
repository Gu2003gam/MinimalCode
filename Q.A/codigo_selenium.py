from selenium import webdriver

navegador = webdriver.Chrome() 
navegador.get("https://www.google.com")
navegador.maximize_window()