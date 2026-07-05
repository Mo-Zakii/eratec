-- Fix the service_inquiries INSERT policy to be PERMISSIVE
DROP POLICY IF EXISTS "Anyone can submit service inquiries" ON public.service_inquiries;

CREATE POLICY "Anyone can submit service inquiries"
ON public.service_inquiries
FOR INSERT
TO public
WITH CHECK (true);