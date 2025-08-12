import '../App.css'
import { Link } from 'react-router-dom'

const Snake = () => {

  return (
    <>
        <div className='page'>
            <div className='snake'>
                <div className='text'>გველი საკუთარ კუდს ჭამს - რაც არ უნდა გააკეთოს ადამიანმა, ის მაინც ერთ მთლიან ციკლშია საიდანაც ვერ გამოვა, თითქოს ყველაფერი წინასწარაა დაწერილი. მწამს, რომ ბედისწერა და უსასრულო სიყვარული მაკავშირებს შენთან ❤️</div>
            </div>
            <Link to={"/song"} className='next-page'>&gt;&gt;</Link>
        </div>
    </>
  )
}

export default Snake
