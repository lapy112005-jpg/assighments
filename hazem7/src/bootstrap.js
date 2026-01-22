import express from "express";
import { authRouters, commentRouters, postRouters, userRouters } from "./modules/index.js";
import { PORT } from "../config/configService.js";
import { checkConnection } from "./DB/connection.js";
import { userModel } from "./DB/model/userModel.js";
import { postModel } from "./DB/model/postModel.js";
import { commentModel } from "./DB/model/commentModel.js";







async function bootstrap() {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res, next) => {
    res.json({ message: "landing page" });
  });

  app.use("/auth", authRouters);
  app.use("/user", userRouters);
  app.use("/post", postRouters);
  app.use("/comment", commentRouters);

  app.use((err, req, res, mext) => {
    const status = err.cause?.status ??500;
    res.status(status).json({ err_msg: status==500? err.message :"somthing went wrong"  , stack:err.stack});
  });



  await checkConnection()
  await userModel.sync({force:false , alter:false})
  await postModel.sync()
  await commentModel.sync({alter:true , force: false})
  const port = PORT
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

export default bootstrap;
