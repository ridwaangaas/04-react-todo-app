import './app.scss'

function App() {
  return (
    <div className="App">
  <div id="app">
    <h1>My Todo 🗒️</h1>

    <div className="container">
      <form>
        <h2>Add Item</h2>
        <input type="text" id="title" placeholder="Title" className="form-control" autocomplete="off" />
        <button>Add</button>
      </form>

      <div className="items">
        <h2>My Items</h2>
      </div>
    </div>
  </div>

    </div>
  );
}

export default App;
