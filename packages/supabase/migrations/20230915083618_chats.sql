create table public.chats(id uuid NOT NULL PRIMARY KEY);

alter table
    public.chats enable row level security;

create policy "User can view chats where they are" on public.participants for
select
    using(
        id in (
            select
                chat_id
            from
                public.participants
            where
                user_id = auth.uid()
        )
    );

create policy "Any user can create chat" on public.participants for
insert
    with check(true);