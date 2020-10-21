const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");

// import routes
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

const PORT = config.PORT || 5000;

const app = express();

// CORS Middleware
app.use(cors());
// Bodyparser middleware
app.use(bodyParser.json());

// apply routes
app.use("/product", productRoutes);
app.use("/order", orderRoutes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

// DB config
// const db = `${config.MONGO_URI}/${config.MONGO_DB_NAME}`;
const db = `${config.MONGO_URI}`;

// connect moongose
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	}) // Adding new mongo url parser
	.then(() => console.log("MongoDB Connected..."))
	.catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
