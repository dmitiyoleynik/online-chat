create table public.participants(
    user_id uuid references public.users(id) on delete cascade,
    chat_id uuid references public.chats(id) on delete cascade,
    PRIMARY KEy (user_id,chat_id)
);

alter table
    public.chats enable row level security;

create policy "User can view chat where them in" on public.participants for
select
    using(true);

create policy "Any user can create participants" on public.participants for
insert
    with check(true);