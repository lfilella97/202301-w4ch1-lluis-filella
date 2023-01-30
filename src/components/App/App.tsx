import Gentleman from "../Gentleman/Gentleman";
import Info from "../Info/Info";
import { gentlemanList } from "./gentleManList";
const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">The pointing gentlemen</h1>
      </header>
      <Info />
      <main className="main">
        <ul className="gentlemen">
          {gentlemanList.map((gentleman, position) => (
            <li className="gentleman" key={position}>
              <Gentleman {...gentleman} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
export default App;
