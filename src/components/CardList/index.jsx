
import { users } from '../user'
import styles from './index.module.css'

const  CardList = () =>{

    return (
        <div className={styles.pageContainer}>

        {
            users.map(({id, username, img}) => {

                return (
                    <>
                     <div className={styles.card} key={id}>
                      <img src={img} alt={`${username}'s picture`} />
                      <h3>{username}</h3>
                    </div>
                    </>
                )
            }) 
        }
        </div>
    )
}
   


export default CardList;

