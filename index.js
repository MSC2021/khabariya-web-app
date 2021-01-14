const express = require('express');
const exphbs = require('express-handlebars');
var path = require('path');
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

//setting public folder
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('views/images')); 
app.set('view engine', 'hbs');

app.get('/',(req,res)=>{
    res.render('home',{
        style:'home.css',
       videoNews:[
           {
                newsImage:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202101/jasprit_bumrah-1-sixteen_nine.jpg?size=1200:675",
               newsDescription:"दिल्ली सरकार ने चिकन के व्यापार और आयात पर लगे प्रतिबंध को हटाने का आदेश दिया है. इसके अलावा पोल्ट्री मार्केटखोलने के"
           },{
                newsImage:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202101/jasprit_bumrah-1-sixteen_nine.jpg?size=1200:675",
               newsDescription:"दिल्ली सरकार ने चिकन के व्यापार और आयात पर लगे प्रतिबंध को हटाने का आदेश दिया है. इसके अलावा पोल्ट्री मार्केटखोलने के"
           },{
               newsImage:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202101/ajinkya_rahane_and_tim_paine_-1-sixteen_nine.jpg?size=1200:675",
               newsDescription:"दिल्ली सरकार ने चिकन के व्यापार और आयात पर लगे प्रतिबंध को हटाने का आदेश दिया है. इसके अलावा पोल्ट्री मार्केटखोलने के"
           }
       ] 
    });
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