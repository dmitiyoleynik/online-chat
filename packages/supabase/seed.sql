insert into
    auth.users (
        instance_id,
        id,
        aud,
        role,
        email,
        encrypted_password,
        raw_app_meta_data,
        raw_user_meta_data,
        email_confirmed_at,
        created_at
    )
values
    (
        '00000000-0000-0000-0000-000000000000',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        'authenticated',
        'authenticated',
        'dragonbornmiraak@gmail.com',
        '$2a$10$3VXhTPgGbBQF3B6usw/g0.6FuCx1.UbR9GJ.8eWB9AlvE/nENAIMC',
        '{"provider":"email","providers":["email"]}',
        '{}',
        timezone('utc' :: text, now()),
        timezone('utc' :: text, now())
    ),
    (
        '00000000-0000-0000-0000-000000000000',
        '61fddb5a-4371-46a8-8792-75e057e97af9',
        'authenticated',
        'authenticated',
        'illidanstormrage@gmail.com',
        '$2a$10$ZeOfvuSHw3nClKiG6qSm2OiBGsgjKlyilvxPTe7ecLHGejzWJ9VBy',
        '{"provider":"email","providers":["email"]}',
        '{}',
        timezone('utc' :: text, now()),
        timezone('utc' :: text, now())
    ),
    (
        '00000000-0000-0000-0000-000000000000',
        'e4f445c9-2e63-40c9-866d-6bc71ec8cf08',
        'authenticated',
        'authenticated',
        'dmitiyoleynik@gmail.com',
        '$2a$10$UhX0eJb8.wfiycKWw7hj6uDndyU1dKxQ3Mj0IdMcKanMbT77xN4vu',
        '{"provider":"email","providers":["email"]}',
        '{}',
        '2023-09-12 07:35:25.542769+00',
        '2023-09-12 07:35:25.540347+00'
    );

update
    public.users
set
    username = 'dragonbornmiraak',
    fullName = 'Мірак'
where
    id = '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e';

update
    public.users
set
    username = 'illidanstormrage',
    fullName = 'Ілідан Ярость Бурі'
where
    id = '61fddb5a-4371-46a8-8792-75e057e97af9';

insert into
    public.chats(id)
values
    ('61fddb5a-4371-46a8-8792-75e057e97123'),
('61fddb5a-4371-46a8-8792-75e057e97124');

insert into
    public.participants(chat_id, user_id)
values
    (
        '61fddb5a-4371-46a8-8792-75e057e97123',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e'
    ),
(
        '61fddb5a-4371-46a8-8792-75e057e97124',
        '61fddb5a-4371-46a8-8792-75e057e97af9'
    );

insert into
    public.messages(
        id,
        sender_id,
        chat_id,
        isRead,
        content,
        created_at
    )
values
    (
        '61fddb5a-4371-46a8-8792-75e057e97111',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97123',
        true,
        'Привіт, як справи?',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97222',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97123',
        true,
        'Все добре, дякую!',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97333',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97123',
        false,
        'Чи бачив ти моє повідомлення?',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97444',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97123',
        false,
        'Так, бачу',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97555',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97123',
        true,
        'Привіт вам усім!',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97666',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97123',
        false,
        'Як ви сьогодні?',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97777',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97124',
        true,
        'Дуже добре, дякую!',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97888',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97124',
        false,
        'Давно не бачилися',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97999',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97124',
        true,
        'Що нового?',
        NOW()
    ),
    (
        '61fddb5a-4371-46a8-8792-75e057e97000',
        '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e',
        '61fddb5a-4371-46a8-8792-75e057e97124',
        true,
        'Багато чого, спілкуватися цікаво!',
        NOW()
    );