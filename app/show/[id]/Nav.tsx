export default function Nav() {
  return (
    <div>
        
        <img className='w-8 h-8 rounded-full mr-2 border-2 border-indigo-600 float-right' src="https://mc-heads.net/avatar/XessDx"></img>
        <img className='w-8 h-8 rounded-full mr-2 border-2 border-indigo-600 float-right' src="https://mc-heads.net/avatar/Hypixel"></img>
        <img className='w-8 h-8 rounded-full mr-2 border-2 border-indigo-600 float-right' src="https://mc-heads.net/avatar/Notch"></img>

        <div className="w-1/3 float-left ml-2 h-8 rounded dark:bg-[#222222] bg-slate-200 text-black dark:text-indigo-400 pt-1.5 text-center text-sm lg:pr-16">
            a
        </div>
        
        <nav className="w-fit mx-auto m-2 h-8 rounded dark:bg-[#222222] bg-slate-200 text-black dark:text-indigo-400 pt-1.5 text-center text-sm lg:pr-16">
            <a className="dark:hover:text-white hover:text-indigo-600 cursor-pointer lg:ml-16 ml-4">Audio</a>
            <a className="dark:hover:text-white hover:text-indigo-600 cursor-pointer lg:ml-16 ml-4">Effects</a>
            <a className="dark:hover:text-white hover:text-indigo-600 cursor-pointer lg:ml-16 ml-4">Export</a>
        </nav>
    </div>
    
  );
}