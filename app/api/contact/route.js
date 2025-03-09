import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        // Parse the request body
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                { success: false, message: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Here you would typically:
        // 1. Send an email notification
        // 2. Store the contact in a database
        // 3. Integrate with a CRM system

        // For this example, we'll just simulate a successful API call
        // In a real application, you would add your email sending logic here
        // Example: await sendEmail(body);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Return success response
        return NextResponse.json(
            { success: true, message: 'Message sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Contact form error:', error);

        return NextResponse.json(
            { success: false, message: 'An error occurred while processing your request' },
            { status: 500 }
        );
    }
} 