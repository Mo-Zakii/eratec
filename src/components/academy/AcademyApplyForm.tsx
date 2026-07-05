import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { academyPrograms } from "@/data/academy";
import { useAuth } from "@/hooks/useAuth";
import { useUserProfile } from "@/hooks/useUserProfile";
import { supabase } from "@/integrations/supabase/client";
import { BookOpen, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const nameSchema = z.string().trim().min(1, "Name is required").max(100);
const emailSchema = z.string().trim().email("Invalid email address").max(255);
const phoneSchema = z.string().trim().min(1, "Phone is required").max(20);

type AcademyApplyFormProps = {
  programSlug?: string;
  title?: string;
};

const AcademyApplyForm = ({
  programSlug,
  title = "Apply for Training",
}: AcademyApplyFormProps) => {
  const { user } = useAuth();
  const { data: profile } = useUserProfile(user?.id);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [background, setBackground] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const program = academyPrograms.find((p) => p.slug === programSlug);

  useEffect(() => {
    if (user) {
      if (user.email && !email) setEmail(user.email);
      if (!fullName) {
        setFullName(profile?.full_name || user.user_metadata?.full_name || "");
      }
      if (!phone) {
        setPhone(profile?.phone || user.user_metadata?.phone || "");
      }
    }
  }, [user, profile, email, fullName, phone]);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    const nameResult = nameSchema.safeParse(fullName);
    if (!nameResult.success) newErrors.fullName = nameResult.error.errors[0].message;
    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) newErrors.email = emailResult.error.errors[0].message;
    const phoneResult = phoneSchema.safeParse(phone);
    if (!phoneResult.success) newErrors.phone = phoneResult.error.errors[0].message;
    if (!programSlug) newErrors.program = "Program not selected";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("contacts").insert({
        full_name: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        service: "eratec-academy",
        notes: [
          `Program: ${program?.title || programSlug}`,
          background.trim() ? `Background: ${background.trim()}` : null,
          note.trim() ? `Note: ${note.trim()}` : null,
        ]
          .filter(Boolean)
          .join("\n"),
      });

      if (error) throw error;

      toast.success("Training application submitted! We'll contact you soon.");
      setFullName("");
      setEmail("");
      setPhone("");
      setBackground("");
      setNote("");
      setErrors({});
    } catch (error) {
      console.error("Error submitting academy application:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="apply" className="bg-[#f4f4f7] rounded-2xl p-6 sm:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-tertiary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-black">{title}</h2>
          {program && (
            <p className="text-muted-foreground text-sm">{program.title}</p>
          )}
        </div>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block font-medium text-black mb-2">Full Name *</label>
          <Input
            className="bg-transparent h-11"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          {errors.fullName && (
            <p className="text-destructive text-sm mt-1">{errors.fullName}</p>
          )}
        </div>
        <div>
          <label className="block font-medium text-black mb-2">Email *</label>
          <Input
            type="email"
            className="bg-transparent h-11"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <label className="block font-medium text-black mb-2">Phone *</label>
          <Input
            type="tel"
            className="bg-transparent h-11"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && (
            <p className="text-destructive text-sm mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label className="block font-medium text-black mb-2">Background / Current Role</label>
          <Input
            className="bg-transparent h-11"
            placeholder="e.g. Junior MEP engineer, HVAC technician..."
            value={background}
            onChange={(e) => setBackground(e.target.value)}
          />
        </div>
        <div>
          <label className="block font-medium text-black mb-2">Additional Notes</label>
          <Textarea
            className="bg-transparent min-h-[100px]"
            placeholder="Tell us about your experience and training goals..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-6"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>

      <p className="text-muted-foreground text-xs mt-4 leading-relaxed">
        Looking for a full-time role?{" "}
        <Link to="/career" className="text-primary font-semibold hover:text-tertiary">
          View career openings
        </Link>
      </p>
    </div>
  );
};

export default AcademyApplyForm;
