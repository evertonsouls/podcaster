import styles from './styles.module.scss'

export function Player() {

  return (
    <div className={styles.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Reproduciendo ahora"/>
        <strong>Reproduciendo ahora</strong>
      </header>

      <div className={styles.emptyPlayer}>
        <strong>Seleccione un podcast para escuchar</strong>
      </div>

      <footer className={styles.empty}>
        <div className={styles.progress}>
          <span>00:00</span>
          <div className={styles.slyder}>
            <div className={styles.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={styles.buttons}>
          <button type="button">
            <img src="/shuffle.svg" alt="Barajar" />
          </button>
          <button type="button">
            <img src="/play-previous.svg" alt="Reproducir anterior" />
          </button>
          <button type="button" className={styles.playButton}>
            <img src="/play.svg" alt="Reproducir" />
          </button>
          <button type="button">
            <img src="/play-next.svg" alt="Reproducir siguiente" />
          </button>
          <button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </button>
        </div>
      </footer>
    </div>
  )
}