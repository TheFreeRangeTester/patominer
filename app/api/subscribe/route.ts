import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Debugging detallado
        console.log('Request received:', { email });

        const FORM_ID = process.env.CONVERTKIT_FORM_ID;
        const API_KEY = process.env.CONVERTKIT_API_KEY;

        console.log('Environment check:', {
            hasFormId: !!FORM_ID,
            hasApiKey: !!API_KEY,
            formIdValue: FORM_ID
        });

        if (!email) {
            return NextResponse.json(
                { message: 'Email is required' },
                { status: 400 }
            );
        }

        if (!FORM_ID || !API_KEY) {
            throw new Error('Missing environment variables');
        }

        const API_URL = `https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`;

        console.log('Making request to:', API_URL);

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                api_key: API_KEY  // Cambiado de api_secret a api_key
            }),
        });

        const data = await response.json();
        console.log('ConvertKit response:', data);

        if (!response.ok) {
            throw new Error(data.message || data.error || 'Error from ConvertKit');
        }

        return NextResponse.json({
            success: true,
            message: 'Successfully subscribed!'
        });

    } catch (error) {
        console.error('Full error:', error);

        return NextResponse.json(
            {
                success: false,
                message: error instanceof Error ? error.message : 'Unknown error',
                debug: process.env.NODE_ENV === 'development' ? error : undefined
            },
            { status: 500 }
        );
    }
}