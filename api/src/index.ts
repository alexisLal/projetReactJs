import express from 'express';
import cors from 'cors';

const travelsList = [
    {
        id: 1,
        name: "Paris",
        city: "Paris",
        country: "France",
        image: "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
        description: "Paris is known for its iconic landmarks like the Eiffel Tower, art museums like the Louvre, and its romantic atmosphere."
    },
    {
        id: 2,
        name: "New York City",
        city: "New York",
        country: "USA",
        image: "https://www.planetware.com/photos-large/USNY/new-york-city-empire-state-building.jpg",
        description: "New York City is famous for its skyline, Central Park, Times Square, and vibrant cultural life."
    }
];

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://localhost:5173',
    methods: 'GET, POST, PUT, DELETE',
 
}));

app.get('/', (req, res) => {
    res.send('Hello, DC4Dev!');
});

app.get('/travels', (req, res) => {
    res.send(travelsList);
});

app.post('/travels', (req, res) => {
    const travel = req.body;
    travel.id = travelsList.length + 1;
    travelsList.push(travel);

    res.send('travel ' + travel.id + ' successfully created');
});

app.delete('/travels/:id', (req, res) => {
    const id = req.params.id;
    // console.log(req.params.id);
    const travel = req.params.id;
    travelsList.slice();

    // res.send('travel ' + travel.id + ' successfully deleted');
});

app.get('/travels/:id', (req, res) => {
    res.send('teuteu');
});

app.put('/travels/:id', (req, res) => {
    res.send('update a travel');
    console.log('update a travel');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
})