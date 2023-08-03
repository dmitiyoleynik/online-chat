import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/dist/client/components/headers';
import Logout from './logout';
import { redirect } from 'next/navigation';

export default async function Home() {
    const supabase = createServerComponentClient({
        cookies,
    });
    const {
        data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
        redirect('/login');
    }

    return (
        <div>
            <div>U logged in {session?.user?.email}</div>
            <Logout></Logout>
        </div>
    );
}
