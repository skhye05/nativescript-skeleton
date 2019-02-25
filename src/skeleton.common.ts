import { Color } from 'tns-core-modules/color';
import { ContentView } from 'tns-core-modules/ui/content-view';
import { Property, CssProperty } from 'tns-core-modules/ui/core/properties';
import { Style } from 'tns-core-modules/ui/styling/style';
import { booleanConverter } from 'tns-core-modules/ui/core/view-base';
import { View, AddChildFromBuilder } from 'tns-core-modules/ui/core/view';

export abstract class SkeletonGroupBase extends ContentView {
  /**
   * Get the Skeleton Views
   */

  // public eachChildView(callbacks): void {
  //   callbacks = (view => {
  //     console.log("CALLBACK", view);
  //   })

  //   callbacks();
  // }

}

// PROPERTY

export const autoStartProperty = new Property<SkeletonGroupBase, boolean>({
  name: 'autoStart',
  valueConverter: v => booleanConverter(v)
});
autoStartProperty.register(SkeletonGroupBase);

export const durationProperty = new Property<SkeletonGroupBase, number>({
  name: 'duration',
  valueConverter: v => parseInt(v)
});
durationProperty.register(SkeletonGroupBase);

export const directionProperty = new Property<SkeletonGroupBase, string>({
  name: 'direction'
});
directionProperty.register(SkeletonGroupBase);

export const animationNormalTypeProperty = new Property<SkeletonGroupBase, string>({
  name: 'animationNormalType'
});
animationNormalTypeProperty.register(SkeletonGroupBase);

export const animationFinishTypeProperty = new Property<SkeletonGroupBase, string>({
  name: 'animationFinishType'
});
animationFinishTypeProperty.register(SkeletonGroupBase);

export const backgroundMainColorProperty = new Property<SkeletonGroupBase, Color>({
  name: 'backgroundMainColor',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v)
});
backgroundMainColorProperty.register(SkeletonGroupBase);

export const BackgroundViewsColorProperty = new Property<SkeletonGroupBase, Color>({
  name: 'backgroundViewsColor',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v)
});
BackgroundViewsColorProperty.register(SkeletonGroupBase);

export const highLightColorProperty = new Property<SkeletonGroupBase, Color>({
  name: 'highLightColor',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v)
});
highLightColorProperty.register(SkeletonGroupBase);

// STYLE
export const backgroundMainColorCssProperty = new CssProperty<Style, Color>({
  name: 'backgroundMainColor',
  cssName: 'background-main-color',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v)
});
backgroundMainColorCssProperty.register(Style);

export const BackgroundViewsColorCssProperty = new CssProperty<Style, Color>({
  name: 'backgroundViewsColor',
  cssName: 'background-views-color',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v)
});
BackgroundViewsColorCssProperty.register(Style);

export const highLightColorCssProperty = new CssProperty<Style, Color>({
  name: 'highLightColor',
  cssName: 'highlight-color',
  equalityComparer: Color.equals,
  valueConverter: (v) => new Color(v)
});
highLightColorCssProperty.register(Style);


export abstract class SkeletonViewBase extends ContentView {
  /**
   * Get the content inside SkeletonView
   */
}

// PROPERTY
export const shapeTypeProperty = new Property<SkeletonViewBase, string>({
  name: 'shapeType'
})
shapeTypeProperty.register(SkeletonViewBase);

export const radiusProperty = new Property<SkeletonViewBase, string>({
  name: 'radius'
})
radiusProperty.register(SkeletonViewBase);

export const radiusTopLeftProperty = new Property<SkeletonViewBase, number>({
  name: 'radiusTopLeft',
  valueConverter: v => parseInt(v)
})
radiusTopLeftProperty.register(SkeletonViewBase);

export const radiusTopRightProperty = new Property<SkeletonViewBase, number>({
  name: 'radiusTopRight',
  valueConverter: v => parseInt(v)
})
radiusTopRightProperty.register(SkeletonViewBase);

export const radiusBottomLeftProperty = new Property<SkeletonViewBase, number>({
  name: 'radiusBottomLeft',
  valueConverter: v => parseInt(v)
})
radiusBottomLeftProperty.register(SkeletonViewBase);

export const radiusBottomRightProperty = new Property<SkeletonViewBase, number>({
  name: 'radiusBottomRight',
  valueConverter: v => parseInt(v)
})
radiusBottomRightProperty.register(SkeletonViewBase);

export const paddingProperty = new Property<SkeletonViewBase, string>({
  name: 'padding'
})
paddingProperty.register(SkeletonViewBase);

export const paddingTopProperty = new Property<SkeletonViewBase, number>({
  name: 'paddingTop',
  valueConverter: v => parseInt(v)
})
paddingTopProperty.register(SkeletonViewBase);

