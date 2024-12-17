import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        const FORM_ID = process.env.CONVERTKIT_FORM_ID;
        const API_KEY = process.env.CONVERTKIT_API_KEY;

        console.log('Debug Info:', {
            formId: FORM_ID,
            apiKeyExists: !!API_KEY,
            email: email,
            apiUrl: `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`
        });

        if (!FORM_ID || !API_KEY) {
            throw new Error('Missing Convertkit credentials');
        }

        const API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

        const requestBody = {
            api_secret: API_KEY,
            email: email
        };

        console.log('Making request to ConvertKit...');

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();

        console.log('ConvertKit Response Status:', response.status);
        console.log('ConvertKit Response Body:', data);

        if (!response.ok) {
            throw new Error(`ConvertKit API error: ${data.message || response.statusText}`);
        }

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed!'
        });

    } catch (error) {
        console.error('Subscription Error:', {
            name: error instanceof Error ? error.name : 'Unknown',
            message: error instanceof Error ? error.message : 'Unknown error',
            stack: error instanceof Error ? error.stack : undefined
        });

        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : 'Error processing subscription',
                details: process.env.NODE_ENV === 'development' ? error : undefined
            },
            { status: 500 }
        );
    }
} 