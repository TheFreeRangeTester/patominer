import { NextResponse } from 'next/server';

const FORM_ID = process.env.CONVERTKIT_FORM_ID;
const API_KEY = process.env.CONVERTKIT_API_KEY;

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Log para debugging
        console.log('Debug Info:', {
            formId: FORM_ID,
            hasApiKey: !!API_KEY,
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
            api_secret: API_KEY,  // Cambiado de api_key a api_secret
            email: email
        };

        console.log('Making request to ConvertKit:', {
            url: API_URL,
            body: { ...requestBody, api_secret: '[REDACTED]' }
        });

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        const data = await response.json();
        console.log('ConvertKit Response:', {
            status: response.status,
            data: data
        });

        if (!response.ok) {
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