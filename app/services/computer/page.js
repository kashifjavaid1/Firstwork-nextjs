import Image from 'next/image'
const Computer = () => {
    return (
        <>
            <h2>Computer</h2>
            <p>
                Dell<br />
                HP
            </p>
            <img src={"/imagies/computer.jpg"}
             alt="Picture of the author"
             width={500} 
             height={500} />
        </>
    );
}

export default Computer;