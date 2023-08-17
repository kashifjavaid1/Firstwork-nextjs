import TopNavbar from "../(components)/topnavbar/topnavbar";


export default function RootLayout({ children }) {
    return (
     
        <body >
            
            <TopNavbar/>
            {children}</body>
      
    )
  }
