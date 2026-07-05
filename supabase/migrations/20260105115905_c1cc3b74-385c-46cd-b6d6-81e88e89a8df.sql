-- Remove the email column from profiles table since it's already stored in auth.users
-- This reduces the attack surface for email data exposure
ALTER TABLE public.profiles DROP COLUMN IF EXISTS email;

-- Add policy for admins to view all profiles for customer support
CREATE POLICY "Admins can view all profiles" 
ON public.profiles 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));