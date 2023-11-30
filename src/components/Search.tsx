
import {FC} from 'react';
import styles from '@/styles/Search.module.scss'

interface SearchProps {
  value: string
  size: string
  placeholder: string
}

const Search: FC<SearchProps> = ({ value, size, placeholder }) => {
  return (
    <div className={`${styles.search} ${size === 'large' ? styles.large : styles.small}`}>
      <input type='search' value={value} placeholder={placeholder} />
      <img src='/icons/search.svg' alt='Search' width={40} height={40}/>
    </div>
  )
}

export default Search