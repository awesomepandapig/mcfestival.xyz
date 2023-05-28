import Nav from './Nav'
import AudioBrowser from './AudioBrowser';
import Timeline from './Timeline';
import Scroll from './Scroll';

export default async function Show({ params }: any) {
    const show = await getShow(params.id);
    async function getShow(showId: string) {
        const res = await fetch(`http://127.0.0.1:8090/api/collections/show/records/${showId}`);
        const data = await res.json();
        return data;
    }
   
    let audioBrowser = AudioBrowser({songs: show.field})

    return (
    <body className='overflow-hidden' >
        <main className="dark:bg-[#151515] bg-white dark:text-white min-h-screen overflow-hidden">
            <Nav/>
            {audioBrowser}
            <Timeline/>
            <Scroll/>
        </main>
        
    </body>
    );
}