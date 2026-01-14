/// <reference types="react" />

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'stripe-buy-button': React.DetailedHTMLProps<
                {
                    'buy-button-id': string;
                    'publishable-key': string;
                } & React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

export { };
