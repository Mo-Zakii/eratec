-- Create careers table for job openings
CREATE TABLE public.careers (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  type text NOT NULL DEFAULT 'Full-time',
  location text NOT NULL,
  about_the_role text[] NOT NULL DEFAULT '{}',
  short_term_goals text[] NOT NULL DEFAULT '{}',
  what_you_bring text[] NOT NULL DEFAULT '{}',
  why_you_might_love text[] NOT NULL DEFAULT '{}',
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create job_applications table for career applications
CREATE TABLE public.job_applications (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  career_id uuid REFERENCES public.careers(id) ON DELETE SET NULL,
  job_title text NOT NULL,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  current_company text,
  linkedin_url text,
  cv_link text,
  note text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Create service_inquiries table for service detail contact form
CREATE TABLE public.service_inquiries (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_name text NOT NULL,
  full_name text NOT NULL,
  phone text NOT NULL,
  note text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on all tables
ALTER TABLE public.careers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_inquiries ENABLE ROW LEVEL SECURITY;

-- Careers policies - public can view active careers, admins can manage
CREATE POLICY "Anyone can view active careers" ON public.careers
FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can view all careers" ON public.careers
FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert careers" ON public.careers
FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update careers" ON public.careers
FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete careers" ON public.careers
FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- Job applications policies - anyone can apply, admins can manage
CREATE POLICY "Anyone can submit job applications" ON public.job_applications
FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all job applications" ON public.job_applications
FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update job applications" ON public.job_applications
FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete job applications" ON public.job_applications
FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- Service inquiries policies - anyone can submit, admins can manage
CREATE POLICY "Anyone can submit service inquiries" ON public.service_inquiries
FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all service inquiries" ON public.service_inquiries
FOR SELECT USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update service inquiries" ON public.service_inquiries
FOR UPDATE USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete service inquiries" ON public.service_inquiries
FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- Create triggers for updating timestamps
CREATE TRIGGER update_careers_updated_at
BEFORE UPDATE ON public.careers
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_job_applications_updated_at
BEFORE UPDATE ON public.job_applications
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_service_inquiries_updated_at
BEFORE UPDATE ON public.service_inquiries
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample career data
INSERT INTO public.careers (slug, title, type, location, about_the_role, short_term_goals, what_you_bring, why_you_might_love) VALUES
('senior-plumber', 'Senior Plumber', 'Full-time', 'New York, NY',
  ARRAY['We''re looking for a Senior Plumber to lead our residential and commercial plumbing projects. In this role, you''ll mentor junior technicians, handle complex installations, and ensure our clients receive top-quality service.', 'The ideal candidate has 5+ years of hands-on experience, strong leadership skills, and a commitment to excellence in every project.'],
  ARRAY['Lead complex plumbing installations and repairs.', 'Mentor and train junior plumbing technicians.', 'Ensure all work meets safety and quality standards.', 'Communicate with clients about project timelines and solutions.'],
  ARRAY['5+ years of plumbing experience (residential and commercial).', 'Strong leadership and mentoring abilities.', 'Expert troubleshooting and problem-solving skills.', 'Valid plumbing license and certifications.', 'Excellent communication and customer service skills.'],
  ARRAY['Competitive salary with leadership bonuses.', 'Comprehensive health, dental, and vision insurance.', 'Paid training and certification opportunities.', 'Career advancement into management roles.']
),
('plumbing-technician', 'Plumbing Technician', 'Full-time', 'Brooklyn, NY',
  ARRAY['We''re looking for a skilled Plumbing Technician to join our growing team. In this role, you''ll be responsible for diagnosing and repairing plumbing issues, installing new fixtures, and ensuring our clients receive top-quality service.', 'The ideal candidate has hands-on experience in residential or commercial plumbing, excellent problem-solving skills, and a commitment to customer satisfaction.'],
  ARRAY['Respond to service calls and diagnose plumbing issues efficiently.', 'Perform installations, repairs, and maintenance on pipes, fixtures, and systems.', 'Communicate clearly with customers about issues and solutions.', 'Follow safety protocols and maintain a clean work environment.'],
  ARRAY['1-3 years of plumbing experience (residential or commercial).', 'Strong troubleshooting and problem-solving abilities.', 'Ability to work independently and as part of a team.', 'Excellent communication and customer service skills.', 'Valid driver''s license and reliable transportation.'],
  ARRAY['Competitive pay with performance bonuses.', 'Health, dental, and vision insurance.', 'Paid training and professional development opportunities.', 'A supportive team environment with growth potential.']
),
('project-manager', 'Project Manager', 'Full-time', 'Manhattan, NY',
  ARRAY['We''re seeking an experienced Project Manager to oversee large-scale plumbing installations and renovations. You''ll coordinate with clients, contractors, and our team to ensure projects are completed on time and within budget.', 'The ideal candidate has strong organizational skills, experience managing construction projects, and the ability to lead cross-functional teams.'],
  ARRAY['Plan and oversee plumbing installation projects from start to finish.', 'Coordinate schedules, resources, and budgets effectively.', 'Communicate project updates to stakeholders regularly.', 'Ensure all projects meet quality and safety standards.'],
  ARRAY['3-5 years of project management experience in construction or plumbing.', 'Strong organizational and multitasking skills.', 'Proficiency in project management software.', 'Excellent leadership and communication abilities.', 'PMP certification is a plus.'],
  ARRAY['Competitive salary with project completion bonuses.', 'Full benefits package including 401(k).', 'Opportunity to lead high-profile projects.', 'Collaborative and supportive work culture.']
);