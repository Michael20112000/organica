import { Logotype } from './logotype'
import { First } from './first'
import { Second } from './second'
import { Map } from './map'
import { styles } from './styles'

export const TopPart = async () => {
  return (
    <div className={styles.topPart}>
      <div className={styles.container}>
        <Logotype />
        <First />
        <Second />
        <Map />
      </div>
    </div>
  )
}
