import { Component, EventEmitter, OnInit, Output } from '@angular/core';


import 'fabric';
declare const fabric: any;


@Component({
  selector: 'cg-circuit-generator',
  templateUrl: './circuit-generator.component.html',
  styleUrls: ['./circuit-generator.component.styl']
})
export class CircuitGeneratorComponent implements OnInit {
  private canvas;

  public lineEditModeEnabled = false;

  public enableDeleteButton = false;

  @Output() imageSaved = new EventEmitter();

  ngOnInit() {

    this.canvas = new fabric.Canvas('canvas', {
      isDrawingMode: this.lineEditModeEnabled,
    });

    this.canvas.freeDrawingBrush.width = 4;
    this.canvas.backgroundColor = 'white';

    this.canvas.on('object:selected', () => {
      this.enableDeleteButton = true;
    });
    this.canvas.on('selection:cleared', () => {
      this.enableDeleteButton = false;
    });
  }

  triggerLineEditMode() {
    this.lineEditModeEnabled = !this.lineEditModeEnabled;
    this.canvas.isDrawingMode = this.lineEditModeEnabled;
  }

  removeSelectedElement() {
    const element = this.canvas.getActiveObject();
    if (element) {
      this.canvas.remove(element);
      console.log('remove');
    } else {
      console.log('Element not available');
    }
    console.log(this.canvas.getActiveObject());
  }

  addLED() {
    const url = '/assets/led.png';
    fabric.Image.fromURL(url, (oImg) => {
      oImg.scale(0.5);
      oImg.set({'left': 100});
      oImg.set({'top': 100});
      this.canvas.add(oImg);
    });
  }

  addIchigoJam() {
    const url = '/assets/jam.png';
    fabric.Image.fromURL(url, (oImg) => {
      oImg.scale(0.5);
      oImg.set({'left': 100});
      oImg.set({'top': 100});
      this.canvas.add(oImg);
    });
  }

  save() {
    const image = this.canvas.toDataURL();
    this.imageSaved.emit(image);
  }

}
