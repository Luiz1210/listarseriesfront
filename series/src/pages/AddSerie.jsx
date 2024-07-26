import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddSerie = () => {
  const [nome, setNome] = useState('');
  const [genero, setGenero] = useState('');
  const [temporadas, setTemporadas] = useState(0);
  const [resumo, setResumo] = useState('');
  const [foto, setFoto] = useState('');
  const [dataCriacao, setDataCriacao] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    try {
      await axios.post('http://localhost:8080/series', {
        nome,
        genero,
        temporadas,
        resumo,
        foto,
        dataCriacao,
      });
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('Ocorreu um erro ao adicionar a série. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Adicionar Nova Série</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gênero</label>
          <input
            type="text"
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Temporadas</label>
          <input
            type="number"
            value={temporadas}
            onChange={(e) => setTemporadas(Number(e.target.value))}
            min="0"
            required
          />
        </div>
        <div>
          <label>Resumo</label>
          <textarea
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Foto URL</label>
          <input
            type="text"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Data de Criação</label>
          <input
            type="date"
            value={dataCriacao}
            onChange={(e) => setDataCriacao(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adicionando...' : 'Adicionar'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default AddSerie;

