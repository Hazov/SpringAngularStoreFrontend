import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {

  constructor() {
  }
  @HostBinding('class.dropzone') fileOver: boolean;


  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stoppropagation;
    this.fileOver = true;
    console.log('Drag Over');
  }

// Dragleave listener
  @HostListener('dragleave', ['$event'])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stoppropagation;
    console.log('Drag Leave');
  }

// Drop listener
  @HostListener('drop', ['$event'])
  public ondrop(evt) {
    evt.preventDefault();
    evt.stoppropagation;
    this.fileOver = false;
    const files = evt.dataTransfer.files;
    if (files.length > 0) {

      console.log('You dropped ${files.length} files.');
    }
  }





}
