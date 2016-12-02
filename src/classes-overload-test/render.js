import { ITERATIONS } from './iterations';

export const renderHtml = (containerClassName, getButtonClassName) =>
    `<section class=${containerClassName}>
        ${(() => {
            const buttons = [];

            for (let i = 0; i < ITERATIONS; i++) {
                buttons.push(
                    `<button class="${getButtonClassName(i)}">Click me</button>`
                );
            }

            return buttons.join('');
        })()}
    </section>`;
