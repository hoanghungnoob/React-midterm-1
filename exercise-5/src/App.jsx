import Card from "./components/Card";
import { AVAILABLE_DATA } from "./data";
function App() {
  return (
    <>
      <header>
        <h1>My Card</h1>
      </header>
      <main>
        <div className="cards-view">
          <div className="cards-grid">
            {AVAILABLE_DATA.map((data)=>(
              <Card card={data} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
