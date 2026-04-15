function Stats({ count }) {
return (
<p>
{count > 10
? "High value"
: "Low value"}
</p>
)
}
export default Stats