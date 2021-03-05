import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { User } from '../../user';
//import { timeStamp } from 'console';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})




export class ForecastWidgetMainComponent implements OnInit {
  [x: string]: any;

  place: string ;
  
       array_1:any[]=new Array();
       array_3:any[]=new Array();
       array_2:any[]=new Array();
       array_id:any[]=new Array();
       array_url:any[]=new Array();
       location: any;
       day:String;
       cityName: FormGroup;
     

    ForecastData:any;
    PlaceData:any;
      
      constructor(private fb: FormBuilder) {
      }
     
    
   
     ngOnInit() {
      
       //this.getForecastData();
       this.cityName=this.fb.group({
         position:['',Validators.required]
       })
       this.getPlaceData();
       //this.getL();
       
       //console.log("data",this.ForecastData);
       
     }
     /*getL()
     {
      var inputValue = document.getElementById('userInput');
      console.log('showsomething!',inputValue );
     };*/
     //console.log('anything',place);

     getPlaceData(){

      

      
       let sayan = 'http://www.mapquestapi.com/geocoding/v1/address?key=JZZoiqiaoGiIVT0caxPGwPn9Y3G9qBDi&location='+this.place ;
     console.log('bb',sayan);
      
       fetch('http://www.mapquestapi.com/geocoding/v1/address?key=JZZoiqiaoGiIVT0caxPGwPn9Y3G9qBDi&location='+this.place)
       .then(response=>response.json())
       .then(data_1=>{this.setPlaceData(data_1);})
       
      }
      
      setPlaceData(data_1){
        
        this.PlaceData = data_1;
        console.log('nothing',this.PlaceData);
        this.PlaceData.latitude = (this.PlaceData.results[0].locations[0].latLng.lat);
        this.PlaceData.longitude = (this.PlaceData.results[0].locations[0].latLng.lng);
        console.log('lat',this.PlaceData.latitude);
        console.log('long',this.PlaceData.longitude);
        this.location = 'https://api.openweathermap.org/data/2.5/onecall?lat='+this.PlaceData.latitude+'&lon='+this.PlaceData.longitude+'&exclude=&appid=584bf6b74ec00821b83701b62a0491c0';
        console.log('testing',location);
        fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+this.PlaceData.latitude+'&lon='+this.PlaceData.longitude+'&exclude=&appid=584bf6b74ec00821b83701b62a0491c0')
       
       .then(response=>response.json())
       .then(data=>{this.setForecastData(data);})
       console.log('see',this.location);
      }
      
     //getForecastData(){

       //fetch(this.location)
       
      // .then(response=>response.json())
      // .then(data=>{this.setForecastData(data);})
      // console.log('see',this.location);
       
        
       
       
     //}
     //console.log("data",this.ForecastData)
      onSubmit(){
        this.place=this.cityName.controls.position.value;
        console.log('hello',this.place);
        this.getPlaceData()
       // this.setPlaceData(this.data_1)
      }
    

     setForecastData(data){
       //current weather data
        //console.log('see',this.ForecastData.daily[0].temp.min);
       this.ForecastData = data;
       console.log('see',this.ForecastData.daily[0].temp.min);
        //console.log('forecast',this.ForecastData)
      
       this.ForecastData.temp_now = (this.ForecastData.current.temp - 273.15).toFixed(0);
       this.ForecastData.temp_feels_like = (this.ForecastData.current.feels_like - 273.15).toFixed(0);
       this.ForecastData.humidity = (this.ForecastData.current.humidity).toFixed(0);
       this.ForecastData.wind = (this.ForecastData.current.wind_speed);
       this.ForecastData.description = (this.ForecastData.current.weather[0].description);
       document.getElementById('hello22').setAttribute( 'src',"http://openweathermap.org/img/w/"+this.ForecastData.current.weather[0].icon+".png"  )
       let currentDate = new Date ();
       //var day = currentDate.getDay();

       let sunsetTime = new Date(this.ForecastData.current.sunset);
       let sunriseTime = new Date(this.ForecastData.current.sunrise);
       this.ForecastData.isDay = (currentDate.getTime() < sunsetTime.getTime());
       
       
        //var i: any;
        
        //var start_date = currentDate;
        var day:any;
        var iconurl:any;

        //var dateObj = new Date();
        //var day = dateObj.getUTCDate()
        
        
        
        
        for (let index = 0; index<this.ForecastData.daily.length; index++) {
          var i=index;
          //console.log("in loop",this.ForecastData.daily[index].temp.max);
          if(new Date().getDay()+i<=6)
          {
          switch (new Date().getDay()+i) {
            case 0:
              day = "Sunday";
              break;
            case 1:
              day = "Monday";
              break;
            case 2:
              day = "Tuesday";
              break;
            case 3:
              day = "Wednesday";
              break;
            case 4:
              day = "Thursday";
              break;
            case 5:
              day = "Friday";
              break;
            case 6:
              day = "Saturday";
          }}
          else
          {
            switch (new Date().getDay()+i-7) {
              case 0:
                day = "Sunday";
                break;
              case 1:
                day = "Monday";
                break;
              case 2:
                day = "Tuesday";
                break;
              case 3:
                day = "Wednesday";
                break;
              case 4:
                day = "Thursday";
                break;
              case 5:
                day = "Friday";
                break;
              case 6:
                day = "Saturday";
            }

          }
          this.array_3.push(day);

          this.array_2.push((this.ForecastData.daily[index].temp.min-273).toFixed(0));
          this.array_1.push((this.ForecastData.daily[index].temp.max-273).toFixed(0));
          //console.log(index);
          
                 
        
          
         // this.ForecastData.tempmin_day[index]=(this.ForecastData.daily.temp.min-273).toFixed(0);
          //this.ForecastData.tempmax_day[index]=(this.ForecastData.daily.temp.max-273).toFixed(0);


        }
        
        console.log("entering", this.ForecastData.daily);
        /*for(let x=0;x<7;x++)
        {
          var j=0;
           this.array_id.push((this.ForecastData.daily[x].weather[j].icon));
        this.array_url.push(("http://openweathermap.org/img/w/"+this.array_id[x]+".png"));*/
        document.getElementById('hello0').setAttribute( 'src',"http://openweathermap.org/img/w/"+this.ForecastData.daily[0].weather[0].icon+".png"  );
        //j++;
        document.getElementById('hello1').setAttribute( 'src',"http://openweathermap.org/img/w/"+this.ForecastData.daily[1].weather[0].icon+".png"  );  
        //j++;
        document.getElementById('hello2').setAttribute( 'src',"http://openweathermap.org/img/w/"+this.ForecastData.daily[2].weather[0].icon+".png"  );
        //j++;

        document.getElementById('hello3').setAttribute( 'src',"http://openweathermap.org/img/w/"+this.ForecastData.daily[3].weather[0].icon+".png"  );
        //j++;
        document.getElementById('hello4').setAttribute( 'src',"http://openweathermap.org/img/w/"+this.ForecastData.daily[4].weather[0].icon+".png"  );
       // j++;
        document.getElementById('hello5').setAttribute( 'src',"http://openweathermap.org/img/w/"+this.ForecastData.daily[5].weather[0].icon+".png"  );
        //j++;

        console.log("entering loop");
        document.getElementById('hello6').setAttribute( 'src',"http://openweathermap.org/img/w/"+this.ForecastData.daily[6].weather[0].icon+".png"  );


        

        




        };
        

        
        
     }
