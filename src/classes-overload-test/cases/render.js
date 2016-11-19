import { ITERATIONS } from '..';

export const renderHtml = classNames => `
    <section class=${classNames.container}>
        ${(() => {
            const buttons = [];

            for (let i = 0; i < ITERATIONS; i++) {
                const className = classNames[`button-${i}`];

                buttons.push(`
                    <button class=${className}>Click me</button>
                `);
            }

            return buttons.join('');
        })()}
    </section>
`;
