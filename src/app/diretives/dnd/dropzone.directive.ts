// Angular Drag and Drop File
//
// Add this directive to an element to turn it into a dropzone
// for drag and drop of files.
// Example:
//
// <div (appDropZone)="onDrop($event)"></div>
//
// Any files dropped onto the region are then
// returned as a Javascript array of file objects.
// Which in TypeScript is `Array<File>`
//

import {Directive, HostBinding, HostListener, Input, Output, EventEmitter} from '@angular/core';



@Directive({
  selector: '[appDropZone]'
})
export class DropZoneDirective {

  @Input() preventBodyDrop = true;

  @Output() fileChange = new EventEmitter<File>();


  @HostBinding('class.drop-zone-active')
  active = false;

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.active = false;
    const { dataTransfer } = event;
    const { items } = dataTransfer;
    if (items) {
      let file = items[0];
      if (file.kind === 'file' && file.getAsFile().name.endsWith(".csv")) {
        this.fileChange.emit(file.getAsFile());
      }
    }
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) {

    event.stopPropagation();
    event.preventDefault();
    this.active = true;
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent) {
    this.active = false;

  }

  @HostListener('body:dragover', ['$event'])
  onBodyDragOver(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
      event.stopPropagation();
    }
  }
  @HostListener('body:drop', ['$event'])
  onBodyDrop(event: DragEvent) {
    if (this.preventBodyDrop) {
      event.preventDefault();
    }
  }
}
