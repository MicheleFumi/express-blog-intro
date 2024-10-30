const express = require('express')
const app = express()
const host = 'http://127.0.0.1'
const port = 3000


app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})


app.get('/', (req, res) => {
    res.send('<H1>Benvenuti nel mio blog!</H1>')
  })

  const post = [
    {
        title: 'My First trip',
        content:'Visiting London for the first time!',
        img:'./public/img1.webbp',
        tags:['London, Traveller, Experience, HarryPotter']
},
{
    title: 'A Must See Place: Camden Town!',
    content:'Getting lost through the neighbor!',
    img:'./public/img2.webb',
    tags:['London, Traveller, CamdenLock, Cyberdog, Punk']
},
{
    title: 'Quick Stop At Embankment',
    content:'Enjoying the city view!',
    img:'./public/img3.webb',
    tags:['London, Traveller, RiverThames, Sunset, GoldenHour, CitySkyline ']
},
{
    title: 'The Royal Show',
    content:'Seeing the change of the guards live!',
    img:'./public/img4.webb',
    tags:['London, Traveller,Royal Palace, ChangeOfGuardsLondon, VisitLondon']
},
{
    title: 'Experience A True Pub Delicatessen',
    content:'at certain hour you must grab a pint!',
    img:'./public/img5.webb',
    tags:['London, Traveller, Beer, Pub']
},
]