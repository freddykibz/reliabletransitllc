import "@styles/globals.css";
import TopBar from "@components/TopBar";
import Footer from "@components/Footer";
import NavBar from "@components/Nav";

export const metadata = {
  title: 'Reliable Transit LLC',
  description: 'dedicated paratransit company provides safe and comfortable transportation options. Whether for medical appointments or daily activities, trust us for inclusive and accessible travel solutions.',
}

const RootLayout = ({ children }) => {
  return (
   <html lang ="en">
    <body>
      <div className='main'>
        {/* background */}
         {/* <div className="gradient" /> */}
         </div>   
        <main className="app">
        <NavBar/>
         {/* <Nav/>        */}
          {children}
          <Footer/>
        </main>
    </body>
   </html>
  )
}

export default RootLayout;