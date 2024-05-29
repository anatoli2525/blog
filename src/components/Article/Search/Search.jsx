import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

const Search = () => {
    return (
        <div className='search'>
            <input placeholder='Search...'></input>
            <button><span><FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} /></span></button>
        </div>
    )
}
export default Search