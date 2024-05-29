import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import Search from './Search/Search'
import './styles.css'

const Article = () => {
    return (
        <div>
            <div className='header-top'>
                <div>
                <img className='logo' src="https://wallpapers.com/images/featured/marshmello-png-uzca4piliesal3z7.png" alt="" />
                </div>
                <ul className='menu-items'>
                    <li>HOME</li>
                    <li>USERS</li>
                    <li>PLANETS</li>
                    <li>STARSHIPS</li>
                </ul>
                <Search />
            </div>
            <div className='article'>
                <div><span><FontAwesomeIcon icon={faArrowLeftLong} /></span></div>
                <div className='article-img'>
                <img src="https://wallpapers.com/images/featured/marshmello-png-uzca4piliesal3z7.png" alt="React Image" />
                 </div>
                <div className='paragraph'>
                    <h1>Marshmello</h1>
                    <p>Личность Marshmello остается неизвестной,
                         хотя были предположения, что он является
                          американским диджеем Крисом Комстоком, 
                          также известным как Dotcom, поскольку у них у обоих
                           одинаковые имена, дни рождения, татуировки,
                         а также идентичные музыкальные стили</p>
                </div>
                <div><span><FontAwesomeIcon icon={faArrowRightLong} /></span></div>
            </div>
        </div>
    )
}
export default Article