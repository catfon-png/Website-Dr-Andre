import {useNavigate} from 'react-router-dom'
import './Question.css'

export const Question = () => {
    const navigate = useNavigate();

    const navigateToContacts = () => {
        navigate('/contactos')
    }
  return (
    <section className='question'>
        <h2 className="question-heading">Tem alguma questão?</h2>
        <p className='question-text'>Se quer saber mais sobre alguma informação sobre um caso clínico, ou simplesmente procura uma opinião profissional sobre Medicina Dentária, entre em contacto comigo. </p>
        <button className='question-btn' onClick={navigateToContacts}>Saiba mais</button>
    </section>
  )
}
