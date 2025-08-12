import '../App.css'
import { Link } from 'react-router-dom'

const Sunflower = () => {

  return (
    <>
        <div className='page'>
            <div className='sunflower'>
                <div className='text'>შენ მითხარი, დამხატე, რომელ ყვავილს შემადარებდიო. როცა ამ ყვავილს გიხატავდი, ისეთი იდეალური სილამაზის მინდოდა გამომსვლოდა, როგორიც შენ გაქვს, მაგრამ ბუნებრივია არ გამომივიდა. ჩემებურად გამოტანილი დასკვნა😂: ცხოვრება არც ისე იდეალურია იმისთვის, რომ ოდესმე დაგკარგო და შემდეგ ისევ საკუთარი თავი ვიპოვო❤️ მადლობა რომ საკუთარი თავის უკეთეს ვერსიას მხდი და მაბედნიერებ🫂</div>
            </div>
            <Link to={"/snake"} className='next-page'>&gt;&gt;</Link>
        </div>
    </>
  )
}

export default Sunflower
