
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { supabase } from '$lib/supabase';

export const load: PageServerLoad = async ({ params }) => {
    
    return {};
};

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        
        const teamcode = String(formData.get('teamcode') || '').trim().toUpperCase();
        const locationcode = String(formData.get('locationcode') || '').trim().toUpperCase();
        const cluescode = String(formData.get('cluescode') || '').trim().toUpperCase();

        console.log('Attempting to match teamcode (normalized):', teamcode);

        if (!teamcode) {
            return { success: false, message: 'Team code is required.' };
        }

        
        const { data, error } = await supabase
            .from('treasure')
            .select('*')
            .ilike('teamcode', teamcode); 

        if (error) {
            console.error('Supabase query error:', error);
            return { success: false, message: 'Error querying database. Please try again.' };
        }

        if (!data || data.length === 0) {
            console.log(`Team code "${teamcode}" not found in database or not accessible.`);
           
            return { success: false, message: 'Invalid team code. Please check your team code.' };
        }

        const teamData = data[0]; 
        console.log('Found team data:', teamData);

        const isLocationCorrect = String(teamData.locationcode).trim().toUpperCase() === locationcode;
        const isClueCorrect = String(teamData.cluescode).trim().toUpperCase() === cluescode;

        if (isLocationCorrect && isClueCorrect) {
            return { 
                success: true, 
                message: 'Correct! You have unlocked the next clue.',
                nextClue: teamData.riddleanswer 
            };
        } else {
            let incorrectMessage = 'Incorrect details. Please try again.';
            if (!isLocationCorrect && !isClueCorrect && locationcode && cluescode) {
                 incorrectMessage = 'Incorrect Location Code and Clue Code.';
            } else if (!isLocationCorrect && locationcode) {
                 incorrectMessage = 'Incorrect Location Code.';
            } else if (!isClueCorrect && cluescode) {
                 incorrectMessage = 'Incorrect Clue Code.';
            }
            return { success: false, message: incorrectMessage };
        }
    }
};
