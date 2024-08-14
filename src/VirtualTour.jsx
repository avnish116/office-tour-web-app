//Necessary imports
import React, { useRef, useEffect } from "react";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { VirtualTourPlugin } from "@photo-sphere-viewer/virtual-tour-plugin";
import "@photo-sphere-viewer/virtual-tour-plugin/index.css";

//Image files
import Entrance from "./assets/Entrance.jpg"
import CoffeeHub from "./assets/CoffeeHub.jpg"
import GroundOffice from "./assets/GroundOffice.jpg"
import GroundOffice1 from "./assets/GroundOffice1.jpg"
import L1Office from "./assets/L1Office.jpg"
import L1Kitchen from "./assets/L1Kitchen.jpg"
import L1KitchenOutside from "./assets/L1KitchenOutside.jpg"
import L4Reception from "./assets/L4Reception.jpg"
import L4Office from "./assets/L4Office.jpg"
import L4BoardRoom from "./assets/L4BoardRoom.jpg";
import Terrace from "./assets/Terrace.jpg";





import building from "./assets/image.png"
import firstPhoto from "./assets/1.png";
import secondPhoto from "./assets/2.png";
import thirdPhoto from "./assets/3.png";


function VirtualTour() {

  //We need the instance of the component to apply plugins
  const instanceRef = useRef(null);

  //All plugins (can declare multiple)
  const plugins = [[VirtualTourPlugin, { renderMode: "3d" }]];

  //Function that instantiates plugin and data to it
  const handleReady = (instance) => {
    instanceRef.current = instance;

    const virtualTour = instanceRef.current.getPlugin(VirtualTourPlugin);
    virtualTour.setNodes([
      {
        id: "1",
        panorama: Entrance,
        name: "Entrance",
        links: [{ nodeId: "2", position: { textureX: 100, textureY: 1800 } }],
        defaultZoomLvl: 0,
      },
      {
        id: "2",
        panorama: CoffeeHub,
        name: "CoffeeHub",
        links: [
          { nodeId: "1", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "3", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "3",
        panorama: GroundOffice1,
        name: "GroundOffice1",
        links: [
          { nodeId: "2", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "4", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "4",
        panorama: GroundOffice,
        name: "GroundOffice",
        links: [
          { nodeId: "3", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "5", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "5",
        panorama: L1Office,
        name: "L1Office",
        links: [
          { nodeId: "4", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "6", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "6",
        panorama: L1Kitchen,
        name: "L1Kitchen",
        links: [
          { nodeId: "5", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "7", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "7",
        panorama: L1KitchenOutside,
        name: "L1KitchenOutside",
        links: [
          { nodeId: "6", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "8", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "8",
        panorama: L4Reception,
        name: "L4Reception",
        links: [
          { nodeId: "7", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "9", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "9",
        panorama: L4Office,
        name: "L4Office",
        links: [
          { nodeId: "8", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "10", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "10",
        panorama: L4BoardRoom,
        name: "L4BoardRoom",
        links: [
          { nodeId: "9", position: { textureX: 3500, textureY: 1800 } },
          { nodeId: "11", position: { textureX: 100, textureY: 1800 } },
        ],
        defaultZoomLvl: 0,
      },
      {
        id: "11",
        panorama: Terrace,
        name: "Terrace",
        links: [{ nodeId: "10", position: { textureX: 3500, textureY: 1800 } }],
        defaultZoomLvl: 0,
      },
    ]);
  };

  // // Add fullscreen functionality
  // useEffect(() => {
  //   if (instanceRef.current) {
  //     const viewer = instanceRef.current.getViewer();
  //     viewer.toggleFullscreen();
  //   }
  // }, [instanceRef]);


  return (
    <>
      <ReactPhotoSphereViewer
        src={Entrance}
        plugins={plugins}
        height={"100vh"}
        width={"100vw"}
        onReady={handleReady}
      ></ReactPhotoSphereViewer>
    </>
  );
}

export default VirtualTour;




// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count - 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
