import Logo from "/src/assets/logo.png"
import Container from "../Container";
import Image from "../Image"

const Header = () => {
  return (
    <>
      <div className="">
        <Container>
          <div className="flex justify-between items-center py-2">
          <div className="">
           <Image imgSrc={Logo}/>
          </div>
          <div className="">
            <ul className="flex gap-x-5 text-[#616161] font-poppins">
              <li>Home</li>
              <li>Tours</li>
              <li>Booking</li>
              <li>Pages</li>
              <li>Features</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="">
            <button className="bg-[#007F5F] rounded-[17px] px-9 py-4 text-white font-semibold font-poppins">Book Now</button>
          </div>
        </div>
        </Container>
      </div>
    </>
  )
}

export default Header
