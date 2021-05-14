const express = require('express'),
    cors = require('cors');

const app = express();

const port = process.env.PORT || 8080

// middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('build'))

app.listen(port, () => console.log('Application listening at port:', port))