import React, {useEffect, useState} from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

export default function NewIncident(){

  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[value, setValue] = useState('');
  const ongID = localStorage.getItem('ongID');
  
 const history = useHistory();

  async  function  handleNewIncident(e){
    e.preventDefault();

    const data ={
      title,
      description,
      value,
    };

    console.log(data);

    try {
    await api.post('incidents', data,{
        headers:{
          Authorization: ongID
        }
      });
    
      history.push('/profile');
    } catch (error) {
      alert('Erro no cadastro, tente novamente.');
    }
    
  }

    return(
        <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero" />
            <h1>Cadastrar novo caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#E02041" />
                    Voltar
              </Link>
  
          </section>
          <form onSubmit={handleNewIncident}>
            <input placeholder="Título do caso" 
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <textarea  placeholder="Descrição detalhada do caso" 
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <input placeholder="Valor em reais" 
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            
  
            <button className="button" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    );
}