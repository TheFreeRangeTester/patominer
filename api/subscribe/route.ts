import { NextResponse } from 'next/server';

const FORM_ID = process.env.CONVERTKIT_FORM_ID;
const API_KEY = process.env.CONVERTKIT_API_KEY;

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { message: 'Email is required' },
                { status: 400 }
            );
        }

        const response = await fetch(
            `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    api_key: API_KEY,
                    email
                }),
            }
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error subscribing to newsletter');
        }

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to newsletter!'
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { 
                success: false,
                message: error instanceof Error ? error.message : 'Error subscribing to newsletter'
            },
            { status: 500 }
        );
    }
}

export async function OPTIONS(request: Request) {
    return new NextResponse(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
} 