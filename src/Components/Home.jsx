import Brand from "./home_components/Brand";
import Cars from "./home_components/Cars";
import Hero from "./home_components/Hero";
import Popular_Cars from "./home_components/Popular_Cars";
import Gallery from "./home_components/gallery";



const Home = () => {
    return (
        <div className="py-5">
            <Hero></Hero>

            <p className="text-3xl text-center py-2 md:py-5 text-white font-bold">Gallery</p>
            <Gallery></Gallery>

            <p className="text-3xl text-center py-2 md:py-5 text-white font-bold">Car Toys</p>
            <Cars></Cars>

            <p className="text-3xl text-center py-2 md:py-5 text-white font-bold">Popular Car Toys</p>
            <Popular_Cars></Popular_Cars>

            <p className="text-3xl text-center py-2 md:py-5 text-white font-bold">Visit Brand</p>
        <Brand></Brand>

        </div>
    );
};

export default Home;