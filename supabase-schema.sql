-- 可选：双手机实时同步时使用
-- 在 Supabase SQL Editor 中执行。

create table if not exists public.couples (
  id uuid primary key default gen_random_uuid(),
  invite_code text unique not null,
  created_at timestamptz default now()
);

create table if not exists public.learners (
  id uuid primary key default gen_random_uuid(),
  couple_id uuid references public.couples(id) on delete cascade,
  device_token text unique not null,
  display_name text not null,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

create index if not exists learners_couple_id_idx on public.learners(couple_id);

-- 真正上线时建议启用 RLS，并用 Supabase Auth 或 Edge Function
-- 控制邀请码加入逻辑，不建议把写权限直接完全公开。
