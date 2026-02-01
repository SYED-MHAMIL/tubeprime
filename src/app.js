import express from "express";
    import cors from "cors";

const app = express();
app.use(
  cors({
    origin: "localhost:3000",
  }),
);
app.use(express.urlencoded({extended:true}))
app.use(express.json())





// TODO
//  ALL THERE ROUTES AND MIDLDE HANDLE

export { app };
