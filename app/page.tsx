/**
 * The external imports
 */
import { css } from '@/styled-system/css'

/**
 * The internal imports
 */
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>
      <Navbar />
      Hello 🐼!
    </div>
  )
}
