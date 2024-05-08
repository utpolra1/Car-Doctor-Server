{
    "version": 2,
    "builds": [
      {
        "src": "index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      { "src": "/services", "dest": "/services.js" },
      { "src": "/services/:id", "dest": "/services.js" }
    ]
  }