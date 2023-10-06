import { useRef } from 'react';
import { setTrainerSlice } from '../store/slices/trainer.slice';
import{ useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"

const HomePage = () => { 

  const inputTrainer = useRef()

  const dispatch = useDispatch ()

  const navigate = useNavigate()

  const handleTrainer = e => {
    e.preventDefault()
    dispatch(setTrainerSlice(
    inputTrainer.current.value.trim()))
    navigate('/pokedex')
  }

  return (
    <div className='homepage'>
        <h1 className='homepage__image'>
          <img src= "/src/components/imagenes/Pokedex.png" alt="" />
        </h1>
        <h2 className='homepage__trainer'>Hi Trainer!</h2>
        <p className='homepage__welcome'>To start, please, give me your trainer name</p>
        <form className='homepage__form' onSubmit={handleTrainer}>
            <input className='homepage__form__input' ref={inputTrainer} type="text" />
            <button className='homepage__form__button'>Start!</button>
        </form>
        <h1 className='homepage__poke'>
          <img src="/src/components/imagenes/Pokedex1.png" alt="" />
        </h1>
    </div>
  )
}

export default HomePage