const express = require('express');
const app = express();
// Middleware to parse JSON
app.use(express.json());

// Sample data
let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

// 1. GET method - Fetch all items
app.get('/items', (req, res) => {
    res.status(200).json(items);
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
// 2. POST method - Add a new item
app.post('/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// 3. PUT method - Update an item by ID
app.put('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    item.name = req.body.name || item.name;
    res.status(200).json(item);
});

// 4. DELETE method - Remove an item by ID
app.delete('/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex(item => item.id === id);

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    items.splice(itemIndex, 1);
    res.status(204).send(); // 204 No Content
});