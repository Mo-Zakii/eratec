import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import work1 from "@/assets/work-1.png";
import work2 from "@/assets/work-2.png";
import work3 from "@/assets/work-3.png";
import work4 from "@/assets/work-4.png";
import work5 from "@/assets/work-5.png";
import { Link } from "react-router-dom";

const industries = [
  { slug: "real-estate", title: "Real Estate & Residential", image: work1, description: "HVAC and electromechanical systems for luxury residential towers, gated communities and mixed-use developments." },
  { slug: "healthcare", title: "Healthcare", image: work3, description: "Precision climate, filtration and reliability for hospitals, clinics and pharmaceutical environments." },
  { slug: "hospitality", title: "Hospitality", image: work4, description: "Guest-comfort engineering for hotels, resorts and F&B venues — quiet operation, zoned control, premium feel." },
  { slug: "industrial", title: "Industrial", image: work5, description: "Process cooling, ventilation and electromechanical packages built for factories, warehouses and utilities." },
  { slug: "commercial", title: "Commercial Facilities", image: work2, description: "Office towers, retail and mixed-use projects served end-to-end — from design support to maintenance." },
];

const Industries = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-20 lg:pt-32 bg-white">
        <div className="container-custom section-padding">
          <div className="text-muted-foreground text-sm mb-4">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">Industries</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <h1 className="text-black text-3xl sm:text-5xl lg:text-7xl font-bold">Industries Served</h1>
            <p className="text-muted-foreground text-lg lg:pt-4">
              ERATEC supports projects across Egypt's most demanding sectors. Our engineering, supply and after-sales capabilities scale from boutique fit-outs to large multi-discipline programmes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 pb-20">
            {industries.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 100}>
                <div className="group bg-[#f3f3f6] rounded-2xl overflow-hidden hover:bg-primary transition-colors duration-300 h-full">
                  <div className="overflow-hidden max-h-[220px] sm:max-h-[280px] lg:max-h-[340px]">
                    <img src={item.image} alt={item.title} className="w-full h-56 sm:h-72 lg:h-[340px] object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-3 text-black group-hover:text-accent transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground group-hover:text-white transition-colors">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <CTA />
      <Footer />
    </div>
  );
};

export default Industries;
