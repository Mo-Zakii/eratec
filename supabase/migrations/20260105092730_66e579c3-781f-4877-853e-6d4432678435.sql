-- Create blogs table
CREATE TABLE public.blogs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT NOT NULL DEFAULT 'Plumbing Tips',
  read_time TEXT DEFAULT '5 min read',
  is_featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published blogs
CREATE POLICY "Anyone can view published blogs"
ON public.blogs
FOR SELECT
USING (published = true);

-- Create app_role enum if not exists
DO $$ BEGIN
  CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
EXCEPTION
  WHEN duplicate_object THEN null;
END $$;

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS for user_roles - only admins can view
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Admin policies for blogs
CREATE POLICY "Admins can view all blogs"
ON public.blogs
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert blogs"
ON public.blogs
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update blogs"
ON public.blogs
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete blogs"
ON public.blogs
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create profiles table for user info
CREATE TABLE public.profiles (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data ->> 'full_name');
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Trigger for updated_at on blogs
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_blogs_updated_at
  BEFORE UPDATE ON public.blogs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();