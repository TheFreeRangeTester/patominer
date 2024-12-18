import { NextResponse } from 'next/server';

const FORM_ID = process.env.CONVERTKIT_FORM_ID;
const API_KEY = process.env.CONVERTKIT_API_KEY;

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Debugging detallado
        console.log('Environment Variables:', {
            FORM_ID: process.env.CONVERTKIT_FORM_ID || 'not set',
            API_KEY_EXISTS: !!process.env.CONVERTKIT_API_KEY,
            NODE_ENV: process.env.NODE_ENV,
            email: email
        });

        if (!email) {
            return NextResponse.json(
                { message: 'Email is required' },
                { status: 400 }
            );
        }

        if (!FORM_ID || !API_KEY) {
            console.error('Missing environment variables:', {
                hasFormId: !!FORM_ID,
                hasApiKey: !!API_KEY
            });
            throw new Error('Configuration error');
        }

        const API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;
        
        const requestBody = {
            api_secret: API_KEY,
            email: email
        };

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('ConvertKit Error:', data);
            throw new Error(data.message || data.error || 'Error subscribing to newsletter');
        }

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed to newsletter!'
        });

    } catch (error) {
        console.error('Newsletter subscription error:', {
            name: error instanceof Error ? error.name : 'Unknown',
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });

        return NextResponse.json(
            { 
                success: false,
                message: error instanceof Error ? error.message : 'Error subscribing to newsletter'
            },
            { status: 500 }
        );
    }
} 