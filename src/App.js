import React from 'react';
import './App.css';
import CitySelector from './components/CitySelector';
import useFetch from './hooks/useFetch';
import { apiKey, baseUrl } from './config';
import WeatherList from './components/WeatherList';
import headerImg from './header1.jpg';

function App() {
  const { data, error, inProgress, setUrl } = useFetch();

  const getContent = () => {
    if (error) return <h2>Error when fetching: {error}</h2>;
    if (!data && inProgress) return <h2>Loading...</h2>;
    if (!data) return null;
    return <WeatherList weathers={data.list} />;
  };

  return (
    <div className="App">
      <div className="header-image" style={{ backgroundImage: `url(${headerImg}` }}></div>
      <CitySelector onSelectButtonClick={(city) => setUrl(`${baseUrl}/data/2.5/forecast/daily?q=${city}&cnt=5&appId=${apiKey}&units=metric`)} />
      {getContent()}
      <footer>
        <p>
          Created by: Deepa S<br></br>
          <a href="mailto:deepagowda262@gmail.com">Mail: deepagowda262@gmail.com</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
