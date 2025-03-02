// 'use client'
import Image from 'next/image';
import classes from './page.module.css';
// import { usePathname } from "next/navigation";
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
const DynamicRoute = async ({ params }) => {
  console.log(params, "PARAMS")
 
  const meal = await getMeal(params.mealSlug)

  if(!meal) {
    notFound()
  }
   meal.instructions = meal.instructions.replace(/\n/g, '<br />')

  console.log(meal, "meal")
  return <>
    <header className={classes.header}>
      <div className={classes.image}>
        <Image fill  src={meal.image} alt={meal}/>
      </div>
      <div className={classes.headerText}>
        <h1>{meal.title}</h1>
        <p className={classes.creator}> By
          <a href={`mailto:${meal.creator_email}`}> {meal.creator}</a>
        </p>
        <p classes={classes.summary}>{meal.summary}</p>

      </div>

    </header>
    <main>
      <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}>

      </p>
    </main>
  </> 
};

export default DynamicRoute;
