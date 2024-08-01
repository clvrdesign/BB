import PropTypes from 'prop-types';

function User({ userImg, userName, userFollowers }) {
    return (
        <div className="flex gap-2">
            <div className="w-full flex items-center gap-2 bg-slate-100 rounded-md p-2 hover:bg-slate-200 cursor-default">
                <img className='h-10 w-10 overflow-hidden object-cover rounded-full' src={userImg} alt="User avatar" />
                <div>
                    <p className='text-slate-700 text-md'>{userName}</p>
                    <small className='block text-slate-500 -translate-y-0.5'>{userFollowers} followers</small>
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
    userImg: "https://picsum.photos/200/300",
    userName: "Default Name",
    userFollowers: 0
};

export default User;
