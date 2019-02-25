
declare module io {
	export module rmiri {
		export module skeleton {
			export class BuildConfig {
				public static class: java.lang.Class<io.rmiri.skeleton.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export module Master {
				export abstract class AdapterSkeleton<T, VH>  extends globalAndroid.support.v7.widget.RecyclerView.Adapter<any> {
					public static class: java.lang.Class<io.rmiri.skeleton.Master.AdapterSkeleton<any,any>>;
					public context: globalAndroid.content.Context;
					public items: java.util.List<any>;
					public isCanSetAdapterListener: io.rmiri.skeleton.Master.IsCanSetAdapterListener;
					public skeletonConfig: io.rmiri.skeleton.Master.SkeletonConfig;
					public getIsCanSetAdapterListener(): io.rmiri.skeleton.Master.IsCanSetAdapterListener;
					public constructor();
					public addMoreDataAndSkeletonFinish(param0: java.util.ArrayList<any>): void;
					public setIsCanSetAdapterListener(param0: io.rmiri.skeleton.Master.IsCanSetAdapterListener): void;
					public getItemCount(): number;
					public measureHeightRecyclerViewAndItem(param0: globalAndroid.support.v7.widget.RecyclerView, param1: number): void;
					public getContext(): globalAndroid.content.Context;
					public setContext(param0: globalAndroid.content.Context): void;
					public getSkeletonConfig(): io.rmiri.skeleton.Master.SkeletonConfig;
					public setSkeletonConfig(param0: io.rmiri.skeleton.Master.SkeletonConfig): void;
				}
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export module Master {
				export class IsCanSetAdapterListener {
					public static class: java.lang.Class<io.rmiri.skeleton.Master.IsCanSetAdapterListener>;
					/**
					 * Constructs a new instance of the io.rmiri.skeleton.Master.IsCanSetAdapterListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isCanSet(): void;
					});
					public constructor();
					public isCanSet(): void;
				}
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export module Master {
				export class SkeletonAttribute {
					public static class: java.lang.Class<io.rmiri.skeleton.Master.SkeletonAttribute>;
					public static SHAPE_TYPE_RECT: number;
					public static SHAPE_TYPE_OVAL: number;
					public static SHAPE_TYPE_TEXT: number;
					public static ANIMATION_DIRECTION_LTR: number;
					public static ANIMATION_DIRECTION_RTL: number;
					public static ANIMATION_DIRECTION_TTB: number;
					public static ANIMATION_DIRECTION_BTT: number;
					public static ANIMATION_TYPE_NON: number;
					public static ANIMATION_TYPE_ALPHA: number;
					public static ANIMATION_TYPE_GRADIENT: number;
					public static TEXT_SHAPE_LINE_LAST_WIDTH_FULL: number;
					public static TEXT_SHAPE_LINE_LAST_WIDTH_THREE_QUARTERS: number;
					public static TEXT_SHAPE_LINE_LAST_WIDTH_HALF: number;
					public static TEXT_SHAPE_LINE_LAST_WIDTH_QUARTER: number;
					public static DEFAULT_COLOR_BACKGROUND_MAIN: number;
					public static DEFAULT_COLOR_BACKGROUND_VIEWS: number;
					public static DEFAULT_COLOR_HIGHLIGHT_GRADIENT: number;
					public static DEFAULT_ANIMATION_DURATION: number;
					public static DEFAULT_ANIMATION_DIRECTION: number;
					public static DEFAULT_ANIMATION_TYPE: number;
					public static DEFAULT_SHAPE_TYPE: number;
					public static DEFAULT_CORNER_RADIUS: number;
					public static DEFAULT_PADDING: number;
					public static DEFAULT_TEXT_SHAPE_LINE: number;
					public static DEFAULT_TEXT_SHAPE_LAST_LINE_WIDTH: number;
					public static DEFAULT_TEXT_SHAPE_LINE_HEIGHT: number;
					public static DEFAULT_TEXT_SHAPE_LINE_SPACE_VERTICAL: number;
					public static getAnimationDirectionTtb(): number;
					public getCornerRadius(): number;
					public setShowSkeleton(param0: boolean): void;
					public getAnimationNormalType(): number;
					public setHoldTouchEventsFromChildren(param0: boolean): void;
					public static getDefaultTextShapeLine(): number;
					public setX2(param0: number): void;
					public getCornerRadiusBottomLeft(): number;
					public setY1(param0: number): void;
					public static getTextShapeLineLastWidthThreeQuarters(): number;
					public static getDefaultColorBackgroundMain(): number;
					public static getDefaultTextShapeLineSpaceVertical(): number;
					public constructor();
					public getTextShapeLineLastWidth(): number;
					public getPaddingLeft(): number;
					public static getDefaultTextShapeLastLineWidth(): number;
					public setAutoStartAnimation(param0: boolean): void;
					public setCornerRadiusBottomLeft(param0: number): void;
					public setPaddingTop(param0: number): void;
					public getPaddingTop(): number;
					public setCornerRadiusTopRight(param0: number): void;
					public getCornerRadiusBottomLRight(): number;
					public getCornerRadiusTopRight(): number;
					public getColorBackgroundMain(): number;
					public getPaddingRight(): number;
					public setX1(param0: number): void;
					public getX2(): number;
					public setCornerRadiusBottomLRight(param0: number): void;
					public setTextShapeLineLastWidth(param0: number): void;
					public getY2(): number;
					public setPaddingRight(param0: number): void;
					public setCornerRadius(param0: number): void;
					public getPaddingBottom(): number;
					public static getTextShapeLineLastWidthHalf(): number;
					public static getDefaultAnimationDuration(): number;
					public setPaddingLeft(param0: number): void;
					public getPadding(): number;
					public static getTextShapeLineLastWidthQuarter(): number;
					public setColorHighLight(param0: number): void;
					public setPadding(param0: number): void;
					public static getAnimationTypeNon(): number;
					public static getDefaultTextShapeLineHeight(): number;
					public setAnimationDuration(param0: number): void;
					public setCornerRadiusTopLeft(param0: number): void;
					public getColorHighLight(): number;
					public static getTextShapeLineLastWidthFull(): number;
					public setY2(param0: number): void;
					public isAutoStartAnimation(): boolean;
					public setTextShapeLineSpaceVertical(param0: number): void;
					public setPaddingBottom(param0: number): void;
					public getColorBackgroundViews(): number;
					public getShapeType(): number;
					public static getAnimationDirectionRtl(): number;
					public static getAnimationTypeAlpha(): number;
					public setColorBackgroundViews(param0: number): void;
					public static getAnimationDirectionLtr(): number;
					public static getDefaultAnimationDirection(): number;
					public static getDefaultPadding(): number;
					public getAnimationFinishType(): number;
					public static getDefaultCornerRadius(): number;
					public static getShapeTypeText(): number;
					public static getAnimationTypeGradient(): number;
					public static getDefaultColorHighlightGradient(): number;
					public toString(): string;
					public getX1(): number;
					public getY1(): number;
					public setAnimationNormalType(param0: number): void;
					public getTextShapeLineHeight(): number;
					public isHoldTouchEventsFromChildren(): boolean;
					public static getDefaultShapeType(): number;
					public isShowSkeleton(): boolean;
					public setAnimationFinishType(param0: number): void;
					public static getAnimationDirectionBtt(): number;
					public setTextShapeLineNumber(param0: number): void;
					public getCornerRadiusTopLeft(): number;
					public getTextShapeLineSpaceVertical(): number;
					public getAnimationDuration(): number;
					public setTextShapeLineHeight(param0: number): void;
					public setColorBackgroundMain(param0: number): void;
					public static getShapeTypeRect(): number;
					public static getShapeTypeOval(): number;
					public static getDefaultAnimationType(): number;
					public getAnimationDirection(): number;
					public static getDefaultColorBackgroundViews(): number;
					public setAnimationDirection(param0: number): void;
					public getTextShapeLineNumber(): number;
					public setShapeType(param0: number): void;
				}
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export module Master {
				export class SkeletonConfig {
					public static class: java.lang.Class<io.rmiri.skeleton.Master.SkeletonConfig>;
					public setRecyclerView(param0: globalAndroid.support.v7.widget.RecyclerView): io.rmiri.skeleton.Master.SkeletonConfig;
					public getRecyclerView(): globalAndroid.support.v7.widget.RecyclerView;
					public setNumberItemShow(param0: number): io.rmiri.skeleton.Master.SkeletonConfig;
					public setSkeletonIsOn(param0: boolean): io.rmiri.skeleton.Master.SkeletonConfig;
					public constructor(param0: boolean, param1: number, param2: number, param3: number, param4: globalAndroid.support.v7.widget.RecyclerView);
					public setRecyclerViewHeight(param0: number): io.rmiri.skeleton.Master.SkeletonConfig;
					public setItemHeight(param0: number): io.rmiri.skeleton.Master.SkeletonConfig;
					public getRecyclerViewHeight(): number;
					public build(): io.rmiri.skeleton.Master.SkeletonConfig;
					public isSkeletonIsOn(): boolean;
					public getItemHeight(): number;
					public constructor();
					public getNumberItemShow(): number;
				}
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export module Master {
				export class SkeletonMaster {
					public static class: java.lang.Class<io.rmiri.skeleton.Master.SkeletonMaster>;
					public skeletonAttribute: io.rmiri.skeleton.Master.SkeletonAttribute;
					public position: number;
					public getSkeletonAttribute(): io.rmiri.skeleton.Master.SkeletonAttribute;
					public setSkeletonAttribute(param0: io.rmiri.skeleton.Master.SkeletonAttribute): void;
					public getAllChildren(param0: globalAndroid.view.View): java.util.ArrayList<globalAndroid.view.View>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setHoldTouchEventsFromChildren(param0: boolean): void;
					public init(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): void;
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public setPosition(param0: number): void;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public getPosition(): number;
					public isHoldTouchEventsFromChildren(): boolean;
				}
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export class SkeletonGroup extends io.rmiri.skeleton.Master.SkeletonMaster {
				public static class: java.lang.Class<io.rmiri.skeleton.SkeletonGroup>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public setShowSkeleton(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				public setSkeletonListener(param0: io.rmiri.skeleton.SkeletonGroup.SkeletonListener): void;
				public setAutoPlay(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public startAnimation(): void;
				public init(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet): void;
				public finishAnimation(): void;
				public constructor(param0: globalAndroid.content.Context);
				public onDetachedFromWindow(): void;
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
			}
			export module SkeletonGroup {
				export class SkeletonListener {
					public static class: java.lang.Class<io.rmiri.skeleton.SkeletonGroup.SkeletonListener>;
					/**
					 * Constructs a new instance of the io.rmiri.skeleton.SkeletonGroup$SkeletonListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStartAnimation(): void;
						onFinishAnimation(): void;
					});
					public constructor();
					public onStartAnimation(): void;
					public onFinishAnimation(): void;
				}
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export class SkeletonView extends io.rmiri.skeleton.Master.SkeletonMaster {
				public static class: java.lang.Class<io.rmiri.skeleton.SkeletonView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export module utils {
				export class CLog {
					public static class: java.lang.Class<io.rmiri.skeleton.utils.CLog>;
					public static i(param0: string): void;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export module utils {
				export class ColorUtils {
					public static class: java.lang.Class<io.rmiri.skeleton.utils.ColorUtils>;
					public static generateColorTransparent011(param0: number, param1: number): native.Array<number>;
					public constructor();
					public static convertColorToTransparent(param0: number, param1: number): number;
					public static generateColorTransparent010(param0: number, param1: number): native.Array<number>;
				}
			}
		}
	}
}

declare module io {
	export module rmiri {
		export module skeleton {
			export module utils {
				export class ConverterUnitUtil {
					public static class: java.lang.Class<io.rmiri.skeleton.utils.ConverterUnitUtil>;
					public static spToPx(param0: globalAndroid.content.Context, param1: number): number;
					public constructor();
					public static dpToPx(param0: globalAndroid.content.Context, param1: number): number;
					public static pxToDp(param0: globalAndroid.content.Context, param1: number): number;
				}
			}
		}
	}
}

//Generics information:
//io.rmiri.skeleton.Master.AdapterSkeleton:2

