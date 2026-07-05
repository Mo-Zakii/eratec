-- Drop the insufficient policy
DROP POLICY IF EXISTS "Block anonymous access to contacts" ON public.contacts;

-- Create a proper restrictive policy that requires both authentication AND admin role
CREATE POLICY "Only admins can read contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));