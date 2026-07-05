-- Add user_id column to quote_requests table
ALTER TABLE public.quote_requests 
ADD COLUMN user_id UUID REFERENCES auth.users(id);

-- Add RLS policy for users to view their own quotes
CREATE POLICY "Users can view their own quotes"
ON public.quote_requests
FOR SELECT
USING (auth.uid() = user_id);

-- Add RLS policy for users to insert their own quotes
CREATE POLICY "Users can insert their own quotes"
ON public.quote_requests
FOR INSERT
WITH CHECK (auth.uid() = user_id OR user_id IS NULL);