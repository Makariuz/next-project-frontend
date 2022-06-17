import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar, FileUpload } from "components";
import {useState} from 'react'

function App() {
  // variable to store file url
  const [file, setFile] = useState()

  return (
    <div>
    {/*   <Navbar />
      <FileUpload setFile={setFile}/>
      <img src={file} />
     */}  
      <Outlet />
{/*       <div className="footer__design">
      footer
      </div>
       */}
    </div>
  );
}

export default App;
