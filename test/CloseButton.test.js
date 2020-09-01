// NOTE: original code from https://testing-library.com/docs/svelte-testing-library/example
// NOTE: jest-dom adds handy assertions to Jest and it is recommended, but not required.
import '@testing-library/jest-dom/extend-expect'

import { render, fireEvent } from '@testing-library/svelte'

import CloseButton from '../src/components/CloseButton.svelte'

xdescribe('Component', () => {
  it('shows proper heading when rendered', () => {
    const { debug } = render(CloseButton, { id: 'World', closeButton: true, onClose: () => { }, type: "success" })

    debug();
  });

  // Note: This is as an async test as we are using `fireEvent`
  xit('changes button text on click', async () => {
    const { getByText } = render(Component, { name: 'World' })
    const button = getByText('Button')

    // Using await when firing events is unique to the svelte testing library because
    // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
    await fireEvent.click(button)

    expect(button).toHaveTextContent('Button Clicked')
  });
});