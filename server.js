//Step 1 import mongoose
const mongoose = require('mongoose');

//Step :2  mongodb connection string
const uri = 'mongodb://localhost:27017/admin';

// Step 3: Connect to MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');
        // Call the function to retrieve a value
        getSingleValue();
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Step 4: Define a simple schema and model
const ItemSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Item = mongoose.model('rk2', ItemSchema);

// Step 5: Function to retrieve value(s)
async function getSingleValue() {
    try {
        const item = await Item.find(); 
        if (item) {
            console.log('Retrieved Item:', item);
        } else {
            console.log('No item found');
        }
    } catch (error) {
        console.error('Error retrieving item:', error);
    } finally {
// Step 6: Close the connection
        mongoose.connection.close();
    }
}