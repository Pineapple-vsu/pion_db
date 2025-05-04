// const express = require("express");
// const bodyParser = require("body-parser");
// const passport = require("passport");
// const passportConfig = require("./passport");
// const userRoutes = require("./routes/user");
// const dishRoutes = require("./routes/dish");
// const mealRoutes = require("./routes/meal");
// const productRoutes = require("./routes/product");
// const eatingRoutes = require("./routes/eating");
// const componentRoutes = require("./routes/component");
// const authRoutes = require("./routes/auth");
// const authenticate = require("./middleware/auth");
// const { morganMiddleware, dbLogger } = require("./config");
// const { swaggerUi, swaggerDocs } = require("./swagger");
// const { sequelize } = require("./models");

// // Подключаем базу данных
// const DataBase = require("./database");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// // passportConfig(passport);
// // app.use(passport.initialize());

// // Morgan middleware для логирования HTTP-запросов
// app.use(morganMiddleware);

// // Swagger
// // app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// // app.use("/auth", authRoutes);
// // app.use("/user", authenticate, userRoutes);
// app.use("/dish", authenticate, dishRoutes);
// // app.use("/meal", authenticate, mealRoutes);
// // app.use("/product", authenticate, productRoutes);
// // app.use("/eating", authenticate, eatingRoutes);
// // app.use("/component", authenticate, componentRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello from nodejs");
// });

// //404
// app.use((req, res, next) => {
//   res.status(404).json({ error: "Not Found" });
// });

// if (require.main === module) {
//   app.listen(PORT, async () => {
//     await DataBase.connect();
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });
// }

// module.exports = app;

// //node src/index.js

const express = require("express");
const bodyParser = require("body-parser");
const flowerRoutes = require("./routes/flower");
const orderRoutes = require("./routes/order");
const posyRoutes = require("./routes/posy");
const flowerTypeRoutes = require("./routes/flower_type");
const packageRoutes = require("./routes/package");
const statusRoutes = require("./routes/status");
const recommendationRoutes = require("./routes/recommendation");
const path = require("path");
// Подключение к базе данных
const DataBase = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Подключение маршрутов
app.use("/api/flower", flowerRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/posy", posyRoutes);
app.use("/api/flower_type", flowerTypeRoutes);
app.use("/api/package", packageRoutes);
app.use("/api/status", statusRoutes);
app.use("/api/recommendation", recommendationRoutes);

app.use("/image", express.static("src/image"));

app.get("/", (req, res) => {
  res.send("Welcome to the flower shop API!");
});

// 404 обработка ошибок
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Запуск сервера
if (require.main === module) {
  app.listen(PORT, async () => {
    await DataBase.connect();
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
