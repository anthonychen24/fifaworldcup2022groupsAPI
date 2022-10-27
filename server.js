const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let worldCupGroups= {
    'group a': {
       'country1': 'Qatar',
       'country2': 'Ecuador',
       'country3': 'Senegal',
       'country4': 'Netherlands'
    },
    'group b': {
        'country1': 'England',
        'country2': 'Iran',
        'country3': 'United States',
        'country4': 'Wales'
     },
     'group c': {
        'country1': 'Argentina',
        'country2': 'Saudi Arabia',
        'country3': 'Mexico',
        'country4': 'Poland'
     },
     'group d': {
        'country1': 'France',
        'country2': 'Australia',
        'country3': 'Denmark',
        'country4': 'Tunisia'
     },
     'group e': {
        'country1': 'Spain',
        'country2': 'Costa Rica',
        'country3': 'Germany',
        'country4': 'Japan'
     },
     'group f': {
        'country1': 'Belgium',
        'country2': 'Canada',
        'country3': 'Morocco',
        'country4': 'Croatia'
     },
     'group g': {
        'country1': 'Brazil',
        'country2': 'Serbia',
        'country3': 'Switzerland',
        'country4': 'Cameroon'
     },
     'group h': {
        'country1': 'Portugal',
        'country2': 'Ghana',
        'country3': 'Uruguay',
        'country4': 'South Korea'
     },
     'group invalid':{
        'country': 'There are only 8 groups (a-h).'
     }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:group', (request, response) => {
    const groupLetter = request.params.group.toLowerCase()
    if(worldCupGroups[groupLetter]){
        response.json(worldCupGroups[groupLetter])
    }else{
        response.json(worldCupGroups['group invalid'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})