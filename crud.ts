import { log } from 'console'
import express from 'express'
import "express-async-errors"
import morgan from 'morgan'


const app = express()
const port = 3001

app.use(morgan("dev"))
app.use(express.json())//questo per il post

type Planet = {
    id: number,
    name: string,
};

type Planets = Planet[];

let planets: Planets = [
    {
        id: 1,
        name: "Earth",
    },
    {
        id: 2,
        name: "Mars",
    },
];

app.get("/api/planets", (req, res) => {
    res.status(200).json(planets)
})

app.get('/api/planets/:id', (req, res) => {
    const { id } = req.params;
    const planet = planets.find((p) => p.id === Number(id))
    res.status(200).json(planet)
})


app.post('/api/planets', (req, res) => {
    const { id, name } = req.body;
    const newPlanet = { id, name };
    planets = [...planets, newPlanet];

    console.log(planets);


    res.status(201).json({ msg: 'new planet created' })
});

app.put("/api/planets/:id", (req, res) => {
    const { id } = req.params
    const { name } = req.body
    planets = planets.map(p => p.id === Number(id) ? ({ ...p, name }) : p)

    console.log(planets);

    res.status(200).json({ msg: 'planet addes' })

})

app.delete("/api/planets/:id", (req, res) => {
    const { id } = req.params
    planets = planets.filter(p => p.id !== Number(id))

    res.status(200).json({ msg: "Freezer ha distrutto il pianeta" })
})





app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
})
