const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const sequelize = require("./connection/db");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicantRoutes = require("./routes/applicantRoutes");
const interviewRoutes = require("./routes/interviewRoutes");

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api", jobRoutes);
app.use("/api", applicantRoutes);
app.use("/api", interviewRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synced successfully!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
