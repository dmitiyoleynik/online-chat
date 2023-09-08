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
    );

update
    public.users
set
    username = 'dragonbornmiraak',
    fullName = 'Miraak'
where
    id = '2b6c0a93-f71b-4f2c-9ff7-56c7e649b92e'