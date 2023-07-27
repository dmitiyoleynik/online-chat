'use client';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';

import { useRouter } from 'next/navigation';

const Logout = () => {
    const supabase = createPagesBrowserClient();
    const router = useRouter();

    return (
        <button
            onClick={() => {
                supabase.auth.signOut().then(() => router.refresh());
            }}
        >
            sign out
        </button>
    );
};

export default Logout;
