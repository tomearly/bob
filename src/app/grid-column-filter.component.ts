import { Component, Input } from '@angular/core';

@Component({
  selector: 'grid-column-filter',
  template: `<div style="background: #eeeeee">I am a filter for {{name}}</div>`
})
export class GridColumnFilterComponent {
  private _name = '';
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string { return this._name; }
}
