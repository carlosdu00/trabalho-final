import express from "express";

import userRoutes from "./userRoutes";
import teamRoutes from "./userRoutes";
import reviewRoutes from "./userRoutes";
const appRouter = express();

appRouter.use("/users", userRoutes);
appRouter.use("/teams", userRoutes);
appRouter.use("/reviews", userRoutes);

export default appRouter;