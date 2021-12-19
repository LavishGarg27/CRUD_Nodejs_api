const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;

const mongoose = require('mongoose');

// Import models that we created
const Post = require('./src/models/NewPost')



// Application is defined
const app = express();
// define connection 
const db = mongoose.connect('mongodb://localhost:27017/post_node_api') 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// creating root route

// app.get('/', (req, res)=>{
//     res.send("Hello World")
// })

// CRUD operation is performed below:

//################### Let's create new post (first operation) ############

app.post('/posts',(req, res)=>{

    // Get values from request 
    const title = req.body.title ;
    const author = req.body.author;
    const content = req.body.content;

    // Assign values to Post Model that we created

    const firstPost = new Post();
    firstPost.title = title;
    firstPost.author = author;
    firstPost.content = content;

    // Save the post
    firstPost.save((error, savedPost)=>{
        if(error){
            // error status resposne
            res.status(500).send({error:'Unable to send Post'})
        }
        else{
            // Success status response
            res.status(200).send(savedPost);
        }
    })
    // res.send({title: title, author: author, content: content})
});


//#################### Let's read post (2nd Operation) #################//
// Lets use async-await method

app.get('/posts', async (req, res)=>{

    try{
        const postData = await Post.find();
        res.send(postData);
    }
    catch(e){
        res.send(e);
    }
})

// Lets read data with particular author name

app.get('/posts/:id', async (req, res)=>{

    try{
        const _id = req.params.id;
        const postData = await Post.findById(_id);
        // console.log(postData);
        res.send(postData);
    }
    catch(e){
        res.status(500).send(e);
    }
})


// ################## Let's Update post (3rd Operation) ##############
// Async Await method is used
// Let's update the posts by its id (because it is unique)
// patch method is used to update data

app.patch("/posts/:id", async (req,res)=>{

    try{
        const _id = req.params.id;
        const UpdatePostData = await Post.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        // console.log(UpdatePostData);
        res.send(UpdatePostData);
    }
    catch(e){
        res.status(404).send(e);
    }
})


// #################### Let's Delete Post (4th operation) ###########
// Async await is used
// Let's delete the posts by its Id 

app.delete('/posts/:id', async (req,res)=>{
    try{
        const _id = req.params.id;
        const DeletePostData = await Post.findByIdAndDelete(_id);
        // console.log(DeletePostData);
        if(!req.params.id){
            return res.status(404).send();
        }
        else{
            res.send(DeletePostData);
        }
    }
    catch(e){
        res.status(500).send(e);
    }
})


























app.listen(port, function(){
    console.log(`Server is running at port ${port}`);
})