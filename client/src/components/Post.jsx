//import assets from '../assets/assets'

function Post() {
  return (
    <div>
        <div className="flex">
            <div className="flex">
                <div className="w10 overflow-hidden">
                    <img src='' alt="post_img" />
                </div>
                <div className="flex">
                    <p>ID/Name here</p>
                    <small>Ngozi - 4 min ago</small>
                </div>
            </div>
            <p>{56} followers</p>
        </div>
    </div>
  )
}

export default Post