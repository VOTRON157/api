import express from "express";
import routes from "./routes/user.routes";
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use("/users", routes);

app.listen(PORT, () => {
    console.log(`API online, url base: http://localhost:${PORT}`);
})