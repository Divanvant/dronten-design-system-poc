import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button test', () => {
  it('renders rich text content', () => {
    const { container } = render(
      <Button>
        <strong>Button text</strong>
      </Button>
    )

    const link = container.querySelector(':only-child')

    const richText = link?.querySelector('strong')

    expect(richText).toBeInTheDocument()
  })
})
