const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('loadash');

const homeStartingContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas id cupiditate possimus consectetur amet tempore! Modi iusto molestiae at facere ipsa suscipit reprehenderit nesciunt in? Necessitatibus porro excepturi sed eaque ducimus facilis totam accusantium ratione. Beatae, sed quo ipsum mollitia ut possimus velit eligendi asperiores tempore molestiae quae sunt corrupti quibusdam debitis porro pariatur est dicta iste provident quia? Voluptates reiciendis error sed quis fugiat a. Error, reprehenderit perferendis!";
const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas id cupiditate possimus consectetur amet tempore! Modi iusto molestiae at facere ipsa suscipit reprehenderit nesciunt in? Necessitatibus porro excepturi sed eaque ducimus facilis totam accusantium ratione. Beatae, sed quo ipsum mollitia ut possimus velit eligendi asperiores tempore molestiae quae sunt corrupti quibusdam debitis porro pariatur est dicta iste provident quia? Voluptates reiciendis error sed quis fugiat a. Error, reprehenderit perferendis!";
const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti voluptas id cupiditate possimus consectetur amet tempore! Modi iusto molestiae at facere ipsa suscipit reprehenderit nesciunt in? Necessitatibus porro excepturi sed eaque ducimus facilis totam accusantium ratione. Beatae, sed quo ipsum mollitia ut possimus velit eligendi asperiores tempore molestiae quae sunt corrupti quibusdam debitis porro pariatur est dicta iste provident quia? Voluptates reiciendis error sed quis fugiat a. Error, reprehenderit perferendis!";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let posts = [];

app.get('/', (req, res) => {
  res.render('home', {
    home: homeStartingContent,
    blogs: posts
  });

  console.log(posts);
});

app.get('/about', (req, res) => {
  res.render('about', { about: aboutContent });
});

app.get('/contact', (req, res) => {
  res.render('contact', { contact: contactContent });
});

app.get('/compose', (req, res) => {
  res.render('compose');
});

app.get('/post/:postName', (req, res) => {
  const requestedTitle = req.params.postName;

  posts.forEach((post) => {
    const storedTitle = post.title;

    if(storedTitle === requestedTitle){
      console.log('match found');
    }else{
      console.log('not a match');
    }
  })
})

app.post('/', (req, res) => {

});

app.post('/compose', (req, res) => {
  let item = {
    title: req.body.$title,
    post: req.body.$post
  };
  posts.push(item);

  res.redirect('/');
});

const port = 4000;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
