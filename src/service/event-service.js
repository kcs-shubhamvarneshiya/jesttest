const axios = require('axios')

const events = (s_id, result) => {
    const parameters = {
        method: 'GET',
        url: 'https://flashlive-sports.p.rapidapi.com/v1/events/list',
        params:
        {
            locale: 'en_INT',
            sport_id: s_id,
            indent_days: '0',
            timezone: '-4'
        },
        headers: {
            'X-RapidAPI-Key': '39ee93099amsh90a94bf48362163p15e903jsnc3338d887776',
            'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
        }
    };

    axios.request(parameters).then((response) => {
        result(null, response.data)

    }).catch((error) => {
        result(error.message)
    });
}


module.exports = events