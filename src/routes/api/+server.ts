// src/routes/api/todos/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { prismaClient } from '$lib/database';

// Handle GET requests (Fetch list)
export const GET: RequestHandler = async () => {
    const attendantResponse = await prismaClient.attendant.findMany()
    console.log(attendantResponse)
	return json(attendantResponse);
};

// Handle POST requests (Create an item)
export const POST: RequestHandler = async ({ request }) => {
    // check request body
    const registerRequest = await request.json();
    console.log(registerRequest)
	if (!registerRequest) {
        return json({ error: 'Missing task description' }, { status: 400 });
	}

    // create attendant request
	const nUserWithPhone = await prismaClient.attendant.count({
		where: {
            phoneNumber: registerRequest.phoneNumber
        }
	});

    if (nUserWithPhone != 0 ) {
        return json({ error: 'User with similar phone number found' }, { status: 400 })
    }

    console.log("nUserWithPhone", nUserWithPhone)

    const attendantResponse = await prismaClient.attendant.create({
        data: registerRequest
    });

	return json(attendantResponse);
};
