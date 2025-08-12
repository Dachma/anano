import '../App.css'
import { Link } from 'react-router-dom'

const Main = () => {

  return (
    <>
        <div className='page'>
            <div className='main'>
                <div className='text'>ანანო, შენ ხარ ჩემი ისტორიის ყველაზე ლამაზი თავი, რომელიც დაუსრულებლად მინდა რომ გაგრძელდეს</div>
            </div>
            <Link to={"/sunflower"} className='next-page'>&gt;&gt;</Link>
        </div>
    </>
  )
}

export default Main
