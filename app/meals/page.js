import Link from "next/link";
import classes from './page.module.css'
import MealsGrid from "@/Components/Meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";
const Meals = async () => {
   const meals = await getMeals()
    return <MealsGrid meals={meals} />
}
const MealsPage = () => {
 
  const { main, header } = classes || {}
  return (
    <>
     <header className={classes.header}>
      <h1>Delicious Meals, created <span className={classes.highlight}>by you</span></h1>
      <p>Choose your favorite recipe and cook it yourself</p>
      <p className={classes.cta}>
        <Link href='/meals/share'>Share Your favorite Recipe</Link>
      </p>
     </header>
      <main className={classes.main}>
        <Suspense fallback={<MealsLoadingPage />}>
           <Meals />
        </Suspense>
       
      </main>
    </>
  );
};

export default MealsPage;
