-- Create contacts table for general contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT,
  notes TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Anyone can submit contact form
CREATE POLICY "Anyone can submit contact" 
  ON public.contacts 
  FOR INSERT 
  WITH CHECK (true);

-- Admins can view all contacts
CREATE POLICY "Admins can view all contacts" 
  ON public.contacts 
  FOR SELECT 
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can update contacts
CREATE POLICY "Admins can update contacts" 
  ON public.contacts 
  FOR UPDATE 
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Admins can delete contacts
CREATE POLICY "Admins can delete contacts" 
  ON public.contacts 
  FOR DELETE 
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Trigger for updated_at
CREATE TRIGGER update_contacts_updated_at
  BEFORE UPDATE ON public.contacts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();