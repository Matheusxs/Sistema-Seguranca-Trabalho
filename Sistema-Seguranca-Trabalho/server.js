const express = require('express');
const app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/jogo-memoria', express.static(path.join(__dirname, 'public')));
app.use('/login', express.static(path.join(__dirname, 'public')));
app.use('/cadastro', express.static(path.join(__dirname, 'public')));
app.use('/validar-email', express.static(path.join(__dirname, 'public')));
app.use('/admin', express.static(path.join(__dirname, 'public')));


app.listen(process.env.PORT || 80, () => {
    console.log('Example app listening on port 3000!');
});