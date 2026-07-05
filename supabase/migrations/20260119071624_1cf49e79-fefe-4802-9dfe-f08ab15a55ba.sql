-- Add phone column to profiles table
ALTER TABLE public.profiles ADD COLUMN phone text;

-- Add service_date column to quote_requests table
ALTER TABLE public.quote_requests ADD COLUMN service_date date;

-- Update the handle_new_user function to include phone
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
BEGIN
  INSERT INTO public.profiles (user_id, full_name, phone)
  VALUES (new.id, new.raw_user_meta_data ->> 'full_name', new.raw_user_meta_data ->> 'phone');
  RETURN new;
END;
$function$;