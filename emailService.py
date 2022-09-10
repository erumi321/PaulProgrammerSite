import smtplib

import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
import google.auth.transport.grpc

import requests

import json
from datetime import date

def sendEmail(to, subject, body):
    gmail_user = 'paulprogrammerspeaks@gmail.com'
    gmail_password = 'mzxzecjwmrtlkrmy'

    sent_from = gmail_user

    email_text = """\
From: %s
To: %s
Subject: %s

%s
""" % (sent_from, to, subject, body)

    try:
        smtp_server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
        smtp_server.ehlo()
        smtp_server.login(gmail_user, gmail_password)
        smtp_server.sendmail(sent_from, to, email_text)
        smtp_server.close()
        print ("Email sent successfully!")
    except Exception as ex:
        print ("Something went wrong….",ex)


cred = credentials.Certificate("credentials.json")
app = firebase_admin.initialize_app(cred)
db = firestore.client()

users_ref = db.collection(u'subbedUsers')
docs = users_ref.stream()

currentQuote = ""

with open("quotes.json", "r") as quotes:
    todays_date = date.today()
    text = quotes.read()
    y = json.loads(text)

    index = (todays_date.year * (todays_date.month - 1) * todays_date.day) % len(y)

    currentQuote = y[index]['text']


for doc in docs:
    sendEmail(doc.to_dict()['email'], "Paul Programmer Speaks his words of wisdom upon thee", currentQuote)

