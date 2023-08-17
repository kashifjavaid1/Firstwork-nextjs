import Image from 'next/image'
const Home=()=>{
    return(
        <>
        <h1>
            Home
        </h1>

        <Image
      src={"/imagies/download.jpg"}
      alt="Picture of the author"
      width={500} 
      height={500}  
    />

        </>
    );
}
export default Home;