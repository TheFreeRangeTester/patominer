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
            apiKeyPreview: API_KEY ? `${API_KEY.substring(0, 4)}...` : 'missing'
        });

        if (!FORM_ID || !API_KEY) {
            throw new Error('Missing Convertkit credentials');
        }

        const API_URL = 'https://api.convertkit.com/v3/forms/' + FORM_ID + '/subscribe';

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                api_secret: API_KEY,
                email: email
            }),
        });

        const data = await response.json();

        console.log('ConvertKit Response Status:', response.status);
        console.log('ConvertKit Response Body:', data);

        if (!response.ok) {
            const errorMessage = data.error || data.message || response.statusText;
            console.error('ConvertKit Error Details:', data);
            throw new Error(`ConvertKit API error: ${errorMessage}`);
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

        const userMessage = error instanceof Error && error.message.includes('ConvertKit API error')
            ? error.message
            : 'Unable to process subscription. Please try again later.';

        return NextResponse.json(
            {
                success: false,
                message: userMessage,
                details: process.env.NODE_ENV === 'development' ? error : undefined
            },
            { status: 500 }
        );
    }
} 