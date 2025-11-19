import {cookies} from 'next/headers';
import {createServerClient} from '@supabase/ssr';

export async function supabaseServer() {
	const cookieStore = await cookies();
	return createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL as string,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
		{
			cookies: {
				getAll() {
					return cookieStore.getAll();
				},
				setAll() {
					// noop
				}
			}
		}
	);
}


