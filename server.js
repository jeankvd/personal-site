const express = require('express')
const next = require('next')

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

server.get("/product/:slug", (req, res) => {
    return app.render(req, res, "/product", { slug: req.params.slug })
  })