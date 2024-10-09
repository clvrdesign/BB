const Footer = () => {

    // Copyright year
    const year = new Date().getFullYear()
  
    return (
        <footer>
            <div className="flex flex-col gap-4 border-t border-slate-200 pt-5">
                <div className="text-sm text-slate-500">
                    <ul className='flex gap-4'>
                        <li><a className=''>Privacy</a></li>
                        <li><a className=''>Terms</a></li>
                        <li><a className=''>Cookies</a></li>
                    </ul>
                    <ul className='flex gap-4'>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Help</a></li>
                    </ul>
                </div>
                <small className="text-slate-400"> Burundi bushasha &copy; {year}, All Rights Reserved</small>
            </div>
        </footer>
        
    )
  }
  
  export default Footer