import React from 'react'
import styles from './MovieSection.module.css'
import Fieldset from '../FieldSet'
import InputText from '../InputText/indext'
import Button from '../Button'
import { FaSearch } from 'react-icons/fa'
import MovieList from '../MovieList'
import type { Movie } from '../../types'

const movies: Movie[] = [
    {
        id: 2,
        src: "/CardsFilmes/Card - Amigo da sombra.png",
        alt: "Imagem do filme Amigo da sombra",
        titulo: "Amigo da sombra",
        categoria: "2D",
        censura: "12 anos",
        genero: "Suspense",
        duracao: 110,
    },
    {
        id: 3,
        src: "/CardsFilmes/Card - Amigos do bosque mágico.png",
        alt: "Imagem do filme Amigo do bosque mágico",
        titulo: "Amigo do bosque mágico",
        categoria: "2D",
        censura: "Livre",
        genero: "Animação",
        duracao: 60,
    },
    {
        id: 4,
        src: "/CardsFilmes/Card - Caminho para o abismo.png",
        alt: "Imagem do filme Caminho para o abismo",
        titulo: "Caminho para o abismo",
        categoria: "2D",
        censura: "14 anos",
        genero: "Horror",
        duracao: 103,
    },
    {
        id: 5,
        src: "/CardsFilmes/Card - Desastres do Escritório.png",
        alt: "Imagem do filme Desastres do Escritório",
        titulo: "Desastres do Escritório",
        categoria: "2D",
        censura: "Livre",
        genero: "Comédia",
        duracao: 85,
    },
    {
        id: 6,
        src: "/CardsFilmes/Card - Mestres do futuro.png",
        alt: "Imagem do filme Mestres do Futuro",
        titulo: "Mestres do Futuro",
        categoria: "2D",
        censura: "Livre",
        genero: "Documentário",
        duracao: 120,
    },
    {
        id: 7,
        src: "/CardsFilmes/Card - La Esperanza.png",
        alt: "Imagem do filme La Esperanza",
        titulo: "La Esperanza",
        categoria: "2D",
        censura: "12 anos",
        genero: "Drama",
        duracao: 98,
    },
    {
        id: 8,
        src: "/CardsFilmes/Card - O nexus do tempo.png",
        alt: "Imagem do filme O nexus do tempo",
        titulo: "O nexus do tempo",
        categoria: "3D",
        censura: "10 anos",
        genero: "Ficcção Científica",
        duracao: 105,
    },
];

const MovieSection = () => {
  return (
    <main>
        <section className={styles.container}>
            <Fieldset variant='secondary'>
                <InputText placeholder='Buscar Filmes...'/>
                <Button variant='icon'>
                    <FaSearch/>
                </Button>
            </Fieldset>
            <h1 className={styles.titulo}>Em cartaz</h1>
            <MovieList movies={movies}/>
        </section>
    </main>
  )
}

export default MovieSection