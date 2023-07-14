import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ServiceCard from "./components/ServiceCard";
import Link from "next/link";

const services = [
  {
    imgSrc: "",
    imgDescription:
      "Graphic depicting an IT professional performing IT services",
    header: "IT Services",
    subHeader: "Excepteur sint occaecat cupidatat non proident, sunt in.",
  },
  {
    imgSrc: "",
    imgDescription:
      "Graphic depicting an IT professional performing IT services",
    header: "Mobile",
    subHeader: "Excepteur sint occaecat cupidatat non proident, sunt in.",
  },
  {
    imgSrc: "",
    imgDescription:
      "Graphic depicting the behind-the-scenes workings of software application",
    header: "Backend",
    subHeader: "Excepteur sint occaecat cupidatat non proident, sunt in.",
  },
  {
    imgSrc: "",
    imgDescription: "Graphic depicting a web application",
    header: "Web",
    subHeader: "Excepteur sint occaecat cupidatat non proident, sunt in.",
  },
  {
    imgSrc: "",
    imgDescription:
      "Graphic depicting collaboration to develop solutions for existing problems",
    header: "Project Rescue",
    subHeader: "Excepteur sint occaecat cupidatat non proident, sunt in.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSection
        id="home"
        header="Lorem Ipsum dolar ar sit amet."
        subheader="Ut enim ad minim veniam, quis aetw nostrud exercitation ullamco"
        image="/bluecomputerdev.png"
        imageDescription="Graphic of a computer monitor and IT related graphics used to convey the idea of IT solutions"
        reverse={false}
        callToAction="Learn More"
        ctaLink="/about"
      />

      <section
        id="services"
        className="w-full mx-auto py-20 px-4 sm:px-20 flex flex-col items-center"
      >
        <h3 className="text-4xl font-bold text-[#2f2c98] text-center">
          Let Us Dolar Sit Amet
        </h3>
        <div className="py-10 flex flex-wrap justify-center">
          {services.map((s) => (
            <ServiceCard
              imgSrc={s.imgSrc}
              imgDescription={s.imgDescription}
              header={s.header}
              subheader={s.subHeader}
            />
          ))}
        </div>
        <Link
          href={`/portfolio`}
          className={
            "block lg:inline-block text-neutral-100 hover:text-white font-bold "
          }
        >
          <button className="rounded-lg bg-[#F6A472] py-2 px-4 hover:bg-[#ff8300]">
            See Our Work
          </button>
        </Link>
      </section>

      <HeroSection
        id="services"
        header="Our Clients Are Lorem
        Because Ipsum Dolar"
        subheader="Ut enim ad minim veniam, quis aetw nostrud exercitation ullamco"
        image="/rateus.png"
        imageDescription="Graphic depicting the IT team leading the client towards success."
        reverse={false}
        callToAction="Let's Work Together"
        ctaLink="/contact"
      />

      <section
        id="about"
        className="w-full mx-auto py-20 px-4 sm:px-20 flex flex-col items-center"
      >
        <h3 className="text-4xl font-bold text-[#2f2c98] text-center">
          Who We Are
        </h3>
        <p className="mt-6 text-2xl leading-8 text-[#2f2c98] text-center">
          Ut enim ad minim veniam, quis aetw nostrud exercitation ullamco
        </p>
        <div className="py-10 flex flex-wrap justify-center">
          <Image
            src="/aboutus.png"
            alt="Graphic depicting the FESolution team."
            width={500}
            height={500}
          />
        </div>
        <Link
          href={`/about`}
          className={
            "block lg:inline-block text-neutral-100 hover:text-white font-bold "
          }
        >
          <button className="rounded-lg bg-[#F6A472] py-2 px-4 hover:bg-[#ff8300]">
            Learn More
          </button>
        </Link>
      </section>

      <HeroSection
        id="contact"
        header="Contact Us and Dolar Sit 
        Amet Ad Minim"
        subheader="Ut enim ad minim veniam, quis aetw nostr exercitation ullamco"
        image="/contact.png"
        imageDescription="Graphic depicting the FESolutions team responding to clients' inquiries."
        reverse={true}
        callToAction="Contact Us"
        ctaLink="/contact"
      />
    </main>
  );
}
