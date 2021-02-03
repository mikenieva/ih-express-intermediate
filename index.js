// 1. IMPORTACIONES
const express       = require('express')
const hbs           = require('hbs')
const path          = require("path")
const app           = express()

const Punk          = require("punkapi-javascript-wrapper")

// 2. MIDDLEWARES

app.use(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname,"views"))
app.set("view engine", "hbs")

const punkAPI = new Punk()

// punkAPI.getRandom()
//     .then((objetoDeChelitas) => {
//         console.log(objetoDeChelitas)
//     })




// 3. RUTAS

app.get("/", (request, response, next) => {
    response.render("index")
})

app.get("/players", (request, response, next) => {
    response.render("players")
})

app.get("/teams", (request, response, next) => {
    response.render("teams")
})

app.get("/bebidaspaljugador", (request, response, next) => {

    const getBeerRandom = async () => {
        const chelitaRandom = await punkAPI.getRandom()

        response.render("bebidaspaljugador", { // ESTE OBJETO SE LLAMA THIS
            datoschelitas: chelitaRandom // chelitaRandom es un array
        })

    }
    getBeerRandom()

})

// /EX1
app.get("/ex1", (request, response, next) => {

    let datos = {
        name: "Mike Nieva",
        age: 0,
        bootcamp: "Ironhack WD",
        mensaje: "<p><u>Estoy subrayado</u></p>",
        comidasFavoritas: [
            "Pizza", 
            "Chilaquiles",
            "Tacos de arrachera con queso del VILSITO",
            "Helado"
        ],
        lenguajes: {
            frontend: "JavaScript",
            backend: "Ruby",
            db: [
                "MySQL",
                "MongoDB"
            ]
        }
    }
    
    response.render("ex1", datos)
})


// 4. LEVANTAMIENTO DEL SERVIDOR
app.listen(3000, () => {
    console.log("Servidor prendido")
})

