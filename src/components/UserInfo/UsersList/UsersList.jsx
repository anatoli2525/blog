import './styles.css'

const UsersList = () => {
    return (
        <div className="usersList">
            <div className='section-title'><h2>Users</h2></div>
            <div className='serial-user'>
                <div className='user-number'>01</div>
                <div className='user-name'><h4>Marshmello</h4></div>
            </div>
            <div className='serial-user'>
                <div className='user-number'>02</div>
                <div className='user-name'><h4>Allan Walker</h4></div>
            </div>
            <div className='serial-user'>
                <div className='user-number'>03</div>
                <div className='user-name'><h4>Davit Gueta</h4></div>
            </div>
            <div className='serial-user'>
                <div className='user-number'>04</div>
                <div className='user-name'><h4>Martin Garrix</h4></div>
            </div>
            <div className='serial-user'>
                <div className='user-number'>05</div>
                <div className='user-name'><h4>Steve Aoki</h4></div>
            </div>
        </div>
    )
}
export default UsersList