
import app from "./app";
import { AppDataSource } from "./config/datasource";

AppDataSource.initialize().then(() => {
  app.listen(3000, () => console.log("Backend running on port 3000"));
});
