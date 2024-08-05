/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'dronten-button',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Button {
  render() {
    return (
      <button class="dronten-button" type="button">
        <span class="dronten-button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
