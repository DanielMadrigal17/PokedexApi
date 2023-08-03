import AppRouter from "./components/AppRouter";
import PokemonProvider from "./components/Contexto/PokemonProvider";

function App() {
 
  
  return (
    <div className="App">
      <PokemonProvider>
      <AppRouter/>
      </PokemonProvider>
    </div>
  );
}

export default App;