# CRUD_Nodejs_api  
GEOGO Full Stack Web Development Internship  
Assignment 4  
CREATE API to get details of a single Post  
UPDATE and DELETE a Post as well  
CRUD operation using Node Js Express and MongoDB  

const app = express()  

mongoose is used to connect server with database  
mongoose.connect() method connects the database with server  

app.post() is used to create Post API  
app.get() is used to read data on the server  
app.patch() is used to update the Post and model.findByIdAndUpdate() is used to find the post to update  
app.delete() is used to delete post  

Postman is used to check our API is working or not  


![Screenshot (3246)](https://user-images.githubusercontent.com/78440942/146665719-2cba393c-d35f-4fe5-af64-b220edaea3a0.png)  

It works as shown above...  

MongoDB database is created and all the post are saved in it as shown below  
MongoDB compass is used  


![Screenshot (3247)](https://user-images.githubusercontent.com/78440942/146665848-3b00b347-2b65-47a2-9bc2-0d7ecbca8f22.png)
