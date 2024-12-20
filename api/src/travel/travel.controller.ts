import Router from "express";
import { findAll, findOne, remove, create, update } from "./travel.service";
const router = Router();

router.get("/", async (req, res) => {
    const travels = await findAll();

    res.send(travels);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;

    const travel = await findOne(+id);
    res.send(travel);
});

router.put("/update/:id", async (req, res) => {
    const { id } = req.params;

    const travel = await update(+id, req.body);

    res.send(travel);
});

router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;

    const travel = remove(+id);
    
    res.send(travel);
});

router.post("/", async (req, res) => {
    const travel = await create(req.body);
    console.log(travel);

    res.send(travel);
});

export default router;
