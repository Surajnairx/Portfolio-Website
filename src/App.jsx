import Form from "./components/Form";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Technology from "./components/Technology";

export default function App() {
  return (
    <main className=" bg-white px-10 md:px-20 lg:px-40">
      <section className=" min-h-screen ">
        <Navbar />
        <Hero />
        <Services />
        <Technology />
        <Form />
      </section>
    </main>
  );
}
