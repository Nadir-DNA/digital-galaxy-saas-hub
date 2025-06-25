
-- Create the saas_tools table
CREATE TABLE public.saas_tools (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  url TEXT NOT NULL,
  tags TEXT[] NOT NULL DEFAULT '{}',
  description TEXT NOT NULL,
  promo_code TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (for future admin features)
ALTER TABLE public.saas_tools ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access (since this is public data)
CREATE POLICY "Allow public read access to saas_tools" 
  ON public.saas_tools 
  FOR SELECT 
  TO PUBLIC
  USING (true);

-- Insert existing SaaS tools from the current code
INSERT INTO public.saas_tools (title, url, tags, description, promo_code) VALUES
  ('Notion', 'https://notion.so', ARRAY['Productivity'], 'All-in-one workspace for notes, docs, and collaboration.', 'DNA20'),
  ('Figma', 'https://figma.com', ARRAY['Design'], 'Collaborative interface design tool for teams.', 'DNA15'),
  ('Linear', 'https://linear.app', ARRAY['Project Management'], 'Modern issue tracking for software development.', 'DNA25'),
  ('Midjourney', 'https://midjourney.com', ARRAY['AI'], 'AI-powered image generation for creative projects.', 'DNA30'),
  ('Vercel', 'https://vercel.com', ARRAY['Development'], 'Frontend cloud platform for modern web projects.', 'DNA10'),
  ('Supabase', 'https://supabase.com', ARRAY['Development'], 'Open source Firebase alternative with PostgreSQL.', 'DNA20'),
  ('Postyfy', 'https://postyfy.app', ARRAY['AI', 'Social Media'], 'Créer de post pour multi réseau social en un clic', 'LAUNCH2025');
