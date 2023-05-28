import Song from './Song'

export default async function AudioBrowser({songs}: any) {
  let songData = {}
  for(let i = 0; i < songs.length; i++) {
    songData = await getSong(songs[i]);
  }
  
  async function getSong(songId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/song/records/${songId}`);
    const data = await res.json();
    return data;
  }

  let song = Song({songData})
  songData = await getSong(songs[0])
  let son2 = Song({songData})

    return (
      <div className="w-1/3 m-2 h-96 rounded dark:bg-[#222222] dark:text-indigo-400 bg-slate-200 text-black p-2 text-sm overflow-scroll">
        {song}
        {son2}
        {son2}
        {son2}
        {son2}
        {son2}
        {son2}
        {son2}
        {son2}
        {son2}
        {son2}
      </div>
    );
}