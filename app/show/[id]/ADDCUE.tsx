import { v4 as uuidv4 } from 'uuid';

export default async function NotePage({ params }: any) {
  const show = await getShow(params.id);

  async function getShow(showId: string) {
    const res = await fetch(`http://127.0.0.1:8090/api/collections/show/records/${showId}`);
    const data = await res.json();
    return data;
  }

  async function createShow(showName: string, cueList: Array<string>, lastTaskTime: number) {
    let show = {
      showName,
      cueList,
      lastTaskTime
    }
  }

  function addCue(timestamp: number, command: string, worldName: string, cueAmt: number) {
    let newCue = { 
      "id": uuidv4(), 
      "timestamp": timestamp, 
      "task": 
        { 
          "type": "com.craftmend.openaudiomc.spigot.modules.show.runnables.CommandRunnable", 
          "payload": 
            { 
              "command": (command + " "), 
              "worldName": worldName, 
              "executedFromRedis": false 
            }
        }
    };
    return newCue
    /*show.json.cueList[cueAmt] = newCue;
    cueAmt++;
    show.json.lastTaskTime = timestamp;*/
  }

  let cue = addCue(0, 'say hi', 'world', 0)

  const size = new TextEncoder().encode(JSON.stringify(cue)).length
  const kiloBytes = size / 1024;

  return (
    <body className="dark:bg-black dark:text-white min-h-screen lg:p-24">
      <main>
        <h1 className="text-3xl font-bold">{show.name}</h1>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl dark:text-slate-400">{show.json}</p>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl dark:text-slate-400">{kiloBytes}kb</p>
      </main>
    </body>
  );
}