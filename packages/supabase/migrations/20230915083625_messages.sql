create table public.messages (
    id uuid NOT NULL PRIMARY KEY,
    sender_id uuid NOT NULL references public.users(id) on delete cascade,
    chat_id uuid NOT NULL references public.chats(id) on delete cascade,
    content TEXT,
    created_at timestamp default now(),
    isRead BOOLEAN default false
);

alter table
    public.messages enable row level security;

create policy "User can view messages from their chats" on public.participants for
select
    using(chat_id in (select chat_id from public.participants where user_id=auth.uid() ));

create policy "Any user can create message" on public.participants for
insert
    with check(true);