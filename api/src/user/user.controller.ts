import Router from "express";
import { findAll, findOne, remove, create, update } from "./user.service";
const router = Router();

router.get("/", async (req, res) => {
    console.log('test');
    const users = await findAll();

    res.send(users);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const user = await findOne(+id);
    res.send(user);
});

router.put("/update/:id", async (req, res) => {
    const { id } = req.params;

    const user = await update(+id, req.body);

    res.send(user);
});

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    const user = remove(+id);
    
    res.send(user);
});

router.post("/", async (req, res) => {
    const user = await create(req.body);
    console.log(user);

    res.send(user);
});

export default router;
