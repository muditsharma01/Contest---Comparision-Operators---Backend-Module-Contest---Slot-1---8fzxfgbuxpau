const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Connect to MongoDB
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const url = process.env.MONGO_URL || 'mongodb://localhost:27017/users'; // Update the default URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Optional: Seed the database with initial data
    // Uncomment the line below if needed
    // seedDatabase();
    
    // Start the server after successfully connecting to the database
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if there's an error connecting to the database
  });

// Optional: Seed the database with initial data
function seedDatabase() {
  const initialUsers = [
    { username: 'johndoe', email: 'johndoe@example.com', age: 20 },
    { username: 'janedoe', email: 'janedoe@example.com', age: 25 },
    // Add more initial user data if needed
  ];

  User.insertMany(initialUsers)
    .then(() => {
      console.log('Database seeded with initial data');
    })
    .catch((error) => {
      console.error('Error seeding database:', error.message);
    });
}
