const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a503075bamsh9b181e45cd83f49p1f15e1jsnd40a4d14d044',
		'X-RapidAPI-Host': 'covid-19-coronavirus-statistics.p.rapidapi.com'
	}
};

fetch('https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));