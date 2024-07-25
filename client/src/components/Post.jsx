import PropTypes from 'prop-types';

const Post = ({ profileImg, username, province, date, followers, postImg }) => (
  <div className="flex flex-col w-auto h-72 bg-slate-200 md:rounded-lg sm:rounded-none overflow-hidden">
    <div className="flex justify-between py-2 px-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 overflow-hidden rounded-full">
          <img src={profileImg} alt="profile_image" />
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-slate-800">{username}</p>
          <p className="text-sm text-slate-500">{province} · {date}</p>
        </div>
      </div>
      <p className="text-slate-500 mt-0.5">{followers} suivis</p>
    </div>
    <div className="h-full overflow-hidden">
      <img className='h-full w-full object-cover' src={postImg} alt="post_img" />
    </div>
  </div>
);

Post.propTypes = {
  profileImg: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  province: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  postImg: PropTypes.string.isRequired
};

export default Post;
