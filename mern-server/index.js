const express = require('express')
const app = express()
const port =process.env.PORT||3000
const cors= require('cors')

//middleware
app.use(cors());
app.use(express.json()) //Both this to connect frontend

//VSO15ob4U9dAfWrK - Password mongoDB
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//MongoDB configuration

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://mern-book-store:VSO15ob4U9dAfWrK@navneeth97.eg1r3.mongodb.net/?retryWrites=true&w=majority&appName=Navneeth97";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Create a collection of documents
    const bookCollections = client.db("BookInventory").collection("Books");

    // Insert a book to the db using POST method
    app.post("/upload-book", async (req,res) => {     //Go to mongoDB CRUD usage examples website to get the code to upload collection of documents.
      const data = req.body;//To show in console terminal
      const result = await bookCollections.insertOne(data);// To insert those documents in to result passed from data.
     res.send(result)
    })
    // app.get("/all-books",async (req,res) => {
    //   const books = bookCollections.find();
    //   const result = await books.toArray();
    //   res.send(result) 
    // })

    //update a book using patch method
    app.patch("/book/:id", async (req,res) => {
      const id = req.params.id;
      const updateBookData = req.body;

      // Create a filter for books with the id"
    const filter = { _id: new ObjectId(id) };

    /* Set the upsert option to insert a document if no documents match
    the filter */
    const options = { upsert: true };

    // Specify the update to set a value for the title field
    const updateDoc = {
      $set: {
        ...updateBookData
      },
    };
    // Update the first document that matches the filter
    const result = await bookCollections.updateOne(filter, updateDoc, options);
      res.send(result)
    })

    // Delete a book using delete method
    app.delete("/book/:id", async (req,res) => {
      const id = req.params.id;
      const result = await bookCollections.deleteOne({ _id: new ObjectId(id) });
      res.send(result)
    })
  
    //find by category
    app.get("/all-books",async (req,res) =>{
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category}
      }
      const result = await bookCollections.find(query).toArray();
      res.send(result);
    })

    //get single books
    app.get("/book/:id",async (req,res) => {
      const id = req.params.id;
      const book = await bookCollections.findOne({ _id: new ObjectId(id) });
      res.send(book)
    })
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})