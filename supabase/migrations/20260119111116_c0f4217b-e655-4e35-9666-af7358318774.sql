-- Add user_id to service_inquiries table to track which user submitted the inquiry
ALTER TABLE public.service_inquiries ADD COLUMN user_id uuid REFERENCES auth.users(id);

-- Create index for better query performance
CREATE INDEX idx_service_inquiries_user_id ON public.service_inquiries(user_id);

-- Add policy for users to view their own service inquiries
CREATE POLICY "Users can view their own service inquiries" 
ON public.service_inquiries
FOR SELECT 
USING (auth.uid() = user_id);