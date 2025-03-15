const axios=require('axios');

module.exports.getAllCountries=async ()=>{
    try{
        const res=await axios.get("https://www.apicountries.com/countries");
        const countries=res.data.map(country=>country.name);
        return countries;
    }catch(e){
        console.log("Error while getting countries", e);
        return[];
    }
}
