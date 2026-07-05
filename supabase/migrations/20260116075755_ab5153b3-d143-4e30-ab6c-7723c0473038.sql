-- Create quote_requests table to store quote requests from users
CREATE TABLE public.quote_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact information
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  
  -- Quote details (from calculator)
  service_slug TEXT NOT NULL,
  service_title TEXT NOT NULL,
  complexity_label TEXT NOT NULL,
  complexity_multiplier NUMERIC NOT NULL DEFAULT 1,
  estimated_hours NUMERIC NOT NULL,
  urgency TEXT NOT NULL DEFAULT 'standard',
  base_price NUMERIC NOT NULL,
  estimated_min NUMERIC NOT NULL,
  estimated_max NUMERIC NOT NULL,
  
  -- Additional notes
  notes TEXT,
  
  -- Status tracking
  status TEXT NOT NULL DEFAULT 'pending'
);

-- Enable Row Level Security
ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert quote requests (public form)
CREATE POLICY "Anyone can submit quote requests" 
ON public.quote_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all quote requests
CREATE POLICY "Admins can view all quote requests" 
ON public.quote_requests 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create policy for admins to update quote requests
CREATE POLICY "Admins can update quote requests" 
ON public.quote_requests 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create policy for admins to delete quote requests
CREATE POLICY "Admins can delete quote requests" 
ON public.quote_requests 
FOR DELETE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_quote_requests_updated_at
BEFORE UPDATE ON public.quote_requests
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();