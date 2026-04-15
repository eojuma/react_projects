
import { useState } from "react";
import Header from "./components/Header.jsx";
import Counter from "./components/Counter.jsx";
import Controls from "./components/Controls.jsx";
import Stats from "./components/Stats.jsx";
function App() {
const [count, setCount] = useState(0)
return (
<div>
<Header />
<Counter count={count} />
<Controls
count={count}
setCount={setCount}
/>
<Stats count={count} />
</div>
)

}
export default App
  