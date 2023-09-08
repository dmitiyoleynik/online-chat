create table public.users (
    id uuid NOT NULL PRIMARY KEY references auth.users on delete cascade,
    username TEXT,
    fullName TEXT
);

alter table
    public.users enable row level security;

create policy "Public profiles are viewable by everyone." on public.users for
select
    using (true);

create policy "Users can insert their own profile." on public.users for
insert
    with check (auth.uid() = id);

create policy "Users can update own profile." on public.users for
update
    using (auth.uid() = id);

create function public.handle_new_user() returns trigger language plpgsql security definer
set
    search_path = public as $$ begin
insert into
    public.users (id)
values
    (new.id);

return new;

end;

$$;

create trigger on_auth_user_created
after
insert
    on auth.users for each row execute procedure public.handle_new_user();

create table public.messages(
    id uuid NOT NULL PRIMARY KEY,
    senderId uuid NOT NULL references public.users on delete cascade,
    recepientId uuid NOT NULL references public.users on delete cascade,
    isRead BOOLEAN DEFAULT FALSE,
    context TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

alter table
    public.messages enable row level security;

create policy "Users can insert messages."
  on public.messages for insert
  with check(auth.uid() = senderId AND EXISTS (SELECT 1 FROM public.users WHERE id = recepientId))