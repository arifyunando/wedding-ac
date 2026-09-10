// src/routes/api/todos/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Handle GET requests (Fetch list)
export const GET: RequestHandler = async () => {
    const todos = [
        { id: 1, task: 'Learn SvelteKit', done: false },
        { id: 2, task: 'Build a REST API', done: true }
    ];
    
    return json(todos);
};

// Handle POST requests (Create an item)
export const POST: RequestHandler = async ({ request }) => {
    const body = await request.json();
    
    if (!body) {
        return json({ error: 'Missing task description' }, { status: 400 });
    }

    console.log(body)

    return json(body)
};
