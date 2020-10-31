from bs4 import BeautifulSoup
import requests
import emailer
import time
import sys 

def get_price(URL):
    headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36"}
    page = requests.get(URL,headers=headers)
    print(page.content)
    soup = BeautifulSoup(page.content,'html.parser')
    price = soup.find(id="priceblock_ourprice").get_text()
    currency = price[0]
    return currency

def Amazon_Scraper(URL):
    filtered_price = ""
    digits = ["1","2","3","4","5","6","7","8","9","0","."]
    headers = {"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36"}

    page = requests.get(URL,headers=headers)
    soup = BeautifulSoup(page.content,'html.parser')

    title = soup.find(id="productTitle").get_text().strip()
    price = soup.find(id="priceblock_ourprice").get_text()
    currency = price[0]
    l_price = []
    i=0
    while i<len(price):
        l_price.append(price[i])
        i = i + 1


    for element in l_price:
        for d in digits:
            filtered_price += d if element == d

    converted_price = float(filtered_price)
    return converted_price , currency , title


amazon_url = input("Amazon Url : ")
currency = get_price(amazon_url)
print("\n \n")
budget = float(input("Your Budget (in " + currency + ") : "))

while True:
    converted_price , currency , title = Amazon_Scraper(amazon_url)
    if converted_price <= budget:
        message = "The Article : '"+title + "' priced at " + currency + "" + str(converted_price) + " Is affordable !!  Here is the link to buy it: \n "+ amazon_url
        emailer.send_email(message)
        sys.exit(0)

    else:
        time.sleep(300)
        pass

