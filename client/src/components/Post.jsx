
function Post() {
  return (
      <div className="flex flex-col w-auto bg-slate-100 md:rounded-lg sm:rounded-none overflow-hidden">
          <div className="flex justify-between py-2 px-4">
              <div className="flex items-center gap-3">
                  <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn9zilY2Yu2hc19pDZFxgWDTUDy5DId7ITqA&s' alt="" />
                  </div>
                  <div className="flex flex-col">
                      <p className='text-base text-slate-800'>ID/Name here</p>
                      <p className="text-sm text-slate-500">Gitega - 2 min ago</p>
                  </div>
              </div>
              <p className="text-sm text-slate-500 mt-0.5">{56} followers</p>
          </div>
          <div className="h-full overflow-hidden">
            <img className="w-full h-full object-cover" src="https://www.imgacademy.com/sites/default/files/img-academy-organization-schema.jpg" alt="" />
          </div>
      </div>
    

  )
}

export default Post