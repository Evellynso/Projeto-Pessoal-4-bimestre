import styles from './styles.module.css'

export default function Profile(props){
    return(
        <div className={styles.bloco}>
            <img src={props.img} />
            <h1 className={styles.name}>{props.name}</h1>
            <hr className={styles.primeiro}/>
            <p className={styles.bio} >{props.bio}</p>
            <hr className={styles.segundo}/>
            <p className={styles.email}>{props.email}</p>
            <hr className={styles.terceiro}/>
            <button><a href={props.whatsAppUrl}>WhatsApp</a></button>
            <button><a href={props.instagramUrl}>Instagram</a></button>
        </div>
    )
}

