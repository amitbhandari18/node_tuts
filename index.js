const express = require('express');
const path = require('path'); // it help to access the folders .

const app = express();
const publiPath = path.join(__dirname, 'public');

// app.use(express.static(publiPath));  //here static is used becuase it render the static files and use always use as middleware.

app.get('/', (req, res) => {
    res.sendFile(`${publiPath}/index.html`);
});  // we use this because it will not .html in our url that nobody know on which platform we created our site.

app.get('/about', (req, res) => {
    res.sendFile(`${publiPath}/about.html`);
});

app.get('/help', (req, res) => {
    res.sendFile(`${publiPath}/help.html`);
})
app.get('*', (req, res) => {
    res.sendFile(`${publiPath}/404.html`);
})



app.listen(3000, () => {
    console.log("server is connected !!!!");

})