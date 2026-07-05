import CTA from "@/components/CTA";
import FadeIn from "@/components/FadeIn";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getServiceBySlug, services } from "@/data/services";
import { getServiceDetail } from "@/data/serviceDetails";
import { useCreateServiceInquiry } from "@/hooks/useServiceInquiries";
import { useAuth } from "@/hooks/useAuth";
import { useUserProfile } from "@/hooks/useUserProfile";
import { Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";

const nameSchema = z.string().trim().min(1, "Name is required").max(100);
const phoneSchema = z.string().trim().min(1, "Phone is required").max(20);

const FlipButton = ({ children }: { children: React.ReactNode }) => (
  <button className="group relative px-8 py-4 bg-primary rounded-full overflow-hidden">
    <span className="relative block overflow-hidden h-6">
      <span className="block transition-transform duration-300 group-hover:-translate-y-full text-white font-semibold">
        {children}
      </span>
      <span className="absolute top-full left-0 block transition-transform duration-300 group-hover:-translate-y-full text-white font-semibold">
        {children}
      </span>
    </span>
  </button>
);

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "") ?? services[0];
  const detail = getServiceDetail(service.slug)!;
  const { user } = useAuth();
  const { data: profile } = useUserProfile(user?.id);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(service.slug);
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const createInquiry = useCreateServiceInquiry();

  useEffect(() => {
    if (slug) setSelectedService(slug);
  }, [slug]);

  useEffect(() => {
    if (user) {
      if (!fullName) {
        setFullName(profile?.full_name || user.user_metadata?.full_name || "");
      }
      if (!phone) {
        setPhone(profile?.phone || user.user_metadata?.phone || "");
      }
    }
  }, [user, profile, fullName, phone]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const nameResult = nameSchema.safeParse(fullName);
    if (!nameResult.success) newErrors.fullName = nameResult.error.errors[0].message;
    const phoneResult = phoneSchema.safeParse(phone);
    if (!phoneResult.success) newErrors.phone = phoneResult.error.errors[0].message;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const serviceName = getServiceBySlug(selectedService)?.title || service.title;
    await createInquiry.mutateAsync({
      service_name: serviceName,
      full_name: fullName.trim(),
      phone: phone.trim(),
      note: note.trim() || null,
      user_id: user?.id || null,
    });

    setFullName("");
    setPhone("");
    setNote("");
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-transparent py-8 sm:py-12">
        <div className="container-custom section-padding py-6 sm:py-12">
          <div className="text-muted-foreground text-sm mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
          </div>

          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-4">
              <h2 className="text-black text-3xl sm:text-5xl md:text-7xl font-bold">{service.title}</h2>
              <Link to="/contact">
                <FlipButton>Request Consultation</FlipButton>
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <p className="text-muted-foreground text-lg max-w-xl mb-12">{service.description}</p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="rounded-xl overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[240px] sm:h-[360px] md:h-[500px] object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="pt-16">
        <div className="container-custom section-padding">
          <div className="flex lg:flex-row flex-col gap-12 lg:gap-24">
            <div className="w-full max-w-[640px]">
              <FadeIn>
                <p className="text-primary font-semibold mb-4">Solution Details</p>
                <h3 className="text-4xl md:text-5xl font-bold text-black mb-6">{detail.aboutTitle}</h3>
              </FadeIn>

              <FadeIn delay={100}>
                <div className="text-muted-foreground font-medium leading-relaxed mb-8 whitespace-pre-line">
                  {detail.aboutDescription}
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h4 className="text-2xl font-bold text-black mb-4">What is included?</h4>
                <div className="space-y-4">
                  {detail.included.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <section className="py-16 lg:py-32">
                <FadeIn>
                  <p className="text-primary font-bold mb-4">Delivery Process</p>
                  <h3 className="text-4xl md:text-5xl font-bold text-black mb-4">How We Work</h3>
                  <p className="text-muted-foreground max-w-2xl mb-12">
                    Every ERATEC project follows a rigorous engineering-led process — from initial survey through commissioning and long-term after-sales support.
                  </p>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-12">
                  {detail.workSteps.map((step, index) => (
                    <FadeIn key={index} delay={index * 100}>
                      <div className="flex flex-col gap-4">
                        <div className="w-14 h-14 rounded-full border border-secondary flex items-center justify-center flex-shrink-0">
                          <span className="text-secondary font-bold">{step.number}</span>
                        </div>
                        <div>
                          <h5 className="text-2xl font-bold text-black mb-2">{step.title}</h5>
                          <p className="text-muted-foreground font-medium">{step.description}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </section>

              <section className="pt-16">
                <FadeIn>
                  <p className="text-primary font-bold mb-4">Benefits</p>
                  <h3 className="text-3xl md:text-5xl font-bold text-black mb-6">Why Choose This Solution</h3>
                </FadeIn>

                <FadeIn delay={100}>
                  <div className="space-y-4">
                    {detail.benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-1">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <p className="text-muted-foreground font-medium">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              </section>
            </div>

            <div className="w-full lg:w-auto lg:sticky lg:top-10 h-fit lg:flex lg:justify-end">
              <FadeIn className="w-full max-w-[460px]" delay={300}>
                <div className="bg-[#f4f4f7] p-5 sm:p-8 rounded-xl">
                  <h4 className="text-3xl font-bold text-black mb-6">Request a Consultation</h4>

                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div>
                      <label className="font-bold text-black mb-2 block">Full Name</label>
                      <Input
                        className="bg-transparent h-12"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your name"
                      />
                      {errors.fullName && (
                        <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="font-bold text-black mb-2 block">Phone</label>
                      <Input
                        className="bg-transparent border-border h-12"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 12 345 67 89"
                      />
                      {errors.phone && (
                        <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="font-bold text-black mb-2 block">Select A Solution</label>
                      <Select value={selectedService} onValueChange={setSelectedService}>
                        <SelectTrigger className="bg-transparent h-12 border-border">
                          <SelectValue placeholder="Select a solution" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((s) => (
                            <SelectItem key={s.slug} value={s.slug}>
                              {s.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="font-bold text-black mb-2 block">Project Details</label>
                      <Textarea
                        placeholder="Tell us about your project..."
                        className="bg-transparent border-border min-h-[100px]"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-secondary/90 text-white py-6"
                      disabled={createInquiry.isPending}
                    >
                      {createInquiry.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                  </form>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
