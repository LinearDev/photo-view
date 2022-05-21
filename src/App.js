import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import Header from './templates/Header'
import Content from './templates/Content'
import './App.css'

export default function App() {
  const [loading, setLoading] = useState('loading');
  const [data, setData] = useState();
  const setReduxData = useDispatch();
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/LinearDev/photo-page/master/db.json').then((response) => {
      if (response.ok) {
        return response.json()
      }

      throw response;
    }).then((data) => {
      setData(data)
    }).catch(Error).finally(setLoading('load'))
  }, []);

  setReduxData({type: "ADD_DATA", payload: data})

  if (loading === 'load' && data !== undefined) {
    return (
      <div className="App">
        <Header />
        <Content />
      </div>
    )
  } else {
    return (
      <div className="App-mainLoader">
        <header className="App-load">
          Loading
        </header>
      </div>
    );
  } 
}

/*data.map(album => {
            return album.content.map(photo => {
              return <p key={Math.random()}>{photo.title}</p>
              })
            })*/