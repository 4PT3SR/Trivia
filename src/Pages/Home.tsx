import Button from "../Components/Button"
import { Link } from "react-router-dom";
// import clsx from "clsx";
import { useState, useEffect } from "react";
const Home = () => {

    const [level, setLevel] = useState<string>(()=> window.localStorage.getItem('Trivia_level') || 'Easy' )

   

    useEffect(()=> {
        window.localStorage.setItem('Trivia_level',level)
    },[level])
    
    const levelClickHandler = (e?:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const btn = e?.target as HTMLButtonElement;
       setLevel(btn.innerText)
        
    }
    

    const setActive = (dif:string):string => {
        
        return level == dif? 'active': ''
    }
   return (
    <div className="h-screen w-screen text-center px-10 py-5 flex flex-col justify-between">
        <header className="font-bold text-4xl">
            <h1>Welcome to the Trivia Challenge!</h1>
        </header>

        <main className="text-2xl font-semibold flex flex-col gap-y-16">
            <p>You will be presented with 10 True or False questions</p>
            <p>Can you score 100%?</p>
        </main>

        <footer>
            <p className="pb-5">Select difficulty level:</p>
            <div className="flex gap-x-3 justify-center pb-10 font-mono">
                {/* <button >Easy</button> */}
                <Button  onClick={levelClickHandler} className={setActive('Easy')}>Easy</Button>
                <Button onClick={levelClickHandler} className={setActive('Medium')}>Medium</Button>
                <Button onClick={levelClickHandler} className={setActive('Hard')}>Hard</Button>
                {/* <button>Easy</button>
                <button>Easy</button> */}
            </div>
            {/* <p>Begin</p> */}
            <Link to="/quiz"><Button className="font-semibold">BEGIN</Button></Link>
            
        </footer>
        
    </div>
  )
}

export default Home