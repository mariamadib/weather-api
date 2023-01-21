import './App.css';
import axios from 'axios';
import { useState } from 'react';
import background from "./assets/background.webp";



import { UilTear, UilTemperature, UilWind, UilSun, UilSunset, UilArrowUp, UilArrowDown } from '@iconscout/react-unicons';





function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=f7dd3b31e708d02e5d36ce7a764c8e07`


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')

    };
  }
  const d = new Date()
  const days = ["Sundays", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = [];
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "Augest";
  month[8] = "January";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";


  return (
    <>
      <div className="app" style={{ backgroundImage: `url(${background})` }}>
        <div className='overlay'>
          <div className='search'>
            <input
              type="text"
              name="location"
              value={location}
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder='Enter Location...' />
          </div>

          <div className='time_and_location'>
            <p>{days[d.getDay()]}, {month[d.getMonth()]} {d.getDate()}, {d.getFullYear()}

            </p>
          </div>


          <div className='container'>
            <div className='description'>

              <div className='main_detail'>
                <p className='location'>{data.name}</p>
                <h1 className='temperature'>
                  {data.main ? <h1>{data.main.temp}°C</h1> : null}
                </h1>

                <div className='icon'>
                  {/* <img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png' alt='' /> */}
                </div>


                <p className='status'>
                  {data.weather ? <p>{data.weather[0].main}</p> : null}
                </p>
              </div>

              <div className="details">
                <div className='humidity'>
                  <UilTear size={18} />
                  Humidity : {data.main ? <span className='bold'>{data.main.humidity}%</span> : null}
                </div>
                <div className='feels'>
                  <UilTemperature size={18} />
                  Feels Like : {data.main ? <span className='bold'>{data.main.feels_like}°</span> : null}
                </div>
                <div className='wind'>
                  <UilWind size={18} />
                  Wind : {data.wind ? <span className='bold'>{data.wind.speed} km/h</span> : null}
                </div>
              </div>

            </div>


            <div className='extra_details'>
              <div className='sunrsie'>
                <UilSun size={18} />
                Rise : {data.sys ? <span className='bold'>{data.sys.sunrise} |</span> : null}
              </div>
              <div className='sunset'>
                <UilSunset size={18} />
                set : {data.sys ? <span aclassName='bold'>{data.sys.sunset} |</span> : null}
              </div>

              <div className='high'>
                <UilArrowUp size={18} />
                High : {data.sys ? <span className='bold'>{data.main.temp_max} °|</span> : null}
              </div>
              <div className='low'>
                <UilArrowDown size={18} />
                Low : {data.sys ? <span className='bold'>{data.main.temp_min} °</span> : null}
              </div>
            </div>


          </div>







        </div>

      </div>









    </>


  );
}

export default App;
