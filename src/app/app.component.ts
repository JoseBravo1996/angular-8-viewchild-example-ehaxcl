import {
  Component,
  ViewChild,
  AfterViewInit,
  ElementRef,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import { HelloComponent } from './hello.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  //name = 'Angular';
  @ViewChild(HelloComponent, { static: false }) hello: HelloComponent;

  // @ViewChild('pRef', { static: false }) pRef: ElementRef;
  @ViewChild('pRef', { static: false }) private anchor: ViewContainerRef;

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  @ViewChild('con', { static: false }) private prueba: ElementRef;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    console.log(this.prueba.nativeElement.attr('id'));

    let factory = this.resolver.resolveComponentFactory(HelloComponent);
    this.container.createComponent(factory);

    // console.log('Hello ', this.hello.name);
    // console.log(this.pRef.nativeElement.innerHTML);
    // this.pRef.nativeElement.innerHTML = this.hello;
  }
}
