import "@styles/globals.css";

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
        <div className="gradient" />
        <main className="app">
          {children}
        </main>
      </div>
    </body>

   </html>
  )
}

export default RootLayout;