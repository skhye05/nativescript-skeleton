import { Observable } from 'tns-core-modules/data/observable';
import { Skeleton } from 'nativescript-skeleton';

export class HelloWorldModel extends Observable {
  public message: string;
  private skeleton: Skeleton;

  constructor() {
    super();

    this.skeleton = new Skeleton();
    this.message = this.skeleton.message;
  }
}
