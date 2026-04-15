
import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Controls from "./components/Controls";
import Stats from "./components/Stats";
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
  