import type { Decorator } from '@storybook/react'

export const ParametersArgsDecorator: Decorator = (Story, context) => {
  context.parameters['args'] = context.args

  return (
    <div className="dronten-theme">
      <Story />
    </div>
  )
}
