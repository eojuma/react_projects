function Controls({ count, setCount }) {
return (
<div>
<button onClick={() => setCount(count + 1)}>
+
</button>
<button onClick={() => setCount(count - 1)}>
-
</button>
<button onClick={() => setCount(0)}>
Reset
</button>
</div>)
}
export default Controls