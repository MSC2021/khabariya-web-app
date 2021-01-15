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
                newsImage:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
               newsDescription:"दिल्ली सरकार ने चिकन के व्यापार और आयात पर लगे प्रतिबंध को हटाने का आदेश दिया है. इसके अलावा पोल्ट्री मार्केटखोलने के"
           },{
                newsImage:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1398%26cropX2%3D3908%26cropY1%3D594%26cropY2%3D3102",
               newsDescription:"दिल्ली सरकार ने चिकन के व्यापार और आयात पर लगे प्रतिबंध को हटाने का आदेश दिया है. इसके अलावा पोल्ट्री मार्केटखोलने के"
           },{
               newsImage:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202101/ajinkya_rahane_and_tim_paine_-1-sixteen_nine.jpg?size=1200:675",
               newsDescription:"दिल्ली सरकार ने चिकन के व्यापार और आयात पर लगे प्रतिबंध को हटाने का आदेश दिया है. इसके अलावा पोल्ट्री मार्केटखोलने के"
           }
       ],ListOfSimpleNews:[
            {
                newsImage:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202101/whatsapp_ja1jn-sixteen_nine.jpg?size=1200:675",
                newsHeadLine:"वॉट्सएप की नई प्राइवेट पॉलिसी को दिल्ली हाईकोर्ट में चुनौती, तुरंत रोक लगाने की मांग",
                newsContent:"वॉट्सएप की नई प्राइवेट पॉलिसी को दिल्ली हाईकोर्ट में चुनौती दी गई है. हाईकोर्ट में याचिका लगाई गई है कि वॉट्सएप की नई पॉलिसी के तहत कंपनी को यह अधिकार....र्ट में दाखिल याचिका में यह भी कहा गया है कि यह किसी भी व्यक्ति के राइट टू प्राइवेसी के अधिकार का उल्लंघन है. यह याचिका वकील चैतन्या रोहिल्ला की तरफ स."
            },
            {
                newsImage:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202101/whatsapp_ja1jn-sixteen_nine.jpg?size=1200:675",
                newsHeadLine:"वॉट्सएप की नई प्राइवेट पॉलिसी को दिल्ली हाईकोर्ट में चुनौती, तुरंत रोक लगाने की मांग",
                newsContent:"वॉट्सएप की नई प्राइवेट पॉलिसी को दिल्ली हाईकोर्ट में चुनौती दी गई है. हाईकोर्ट में याचिका लगाई गई है कि वॉट्सएप की नई पॉलिसी के तहत कंपनी को यह अधिकार....र्ट में दाखिल याचिका में यह भी कहा गया है कि यह किसी भी व्यक्ति के राइट टू प्राइवेसी के अधिकार का उल्लंघन है. यह याचिका वकील चैतन्या रोहिल्ला की तरफ स."
            },{
                newsImage:"https://akm-img-a-in.tosshub.com/aajtak/images/story/202101/khalistani-sixteen_nine.jpg?size=1200:675",
                newsHeadLine:"किसान आंदोलन: भारत आने की फिराक में हैं कई खालिस्तानी समर्थक, वीजा मिलने का इंतजार!",
                newsContent:"भारत विरोधी ताकतें दिल्ली में चल रहे किसान आंदोलन की आड़ में अपने खतरनाक मंसूबों को अंजाम देने की फिराक में हैं. इन ताकतों में तीन प्रमुख खालिस्तानी सं...यकर विभाग पंजाब के एक मशहूर गायक द्वारा किसान आंदोलन में की गई मदद और उसके स्रोत की जांच भी कर रहा है. उधर, विदेशों में बसे कई खालिस्तानी समर्थक भारत ."
            }
       ] 
    });
})

app.get('/news/details/:slug',(req,res)=>{
    res.render('newDetails');
});

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

app.listen(process.env.PORT || 3000, () => {
    console.log('The web server has started on port 3000');
});