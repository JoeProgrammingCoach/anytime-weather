// Velo API Reference: https://www.wix.com/velo/reference/api-overview/introduction

$w.onReady(function () {  
	$w('#tempRadio').onChange(() => {
        const selectedUnit = $w('#tempRadio').value;
        console.log("Selected Unit: ", selectedUnit);
    })
    $w('#enterButton').onClick(() => {
		const cityName = $w('#inputField').value;
        console.log("Button was clicked " + "\nCity selected was " + cityName);

	//const unit = $w('#tempRadio').checked ? 'imperial' : 'metric';
	//const apiKey = '7dc4703261b08dae5a9e117c8eed5831';
	//const url = 
	//`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=${apiKey}`;

	//fetch(url)
	//	.then(response => response.json())
	//	.then(data => {
	//		$w('#cityName').text = data.name;
	//		$w('#temperature').text = `${data.main.temp}`;
	//		$w('#weatherIcon').src = 
	//		`http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

	//		} 
	//	) 



   })

  

    $w('#checkbox1').onChange(()=>  {
		const cityName = $w('#inputField').value;
		console.log(cityName+" marked as favorite");
    })
	})
	