function showCountries(){
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://restcountries.com/v2/all', true)

    //This method is use to handle the response.
    xhr.onload = function(){
        if(xhr.status == 200){
            console.log('Successful')
            let countries = JSON.parse(this.response)
            console.log(countries)
            //Using forEach() methor to grab the coutries Array
            countries.forEach(country => {
                const countryDetail = document.createElement("div")
                countryDetail.innerHTML = country.name 
                document.getElementById('feed').appendChild(countryDetail) 
            })
        }
    }
    xhr.send()

    
}