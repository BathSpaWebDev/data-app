import './App.scss';
//importing the useState hook
import { useState, useEffect } from 'react';

function App() {

  //Initializing the state
  const [ planets, setPlanets ] = useState([]);

  const someFn = () => { 
    //do something
    return 'This string is being returned from the function'
  }

  const myArrowFunction = () => 'This string is being returned from the function';

  someFn();
  myArrowFunction();

  // function someFn(){

  // }


  useEffect(() => {

      fetch('https://swapi.dev/api/planets')
        .then(
          (response) => response.json()
        )
        .then(
          (data) => {
            console.log(data);
            setPlanets(data.results); // this update causes the 2nd useEffect hook to fire
          }
        )
  },[])
  // As the dependency array is empty it only runs once

  
  useEffect(() => {
    console.log('planets: ', planets);
  },[planets])

  return (
    <div className="app">
      <p className="intro">Example: {myArrowFunction()}</p>
      <button onClick={ () => setPlanets([]) }>Clear planets</button>
        {
          planets && planets.map((planet, index) => {
            return <p>{planet.name}</p>
          })
        }
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ullam excepturi iure ratione odio enim veritatis, eius libero culpa necessitatibus impedit aliquid? In, pariatur excepturi repudiandae non praesentium exercitationem minus?
        Fuga sint a exercitationem voluptates ipsum repudiandae amet velit aperiam, veritatis sequi eaque, eligendi nemo fugit expedita culpa neque error quia ducimus quibusdam molestias eos odit enim! Rem, et ab.
        Inventore ducimus, quo magni beatae placeat, doloribus enim ex temporibus aperiam adipisci porro ad eius neque est? Fuga sapiente dolor consequuntur, porro fugiat, odit impedit, perspiciatis atque tenetur exercitationem alias.
        Asperiores, enim blanditiis, dolor et minus placeat itaque alias corrupti voluptatem nisi laborum dolores facere aut. Quia laboriosam ratione dolores perspiciatis soluta. Praesentium aliquam ea maxime iure officia nostrum! Enim.
        Obcaecati nobis quod consequatur, voluptatem non neque delectus distinctio voluptatum nesciunt quidem pariatur impedit quo cumque quibusdam eveniet perferendis accusantium ad nemo praesentium. Vitae magni velit qui, tenetur necessitatibus alias?
        Asperiores consectetur doloribus id dolor quidem voluptatem, iste illum. Unde voluptatem, corrupti incidunt maxime fugiat dicta maiores architecto veritatis alias officiis sit et debitis, dolore minima sunt ea quaerat nostrum.
        Molestiae eligendi odit quia, unde laudantium adipisci delectus quis sequi libero commodi culpa veritatis dolore quas incidunt quaerat magni recusandae, ratione eaque dolorem pariatur labore. Quod, ipsam accusantium! Itaque, nihil.
        Doloremque natus, itaque adipisci voluptatem minima, velit, iure consequuntur dolores quisquam rerum quidem explicabo deleniti nesciunt dicta earum? Ducimus aut numquam nesciunt est velit tempora laudantium in maiores, sapiente repellat.
        Dolores beatae porro sed mollitia illo! Qui neque consequatur, quam eum fugiat corporis molestias beatae doloribus aliquam architecto earum repudiandae fuga, nemo eligendi. Corrupti pariatur, esse iusto eveniet recusandae soluta.
        Vel suscipit voluptates, nulla provident esse eum ipsum beatae excepturi expedita doloribus reiciendis adipisci repellat libero sed, dignissimos similique quia maiores? Modi sunt non earum suscipit sapiente facilis voluptate commodi.
    </div>
  );
}

export default App;








