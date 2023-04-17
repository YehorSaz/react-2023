import './App.css';
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";


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

    </div>
  );
}

export default App;
