import React from "react";
import UserDetails from "./UserDetails";
import { useRef } from "react";
const UserDetailsDownload = ({userDetails})=>{
 
    
    const handlePrintAndDownload = () => {
        // Trigger print dialog

        document.getElementById('download').innerHTML.print()
     
        // Simulate download by creating a temporary link and clicking it
        // const data = "Data to be downloaded"; // Replace with your report data
        // const blob = new Blob([data], { type: 'text/plain' });
        // const url = window.URL.createObjectURL(blob);
        // const a = document.createElement('a');
        // a.href = url;
        // a.download = 'report.txt'; // Change the file name and extension as needed
        // document.body.appendChild(a);
        // a.click();
        // window.URL.revokeObjectURL(url);
        // document.body.removeChild(a);
      };
    
    return (
        
        <>
            <div id = 'download'>
            <UserDetails  userDetails={userDetails} />
            </div>
            
            
            
        <div className="d-flex justify-content-center">
            <div className="hstack gap-2">
              <button type="button" className="btn btn-primary" onClick={handlePrintAndDownload}>
                Download<i className='bx bx-download align-baseline ms-1'></i>
              </button>
            </div>
          </div>
        </>
    )
}

export default UserDetailsDownload