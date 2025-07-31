import styles from './CardMovie.module.css'
import Tag from '../Tag'
import type { Movie } from '../../types';



const CardMovie = (props: Movie) => {
  const {alt, src, titulo, genero, categoria, censura, duracao} = props;
  return (
    <li className={styles.card}>
       <img src={src} alt={alt}/>
       <div>
        <h3>
          {titulo}
          <div className={styles.informacoes}>
            <div className={styles.linha1}>
              <p>{genero}</p>
              <Tag value={categoria}/>
            </div>
            <div className={styles.linha2}>
              <p>{duracao}</p>
              <Tag value={censura}/>
            </div>
          </div>
        </h3>
       </div>
    </li>
  )
}

export default CardMovie