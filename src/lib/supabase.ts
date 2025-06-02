import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';

console.log('Supabase URL:', PUBLIC_SUPABASE_URL);
console.log('Supabase Key (first 10 chars):', PUBLIC_SUPABASE_ANON_KEY?.substring(0, 10));

const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Test connection on import
supabase.from('treasure').select('count(*)', { count: 'exact' }).then(result => {
    console.log('Supabase connection test on import:', result);
});
