import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightsidebar from './Rightsidebar';
import Login from './Login';
import { useStateValue } from './Stateprovider';


function App() {

  const [{user},dispatch] = useStateValue(null);
  console.log(user)
  return (
    <>
    {
      user ? (<Login/>) : (
        <div className="App">
        <Header />
  
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Rightsidebar />
        </div>
  
      </div>
      )
    }
   
    </>
  );
}

export default App;
