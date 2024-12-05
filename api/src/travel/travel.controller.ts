import Router from "express";
import { findAll, findOne } from "./travel.service";
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

router.post("/", (req, res) => {
    res.send("create a travel");
});

// app.get('/', (req, res) => {
//     res.send('Hello, DC4Dev!');
// });

// app.get('/travels', (req, res) => {
//     res.send(travelsList);
// });

// app.post('/travels', (req, res) => {
//     const travel = req.body;
//     travel.id = travelsList.length + 1;
//     travelsList.push(travel);

//     res.send('travel ' + travel.id + ' successfully created');
// });

// app.delete('/travels/:id', (req, res) => {
//     const id = req.params.id;
//     // console.log(req.params.id);
//     const travel = req.params.id;
//     travelsList.slice();

//     // res.send('travel ' + travel.id + ' successfully deleted');
// });

// app.get('/travels/:id', (req, res) => {
//     res.send('teuteu');
// });

// app.put('/travels/:id', (req, res) => {
//     res.send('update a travel');
//     console.log('update a travel');
// });

export default router;
