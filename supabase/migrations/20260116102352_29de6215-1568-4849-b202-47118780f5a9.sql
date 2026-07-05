-- Add explicit blocking policy for anonymous users on contacts table
-- This is an extra safety measure even though the admin-only SELECT policy should already block unauthorized access

CREATE POLICY "Block anonymous access to contacts"
ON public.contacts
FOR SELECT
USING (auth.uid() IS NOT NULL);

-- Note: This policy combined with "Admins can view all contacts" means:
-- Anonymous users: auth.uid() IS NULL -> blocked by this policy
-- Authenticated non-admins: can pass this policy BUT cannot pass admin check -> still no access
-- Admins: can pass both policies -> can access