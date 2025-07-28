import styles from '../Header.module.css'
//Comentario para contexto, esse ->React.HTMLAttributes<HTMLUListElement> é descoberto deixando o mouse em cima da tag <ul>.
const HeaderList = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.cabecalho}>{children}</ul>
  )  
}

export default HeaderList