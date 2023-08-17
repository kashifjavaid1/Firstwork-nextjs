import Header from "./(components)/header/header"

export default function RootLayout({ children }) {
  return (
    
      <body >
        <Header/>
        {children}</body>
   
  )
}
