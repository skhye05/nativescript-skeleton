import { SkeletonGroupBase, SkeletonViewBase } from "./skeleton.common";
export declare class SkeletonGroup extends SkeletonGroupBase {
  nativeView: io.rmiri.skeleton.SkeletonGroup;
  createNativeView(): Object;
  initNativeView(): void;
  disposeNativeView(): void;
}
export declare class Skeleton extends SkeletonViewBase {
  nativeView: io.rmiri.skeleton.SkeletonView;
  createNativeView(): Object;
  initNativeView(): void;
  disposeNativeView(): void;
}
