import express from "express";
import userRoutes from "./userRoutes";

const appRouter = express();

appRouter.use("/users", userRoutes);

export default appRouter;