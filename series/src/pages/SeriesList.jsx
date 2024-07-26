import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col, Spinner, Alert } from 'react-bootstrap';
import '../css/ListSerie.css'; // Importa o arquivo CSS personalizado

const SeriesList = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para carregamento
  const [error, setError] = useState(null); // Estado para erros

  useEffect(() => {
    console.log('Fetching series data...');
    fetch('http://localhost:8080/series')  // Certifique-se de que a URL da API está correta
      .then(response => {
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        setSeries(data);
        setLoading(false); // Atualiza o estado de carregamento
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error); // Atualiza o estado de erro
        setLoading(false); // Atualiza o estado de carregamento
      });
  }, []);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>Loading series...</p>
      </Container>
    ); // Exibe um spinner de carregamento enquanto os dados estão sendo buscados
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">
          <Alert.Heading>Erro ao carregar dados</Alert.Heading>
          <p>{error.message}</p> {/* Exibe a mensagem de erro */}
        </Alert>
      </Container>
    ); // Exibe uma mensagem de erro se ocorrer um problema
  }

  return (
    <Container>
      <Row>
        {series.map(serie => (
          <Col key={serie.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="card">
              <Card.Img variant="top" src={serie.foto} alt={serie.nome} className="card-img-top" />
              <Card.Body className="card-body">
                <Card.Title className="card-title">{serie.nome}</Card.Title>
                <Card.Text className="card-text">
                  <strong>Gênero:</strong> {serie.genero}
                </Card.Text>
                <Card.Text className="card-text">
                  <strong>Temporadas:</strong> {serie.temporadas}
                </Card.Text>
                <Card.Text className="card-text">{serie.resumo}</Card.Text>
                <Card.Text className="text-muted">
                  <small className="text-muted">Criado em: {new Date(serie.dataCriacao).toLocaleDateString()}</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SeriesList;
