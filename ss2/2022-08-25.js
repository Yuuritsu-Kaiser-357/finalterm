let animals =[
	{name:"cat",
	size:"small",
	weight:"5"},
	{name:"dog",
	size:"small",
	weight:"7"},
	{name:"elephant",
	size:"big",
	weight:"5000"},
]
console.log(animals.map(v=>v.name));
console.log(animals.filter(v=>v.weight<1000).map(v=>v.name));