import React from 'react'
import styles from './MovieSection.module.css'
import Fieldset from '../FieldSet'
import InputText from '../InputText/indext'
import Button from '../Button'
import { FaSearch } from 'react-icons/fa'
import MovieList from '../MovieList'
import type { Movie } from '../../types'

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