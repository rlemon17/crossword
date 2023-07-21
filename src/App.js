import './App.css';

// Function to console log a 2D array
// Mainly for temporary use while I figure out crossword generation logic
// @param table: 2d array
// @return finalString: string representation of table
const renderTable = (table) => {
  let finalString = "";
  for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
      finalString += (table[row][col] + " ");
    }
    finalString += "\n";
  }
  return finalString;
}

// Given an array of strings, generate a crossword represented as a 2d array
// @param stringArr: array of strings
// @param size: int, size of the array
// @return crossword: 2d array of characters
const generateCrossword = (stringArr, size) => {
  
}

function App() {
  const testTable = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  const testTableString = renderTable(testTable);
  console.log(testTableString);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          Console logging for now
        </div>
      </header>
    </div>
  );
}

export default App;
