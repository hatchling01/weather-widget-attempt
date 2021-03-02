import { getLocaleDayNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
//import { timeStamp } from 'console';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})

export class ForecastWidgetMainComponent implements OnInit {


  
       array_1:any[]=new Array();
       array_3:any[]=new Array();
       array_2:any[]=new Array();
       array_id:any[]=new Array();
       array_url:any[]=new Array();
       day:String;
     

    ForecastData:any;
     constructor() { 
     }
   
     ngOnInit() {
      
       this.getForecastData();
       console.log("data",this.ForecastData);
     }
   
     getForecastData(){
       fetch('https://api.openweathermap.org/data/2.5/onecall?lat=22.7105&lon=88.4659&exclude=&appid=584bf6b74ec00821b83701b62a0491c0')
       .then(response=>response.json())
       .then(data=>{this.setForecastData(data);})
       
       
       
       
     }
     //console.log("data",this.ForecastData)
  


     setForecastData(data){
       //current weather data
        
       this.ForecastData = data;
        console.log(this.ForecastData)
       this.ForecastData.temp_now = (this.ForecastData.current.temp - 273.15).toFixed(0);
       this.ForecastData.temp_feels_like = (this.ForecastData.current.feels_like - 273.15).toFixed(0);
       this.ForecastData.humidity = (this.ForecastData.current.humidity).toFixed(0);
       this.ForecastData.wind_speed = (this.ForecastData.current.wind_speed);
       this.ForecastData.precipitation = (this.ForecastData.current.cloud);
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
        for(let x=0;x<7;x++)
        {
          var j=0;
           this.array_id.push((this.ForecastData.daily[x].weather[j].icon));
        this.array_url.push(("http://openweathermap.org/img/w/"+this.array_id[x]+".png"));
        document.getElementById('hello0').setAttribute( 'src',this.array_url[j]  );
        j++;
        document.getElementById('hello1').setAttribute( 'src',this.array_url[j]  );  
        j++;
        document.getElementById('hello2').setAttribute( 'src',this.array_url[j]  );
        j++;

        document.getElementById('hello3').setAttribute( 'src',this.array_url[j]  );
        j++;
        document.getElementById('hello4').setAttribute( 'src',this.array_url[j]  );
        j++;
        document.getElementById('hello5').setAttribute( 'src',this.array_url[j]  );
        j++;

        console.log("entering loop");
        document.getElementById('hello6').setAttribute( 'src',this.array_url[j]  );


        

        




        }};
        

        
        
     }
