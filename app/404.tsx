import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-gray-800">Error</h1>
        <p className="text-xl text-gray-600">Something went wrong. Please try again later</p>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
