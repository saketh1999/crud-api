
# CRUD API with MongoDB and Custom Schema
This is a CRUD API demonstrating the creation, retrieval, update, and deletion of data using a MongoDB database and a custom schema.

## Tech Stack  

**Client:** PostMan, ThunderClient

**Server:** Node, Express


## Learnings 
1. Mongoose for Schema Definition:

Mongoose provides a layer of abstraction over MongoDB, allowing you to define custom schemas for your data.
The schema defines the structure of your documents, including data types, validation rules, and relationships between fields.
This ensures data consistency and simplifies data manipulation.

2. Express for API Endpoints:

Express is a popular Node.js framework for building web applications and APIs.
It allows you to define routes for different HTTP methods (GET, POST, PUT, DELETE) corresponding to CRUD operations.
Each route handler can perform the necessary database operations using Mongoose.

3. CRUD Operations with MongoDB:

Create: Use insertOne or create methods in Mongoose to create new documents in the collection.
Retrieve: Use find or findById methods to retrieve documents based on specific criteria.
Update: Use findByIdAndUpdate method to update existing documents with new data.
Delete: Use findByIdAndDelete method to remove documents from the collection.

4. Customizing the API:

The provided example serves as a starting point. You can customize the schema, endpoints, and functionalities based on your specific data model and application requirements.
Additional features like error handling, authentication, and authorization can be implemented to enhance the robustness and security of the API.

5. Importance of Configuration:

Remember to update the MongoDB connection string in the configuration file with your own credentials.
The schema definition file (your-schema-name.js) needs to be modified to reflect the structure of your data.

## Run Locally  

Clone the project  

~~~bash  
  git clone https://link-to-project
~~~

Go to the project directory  

~~~bash  
  cd my-project
~~~

Install dependencies  

~~~bash  
npm install -y
~~~

Create a MongoDB Cluster
~~~bash  
Link: https://www.mongodb.com/resources/products/fundamentals/mongodb-cluster-setup
~~~

Connect to MongoDB Cluster
~~~bash  
Link: https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database
~~~

Start the server  

~~~bash  
npm run serve
~~~
