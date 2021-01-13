const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

//changing extensions and creating helper functions
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers:{
        getElipseText(text) {
            if (text.length < 64) {
                return text;
            }

            return text.substring(0, 61) + '...';
        }
    }
}));

app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.send('hi');
})

app.get('/demo', function (req, res) {
    res.render('demo', {
        posts: [
                {
                author: 'Janith Kasun',
                image: 'https://picsum.photos/500/500',
                comments: [
                    'This is the first comment',
                    'This is the second comment',
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec fermentum ligula. Sed vitae erat lectus.'
                ]
            },
            {
                author: 'John Doe',
                image: 'https://picsum.photos/500/500?2',
                comments: [
                ]
            }
        ]
    });
});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});