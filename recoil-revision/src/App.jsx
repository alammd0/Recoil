import { useMemo, useState } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import { jobNetworkAtom, networkAtom, notificationAtom, totalValue, afterClickNotificationValue } from "./atom";


function App() {
  // const [netwsork, setNetwork] = useState(102);
  const [jobs, setJobs] = useState(0);
  const [messages, setMessages] = useState(0);
  // const [notifications, setNotifications] = useState(12);

  const [networkCount, setNetworkCount]  = useRecoilState(networkAtom);

  const updateNetwork = (c) => {
    return c + 1;
  }



  // const jobNetworkCount = useRecoilValue(jobNetworkAtom)
  const [jobNetworkCount, setJobNetworkCount] = useRecoilState(jobNetworkAtom)

  console.log(networkCount)

  function incrementJob(c){
    return c + 1
  }



  // const totalValue = jobNetworkCount + networkCount;
  // console.log(totalValue)

  // use memo concept

  const [notificationAtomCount, setNotificationAtomCount] = useRecoilState(notificationAtom)

  function incrementNotification(c){
    return c + 1
  }

  // const totalVal = useMemo( () => {
  //   return jobNetworkCount + networkCount + notificationAtomCount
  // })

  const totalVal = useRecoilValue(totalValue);
  const afterClickValue = useRecoilValue(afterClickNotificationValue);


  return (
    <div>
      <button>Home</button>
      <button onClick={() => setNetworkCount(updateNetwork(networkCount))}>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button onClick={ () => setJobNetworkCount(incrementJob(jobNetworkCount))}>Jobs ({jobNetworkCount >= 20 ? "19+" : jobNetworkCount})</button>
      <button>Messaging ({messages})</button>
      <button onClick={ () => setNotificationAtomCount(incrementNotification(notificationAtomCount))}>Notifications ({notificationAtomCount})</button>
      <button>Me ({afterClickValue})</button>
    </div>
  );
}

export default App;
