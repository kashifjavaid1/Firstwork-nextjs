import Image from 'next/image';
const Bike=()=>{
    return(
        <>
        <h1>
            Bike sales this page
        </h1>
        
        <img src={"/imagies/bike.jpg"}
         alt="Picture of the author"
         width={400} 
         height={400} 
        
        />
        </>
    );
}
export default Bike;