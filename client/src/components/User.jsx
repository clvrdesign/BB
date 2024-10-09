import PropTypes from 'prop-types';

function User({ userImg, userName, userFollowers }) {
    return (
        <div className="flex gap-2">
            <div className="w-full flex items-center gap-2 rounded-md p-2 hover:bg-slate-100 cursor-default">
                <img className='h-10 w-10 overflow-hidden object-cover rounded-full' src={userImg} alt="User avatar" />
                <div>
                    <p className='text-slate-700 text-md'>{userName}</p>
                    <small className='block text-slate-500 -translate-y-0.5'>{userFollowers}K followers</small>
                </div>
            </div>
        </div>
    );
}

// Defining PropTypes for type-checking
User.propTypes = {
    userImg: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userFollowers: PropTypes.number.isRequired
};

// Defining default props
User.defaultProps = {
    userImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    userName: "Emily Rose Lee",
    userFollowers: 14
};

export default User;
