import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import FadeIn from "@/components/FadeIn";

const testimonials = [{
  name: "Eng. Ahmed Hassan",
  location: "MEP Consultant, Cairo",
  text: "ERATEC's technical team supported our design with accurate VRF selections and BIM coordination. Their responsiveness made a real difference on a tight programme.",
  avatar: avatar1
}, {
  name: "Eng. Sara Mostafa",
  location: "Project Manager, New Capital",
  text: "Delivery was on time, the commissioning was clean and the after-sales support has been excellent. Exactly the partner we needed for a project of this scale.",
  avatar: avatar2
}, {
  name: "Khaled Ibrahim",
  location: "Facility Director, Hospitality Group",
  text: "Their maintenance contract has kept our central HVAC running at peak performance for three seasons running. Predictable cost, predictable comfort.",
  avatar: avatar3
}, {
  name: "Eng. Mohamed Adel",
  location: "Main Contractor, Giza",
  text: "From pricing to handover, ERATEC behaved like a true engineering partner — not just a supplier. We trust them on every electromechanical package.",
  avatar: avatar1
}, {
  name: "Dr. Nadia Farouk",
  location: "Facility Manager, Healthcare",
  text: "Critical environments demand absolute reliability. ERATEC understands that and engineers their systems accordingly. Highly recommended.",
  avatar: avatar2
}];

const TestimonialCard = ({
  name,
  location,
  text,
  avatar
}: typeof testimonials[0]) => <div className="bg-white rounded-2xl p-6 min-w-[320px] max-w-[320px] flex-shrink-0">
    <div className="flex items-center gap-3 mb-4">
      <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
      <div>
        <h6 className="font-semibold text-base text-secondary">{name}</h6>
        <p className="text-muted-foreground text-sm">{location}</p>
      </div>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
  </div>;

const Testimonials = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  return <section className="py-20 lg:py-32 bg-primary overflow-hidden">
    <div className="container-custom section-padding">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
        <div>
          <FadeIn>
            <p className="text-tertiary font-medium mb-4">CLIENT VOICES</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="text-white">
              Trusted by engineers,
              <br />
              contractors and owners.
            </h2>
          </FadeIn>
        </div>
        <FadeIn delay={200}>
          <p className="text-white max-w-xl mt-6 lg:mt-0">
            We work alongside consultants, MEP contractors, developers and facility teams across Egypt. Their feedback is the clearest signal of how we deliver.
          </p>
        </FadeIn>
      </div>
    </div>

    {/* Marquee Row 1 - Slides Left */}
    <FadeIn delay={300}>
      <div className="relative mb-4">
        <div className="flex gap-4 animate-marquee-left">
          {duplicatedTestimonials.map((testimonial, index) => <TestimonialCard key={`row1-${index}`} {...testimonial} />)}
        </div>
      </div>
    </FadeIn>

    {/* Marquee Row 2 - Slides Right */}
    <FadeIn delay={400}>
      <div className="relative">
        <div className="flex gap-4 animate-marquee-right">
          {duplicatedTestimonials.map((testimonial, index) => <TestimonialCard key={`row2-${index}`} {...testimonial} />)}
        </div>
      </div>
    </FadeIn>
  </section>;
};
export default Testimonials;