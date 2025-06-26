
-- Update all SaaS tools to remove promo codes except for Postyfy
-- and translate descriptions to English
UPDATE public.saas_tools 
SET 
  promo_code = CASE 
    WHEN title = 'Postyfy' THEN 'LAUNCH2025'
    ELSE ''
  END,
  description = CASE 
    WHEN title = 'Notion' THEN 'All-in-one workspace for notes, docs, and team collaboration.'
    WHEN title = 'Figma' THEN 'Collaborative interface design tool for teams and designers.'
    WHEN title = 'Linear' THEN 'Modern issue tracking and project management for software teams.'
    WHEN title = 'Midjourney' THEN 'AI-powered image generation for creative projects and design.'
    WHEN title = 'Vercel' THEN 'Frontend cloud platform for modern web development and deployment.'
    WHEN title = 'Supabase' THEN 'Open source Firebase alternative with PostgreSQL database.'
    WHEN title = 'Postyfy' THEN 'Create social media posts for multiple networks with one click using AI'
    ELSE description
  END,
  tags = CASE 
    WHEN title = 'Notion' THEN ARRAY['Productivity']
    WHEN title = 'Figma' THEN ARRAY['Design']
    WHEN title = 'Linear' THEN ARRAY['Project Management']
    WHEN title = 'Midjourney' THEN ARRAY['AI', 'Design']
    WHEN title = 'Vercel' THEN ARRAY['Development']
    WHEN title = 'Supabase' THEN ARRAY['Development']
    WHEN title = 'Postyfy' THEN ARRAY['AI', 'Social Media']
    ELSE tags
  END;
