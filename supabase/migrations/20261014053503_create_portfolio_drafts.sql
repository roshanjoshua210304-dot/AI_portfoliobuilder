/*
# Create portfolio drafts table

1. New Tables
- `portfolio_drafts`
- `id` (integer, singleton key)
- `data` (jsonb, the portfolio builder form data)
- `created_at` (timestamptz, creation time)
- `updated_at` (timestamptz, last saved time)

2. Security
- Enable row level security.
- Allow anonymous and authenticated users to read, create, update, and delete the intentionally shared demo draft.

3. Important Notes
- This no-sign-in builder uses one shared draft row so the workflow works immediately without requiring accounts.
- The JSON document keeps the form flexible while the builder is being developed.
*/

CREATE TABLE IF NOT EXISTS public.portfolio_drafts (
  id integer PRIMARY KEY DEFAULT 1,
  data jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.portfolio_drafts ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "public_read_portfolio_drafts" ON public.portfolio_drafts;
CREATE POLICY "public_read_portfolio_drafts"
ON public.portfolio_drafts FOR SELECT
TO anon, authenticated
USING (true);

DROP POLICY IF EXISTS "public_insert_portfolio_drafts" ON public.portfolio_drafts;
CREATE POLICY "public_insert_portfolio_drafts"
ON public.portfolio_drafts FOR INSERT
TO anon, authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "public_update_portfolio_drafts" ON public.portfolio_drafts;
CREATE POLICY "public_update_portfolio_drafts"
ON public.portfolio_drafts FOR UPDATE
TO anon, authenticated
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "public_delete_portfolio_drafts" ON public.portfolio_drafts;
CREATE POLICY "public_delete_portfolio_drafts"
ON public.portfolio_drafts FOR DELETE
TO anon, authenticated
USING (true);