export const paddingRightProperty = new Property<SkeletonViewBase, number>({
  name: 'paddingRight',
  valueConverter: v => parseInt(v)
})
paddingRightProperty.register(SkeletonViewBase);

export const paddingLeftProperty = new Property<SkeletonViewBase, number>({
  name: 'paddingLeft',
  valueConverter: v => parseInt(v)
})
paddingLeftProperty.register(SkeletonViewBase);

export const paddingBottomProperty = new Property<SkeletonViewBase, number>({
  name: 'paddingBottom',
  valueConverter: v => parseInt(v)
})
paddingBottomProperty.register(SkeletonViewBase);

export const textLineProperty = new Property<SkeletonViewBase, number>({
  name: 'textLine',
  valueConverter: v => parseInt(v)
})
textLineProperty.register(SkeletonViewBase);

export const textLineLastWidthProperty = new Property<SkeletonViewBase, number>({
  name: 'textLineLastWidth',
  valueConverter: v => parseInt(v)
})
textLineLastWidthProperty.register(SkeletonViewBase);

export const textLineHeightProperty = new Property<SkeletonViewBase, number>({
  name: 'textLineHeight',
  valueConverter: v => parseInt(v)
})
textLineHeightProperty.register(SkeletonViewBase);

export const textLineSpaceVerticalProperty = new Property<SkeletonViewBase, number>({
  name: 'textLineSpaceVertical',
  valueConverter: v => parseInt(v)
})
textLineSpaceVerticalProperty.register(SkeletonViewBase);

// CSS
export const radiusCssProperty = new CssProperty<Style, string>({
  name: 'radius',
  cssName: 'radius',
})
radiusCssProperty.register(Style);

export const radiusTopLeftCssProperty = new CssProperty<Style, number>({
  name: 'radiusTopLeft',
  cssName: 'radius-top-left',
  valueConverter: v => parseInt(v)
})
radiusTopLeftCssProperty.register(Style);

export const radiusTopRightCssProperty = new CssProperty<Style, number>({
  name: 'radiusTopRight',
  cssName: 'radius-top-right',
  valueConverter: v => parseInt(v)
})
radiusTopRightCssProperty.register(Style);

export const radiusBottomLeftCssProperty = new CssProperty<Style, number>({
  name: 'radiusBottomLeft',
  cssName: 'radius-bottom-left',
  valueConverter: v => parseInt(v)
})
radiusBottomLeftCssProperty.register(Style);

export const radiusBottomRightCssProperty = new CssProperty<Style, number>({
  name: 'radiusBottomRight',
  cssName: 'radius-bottom-right',
  valueConverter: v => parseInt(v)
})
radiusBottomRightCssProperty.register(Style);

export const paddingCssProperty = new CssProperty<Style, string>({
  name: 'padding',
  cssName: 'padding'
})
paddingCssProperty.register(Style);

export const paddingTopCssProperty = new CssProperty<Style, number>({
  name: 'paddingTop',
  cssName: 'padding-top',
  valueConverter: v => parseInt(v)
})
paddingTopCssProperty.register(Style);

export const paddingRightCssProperty = new CssProperty<Style, number>({
  name: 'paddingRight',
  cssName: 'padding-right',
  valueConverter: v => parseInt(v)
})
paddingRightCssProperty.register(Style);

export const paddingLeftCssProperty = new CssProperty<Style, number>({
  name: 'paddingLeft',
  cssName: 'padding-left',
  valueConverter: v => parseInt(v)
})
paddingLeftCssProperty.register(Style);

export const paddingBottomCssProperty = new CssProperty<Style, number>({
  name: 'paddingBottom',
  cssName: 'padding-bottom',
  valueConverter: v => parseInt(v)
})
paddingBottomCssProperty.register(Style);

export const textLineCssProperty = new CssProperty<Style, number>({
  name: 'textLine',
  cssName: 'text-line',
  valueConverter: v => parseInt(v)
})
textLineCssProperty.register(Style);

export const textLineLastWidthCssProperty = new CssProperty<Style, number>({
  name: 'textLineLastWidth',
  cssName: 'text-line-last-width',
  valueConverter: v => parseInt(v)
})
textLineLastWidthCssProperty.register(Style);

export const textLineHeightCssProperty = new CssProperty<Style, number>({
  name: 'textLineHeight',
  cssName: 'text-line-height',
  valueConverter: v => parseInt(v)
})
textLineHeightCssProperty.register(Style);

export const textLineSpaceVerticalCssProperty = new CssProperty<Style, number>({
  name: 'textLineSpaceVertical',
  cssName: 'text-line-space-vertical',
  valueConverter: v => parseInt(v)
})
textLineSpaceVerticalCssProperty.register(Style);
