-- ===========================================
-- TreeValue Pro Database Schema
-- ===========================================
-- Run this in Supabase SQL Editor to set up your database

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ===========================================
-- PROFILES TABLE
-- ===========================================
-- Stores user information linked to auth.users

CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  zip_code TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Users can view and update their own profile
CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  USING (auth.uid() = id);

-- Allow insert for new users (via trigger or signup)
CREATE POLICY "Enable insert for authenticated users"
  ON profiles FOR INSERT
  WITH CHECK (auth.uid() = id);

-- ===========================================
-- TREES TABLE
-- ===========================================
-- Stores tree valuation records

CREATE TABLE IF NOT EXISTS trees (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,

  -- Heuristic inputs
  species_input TEXT NOT NULL,
  height_heuristic TEXT NOT NULL,
  girth_heuristic TEXT NOT NULL,
  location_type TEXT DEFAULT 'front_yard',
  zip_code TEXT,

  -- Calculated values
  calculated_value_structural NUMERIC(12, 2),
  calculated_value_eco NUMERIC(10, 2),

  -- Optional photo
  image_url TEXT,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create index for user lookups
CREATE INDEX IF NOT EXISTS idx_trees_user_id ON trees(user_id);

-- Enable Row Level Security
ALTER TABLE trees ENABLE ROW LEVEL SECURITY;

-- Users can view their own trees
CREATE POLICY "Users can view own trees"
  ON trees FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own trees
CREATE POLICY "Users can insert own trees"
  ON trees FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- ===========================================
-- AD_CLICKS TABLE (Monetization Ledger)
-- ===========================================
-- Tracks clicks for Pay-Per-Click billing

CREATE TABLE IF NOT EXISTS ad_clicks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tree_id UUID REFERENCES trees(id) ON DELETE SET NULL,
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,

  -- Click details
  target_url TEXT NOT NULL,
  clicked_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,

  -- Attribution data
  ip_address INET,
  user_agent TEXT
);

-- Create indexes for analytics queries
CREATE INDEX IF NOT EXISTS idx_ad_clicks_tree_id ON ad_clicks(tree_id);
CREATE INDEX IF NOT EXISTS idx_ad_clicks_user_id ON ad_clicks(user_id);
CREATE INDEX IF NOT EXISTS idx_ad_clicks_clicked_at ON ad_clicks(clicked_at);

-- Enable Row Level Security
ALTER TABLE ad_clicks ENABLE ROW LEVEL SECURITY;

-- No public SELECT - only admins/service role can read
-- Insert allowed via service role (from API route)
CREATE POLICY "Service role can insert clicks"
  ON ad_clicks FOR INSERT
  WITH CHECK (true);  -- Will be called with service_role key

-- ===========================================
-- FUNCTIONS & TRIGGERS
-- ===========================================

-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ===========================================
-- STORAGE BUCKET (for tree images)
-- ===========================================
-- Run this separately via Supabase SQL Editor (storage operations)

INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('tree-images', 'tree-images', true, 5242880)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can view tree images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'tree-images');

CREATE POLICY "Service role can upload images"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'tree-images');

-- ===========================================
-- SAMPLE DATA (for testing)
-- ===========================================
-- Uncomment to insert test data

-- INSERT INTO profiles (id, email, zip_code)
-- VALUES (
--   '00000000-0000-0000-0000-000000000001',
--   'test@example.com',
--   '22101'
-- );

-- INSERT INTO trees (user_id, species_input, height_heuristic, girth_heuristic, calculated_value_structural, calculated_value_eco)
-- VALUES (
--   '00000000-0000-0000-0000-000000000001',
--   'oak',
--   'taller_2_story',
--   'arms_wrap',
--   18330.00,
--   145.00
-- );

-- ===========================================
-- REPORTS TABLE
-- ===========================================
-- Stores property valuation reports for sharing

CREATE TABLE IF NOT EXISTS reports (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT,
  zip_code TEXT,
  property_valuation JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '90 days') NOT NULL
);

-- Create indexes for lookups
CREATE INDEX IF NOT EXISTS idx_reports_expires_at ON reports(expires_at);
CREATE INDEX IF NOT EXISTS idx_reports_email ON reports(email);

-- Enable Row Level Security
ALTER TABLE reports ENABLE ROW LEVEL SECURITY;

-- Anyone can view reports by ID (for sharing)
CREATE POLICY "Anyone can view reports by ID"
  ON reports FOR SELECT
  USING (true);

-- Service role can insert reports (from API route)
CREATE POLICY "Service role can insert reports"
  ON reports FOR INSERT
  WITH CHECK (true);

-- ===========================================
-- ANALYTICS_EVENTS TABLE
-- ===========================================
-- Tracks user journey and conversion funnel

CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_type TEXT NOT NULL,
  properties JSONB DEFAULT '{}',
  session_id TEXT,
  user_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

-- Create indexes for analytics queries
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON analytics_events(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics_events(created_at);
CREATE INDEX IF NOT EXISTS idx_analytics_session_id ON analytics_events(session_id);

-- Enable Row Level Security
ALTER TABLE analytics_events ENABLE ROW LEVEL SECURITY;

-- Service role can insert events (from API route)
CREATE POLICY "Service role can insert events"
  ON analytics_events FOR INSERT
  WITH CHECK (true);

-- Service role can read events (for dashboard)
CREATE POLICY "Service role can read events"
  ON analytics_events FOR SELECT
  USING (true);
