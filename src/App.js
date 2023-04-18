import './App.css';
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Cars from "./components/cars/Cars";


function App() {

  return (

    <div className={'wrapper'}>


          <div className={'users-wrapper'}>
                  <Users/>
          </div>

        <hr/>
        <hr/>

      <div className={'comments-wrapper'}>
          <Comments/>
          <hr/>
      </div>
            <hr/>
        <div className={'cars-wrapper'}>
            <Cars/>
        </div>


    </div>
  );
}

export default App;
