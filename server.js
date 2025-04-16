const express = require('express')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get('/climate', (req,res) => {
    res.redirect('https://github.com/VirtualFade/Climate-Crisis');
});

app.get('/typesetting', (req,res) =>{
    res.redirect('https://github.com/VirtualFade/typesetting');
});

app.get('/algo', (req,res) => {
    res.redirect('https://github.com/VirtualFade/four-sorting-algorithm');
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});