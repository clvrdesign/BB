import { Link } from 'react-router-dom'

function Post() {
    return (
        <div className="flex flex-col w-auto bg-slate-100 md:rounded-lg sm:rounded-none overflow-hidden">
            <div className="flex justify-between py-2 px-4">
                <div className="flex items-center gap-3">
                    <Link to='/profile' className="w-10 h-10 overflow-hidden rounded-full">
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s' alt="" />
                    </Link>
                    <div className="flex flex-col">
                        <p className='text-base text-slate-800'>ID/Name here</p>
                        <p className="text-sm text-slate-500">Gitega - 2 min ago</p>
                    </div>
                </div>
                <p className="text-sm text-slate-500 mt-0.5">{56} followers</p>
            </div>
            <Link to='/post' className="h overflow-hidden">
                <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1721614461028-6e80fa904ba0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                />
            </Link>
        </div>


    )
}

export default Post