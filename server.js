const express = require('express');

const app = express();

app.set('port', (process.env.API_PORT || 3001));

app.get('/test', (req, res) => {
    res.json('yo supppp');
});

app.listen(app.get('port'));
