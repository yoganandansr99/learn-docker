import os
from pymongo import MongoClient
from dotenv import load_dotenv

load_dotenv()

MONGODB_URL = os.getenv("MONGODB_URL", "mongodb://localhost:27017")
DATABASE_NAME = os.getenv("DATABASE_NAME", "userdb")

client = MongoClient(MONGODB_URL)
database = client[DATABASE_NAME]

def get_database():
    return database

def get_users_collection():
    return database.users
