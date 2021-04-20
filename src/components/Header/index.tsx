import format from 'date-fns/format';
import es from 'date-fns/locale/es';

import styles from './styles.module.scss'

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: es,
  });

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Poscastr" />

      <p>Lo mejor para que escuches, siempre</p>

      <span>{currentDate}</span>
    </header>
  )
}