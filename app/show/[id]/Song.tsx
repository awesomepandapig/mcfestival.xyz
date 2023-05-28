export default function Song({songData}: any) {

    let isPlaying = false;

    /*sound.addEventListener("ended", function() {
        document.getElementById(songData.id)!.innerHTML = '▶'
    })

    function playSound() {
      if(!isPlaying) {
        isPlaying = true
        document.getElementById(songData.id)!.innerHTML = '⏸'
        sound.play()
      } else {
        isPlaying = false
        document.getElementById(songData.id)!.innerHTML = '▶'
        sound.pause()
      }
    }*/

    return (
        <div className="hover:bg-[#222222] dark:hover:bg-black hover:text-white p-2 rounded-md font-semibold flex flex-row">
            <button className='text-lg w-4' id={songData.id}>▶</button>
            <img className='ml-2 w-10 h-10' src={songData.img} alt="" />
            <div className="ml-2 flex flex-col">
                <p>{songData.title}</p>
                <p className="text-indigo-400 text-xs">{songData.artist}</p>
            </div>
            <audio className="ml-4 w-48 h-10">
              <source src={songData.src} type="audio/mpeg" />
            </audio>
        </div>
    );
}