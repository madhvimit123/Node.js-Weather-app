const request=require('request')



const forecast=(latitude,longitude,callback)=>{
    const url='https://api.darksky.net/forecast/89ee8d8108704be4c354c2dcabb782e4/'+latitude+','+longitude+'?units=si';
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather service!',undefined)
        }else if(body.error){
            callback('Unable to find location',undefined)
        }else{
            //console.log(body.daily.data[0])
            callback(undefined,body.daily.data[0].summary+'. It is currently '+body.currently.temperature+' degrees out. This high today is a '+ body.daily.data[0].temperatureHigh+ ' with a low of '+ body.daily.data[0].temperatureLow +'. There is '+body.currently.precipProbability+'% chance of rain.')
           // console.log()
        }
    })
}

module.exports=forecast