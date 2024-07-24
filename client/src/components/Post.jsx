// import assets from '../assets/assets'

function Post() {
  return (
      <div className="flex flex-col w-auto bg-slate-100 md:rounded-lg sm:rounded-none overflow-hidden">
          <div className="flex justify-between py-2 px-4">
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s' alt="" />
                  </div>
                  <div className="flex flex-col">
                      <p className='text-lg text-slate-800'>ID/Name here</p>
                      <p className="text-sm text-slate-500">Gitega - 4 min ago</p>
                  </div>
              </div>
              <p className="text-slate-500 mt-0.5">{56} followers</p>
          </div>
          <div className="overflow-hidden">
            <img src="https://thumbs.dreamstime.com/b/lonely-railway-station-unsplash-generative-ai-289040966.jpg" alt="" />
          </div>
      </div>
    

  )
}

export default Post