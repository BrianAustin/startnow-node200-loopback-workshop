module.exports = {
  "MongoDB": {
    "name": "MongoDB",
    "connector": "mongodb",
    "url": process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGOHQ_URL
  }
}