import type { Movie } from '../types';
import { getMovies } from '../api';
import { useEffect, useState } from 'react';

const useFetchMovies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovies = async () => {
    try {
        setIsLoading(true)
        const movies = await getMovies();
        setMovies(movies);
    } catch (error) {
        setError("Erro ao buscar filmes. Tente novamente")
        console.error(error)
    } finally{
        setIsLoading(false)
    }
    }

    useEffect(() => {
        fetchMovies()
    },[])
    return {movies, isLoading, error}
}

export default useFetchMovies