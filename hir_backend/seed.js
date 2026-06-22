const dotenv = require("dotenv");
const connectDB = require("./db/dbconnnect");

dotenv.config();

async function seedAdmin() {
  try {
    // Connect to database
    const db = await connectDB();

    const usersCollection = db.collection("users");

    // Check if admin already exists
    const existingAdmin = await usersCollection.findOne({
      email: "admin@gmail.com",
    });

    if (existingAdmin) {
      console.log("✅ Admin already exists.");
      process.exit(0);
    }


    // Insert admin
    await usersCollection.insertOne({
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin",
      createdAt: new Date(),
    });

    console.log("✅ Admin created successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating admin:", error);
    process.exit(1);
  }
}

seedAdmin();