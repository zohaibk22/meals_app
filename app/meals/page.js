import Link from "next/link";
const Meals = () => {
  return (
    <>
      <h1>Meals</h1>
      <ul>
        <li>
          <Link href="/meals/share">Meals share</Link>
        </li>
      </ul>
    </>
  );
};

export default Meals;
