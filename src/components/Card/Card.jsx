export default function Card({
  name,
  image,
  isLoading
}) {
  console.log(name);
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
}
