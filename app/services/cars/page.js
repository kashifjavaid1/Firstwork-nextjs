import Image from "next/image";
const Cars=()=>{
    return(
        <>
        <h1>
            Cars sales this page
        </h1>
        <img src={"/imagies/car.jpg"}
         alt="Picture of the author"
         width={500} 
         height={500} 
        />
        </>
    );
}
export default Cars;