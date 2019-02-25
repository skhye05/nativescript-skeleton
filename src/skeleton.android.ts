/// <reference path="./typings/skeleton.android.d.ts"/>

import {
    SkeletonGroupBase,
    SkeletonViewBase,
    autoStartProperty,
    durationProperty,
    directionProperty,
    animationNormalTypeProperty,
    animationFinishTypeProperty,
    backgroundMainColorProperty,
    BackgroundViewsColorProperty,
    highLightColorProperty,
    backgroundMainColorCssProperty,
    BackgroundViewsColorCssProperty,
    highLightColorCssProperty,
    paddingCssProperty,
    paddingProperty,
    shapeTypeProperty,
    radiusProperty,
    radiusTopLeftProperty,
    radiusTopRightProperty,
    radiusBottomLeftProperty,
    radiusBottomRightProperty,
    textLineProperty,
    textLineLastWidthProperty,
    textLineHeightProperty,
    textLineSpaceVerticalProperty,
    radiusCssProperty,
    radiusTopLeftCssProperty,
    radiusTopRightCssProperty,
    radiusBottomLeftCssProperty,
    radiusBottomRightCssProperty,
    paddingTopCssProperty,
    paddingRightCssProperty,
    paddingLeftCssProperty,
    paddingBottomCssProperty,
    textLineCssProperty,
    textLineLastWidthCssProperty,
    textLineHeightCssProperty,
    textLineSpaceVerticalCssProperty
} from "./skeleton.common";
import { Color } from "tns-core-modules/color/color";
import { Label } from "tns-core-modules/ui/label";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { View, paddingTopProperty, paddingRightProperty, paddingLeftProperty, paddingBottomProperty } from 'tns-core-modules/ui/core/view';


var IDView: any = -1;

export class SkeletonGroup extends SkeletonGroupBase {
    nativeView: io.rmiri.skeleton.SkeletonGroup;
    private _androidViewId: number;
    /**
     * Creates new skeleton group view.
     */
    public createNativeView(): Object {
        // Create new instance of skeleton group
        const group = new io.rmiri.skeleton.SkeletonGroup(this._context);

        group.setSkeletonListener(new io.rmiri.skeleton.SkeletonGroup.SkeletonListener({
            onFinishAnimation: () => {

            },
            onStartAnimation: () => {

            }
        }));
        return group;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();

        if (!this._androidViewId) this._androidViewId = android.view.View.generateViewId();
        (this.nativeView as any).setId(this._androidViewId);
    }



    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state 
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        // Remove reference from native view to this instance.
        (<any>this.nativeView).owner = null;

        // If you want to recycle nativeView and have modified the nativeView 
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

    [autoStartProperty.setNative](value: boolean) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setAutoStartAnimation(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [durationProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setAnimationDuration(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [directionProperty.setNative](value: string) {
        const attribute = this.nativeView.getSkeletonAttribute();

        switch (value.toLowerCase()) {
            case 'ltr':
                attribute.setAnimationDirection(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_DIRECTION_LTR);
                break;
            case 'rtl':
                attribute.setAnimationDirection(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_DIRECTION_RTL);
                break;
            case 'ttb':
                attribute.setAnimationDirection(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_DIRECTION_TTB);
                break;
            case 'btt':
                attribute.setAnimationDirection(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_DIRECTION_BTT);
                break;

            default:
                break;
        }

        this.nativeView.setSkeletonAttribute(attribute);
    }

    [animationNormalTypeProperty.setNative](value: string) {
        const attribute = this.nativeView.getSkeletonAttribute();

        switch (value.toLowerCase()) {
            case 'none':
                attribute.setAnimationNormalType(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_TYPE_NON);
                break;
            case 'alpha':
                attribute.setAnimationNormalType(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_TYPE_ALPHA);
                break;
            case 'gradient':
                attribute.setAnimationNormalType(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_TYPE_GRADIENT);
                break;
            default:
                break;
        }

        this.nativeView.setSkeletonAttribute(attribute);
    }

    [animationFinishTypeProperty.setNative](value: string) {
        const attribute = this.nativeView.getSkeletonAttribute();

        switch (value.toLowerCase()) {
            case 'none':
                attribute.setAnimationFinishType(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_TYPE_NON);
                break;
            case 'alpha':
                attribute.setAnimationFinishType(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_TYPE_ALPHA);
                break;
            case 'gradient':
                attribute.setAnimationFinishType(io.rmiri.skeleton.Master.SkeletonAttribute.ANIMATION_TYPE_GRADIENT);
                break;
            default:
                break;
        }

        this.nativeView.setSkeletonAttribute(attribute);
    }

    [backgroundMainColorProperty.setNative](value: Color) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setColorBackgroundMain(value.android);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [BackgroundViewsColorProperty.setNative](value: Color) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setColorBackgroundViews(value.android);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [highLightColorProperty.setNative](value: Color) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setColorHighLight(value.android);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [backgroundMainColorCssProperty.setNative](value: Color) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setColorBackgroundMain(value.android);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [BackgroundViewsColorCssProperty.setNative](value: Color) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setColorBackgroundViews(value.android);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [highLightColorCssProperty.setNative](value: Color) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setColorHighLight(value.android);
        this.nativeView.setSkeletonAttribute(attribute);
    }

}

export class SkeletonView extends SkeletonViewBase {
    // added for TypeScript intellisense.
    nativeView: io.rmiri.skeleton.SkeletonView;

    /**
     * Creates new native button.
     */
    public createNativeView(): Object {
        const view = new io.rmiri.skeleton.SkeletonView(this._context);
        return view;
    }

    /**
     * Initializes properties/listeners of the native view.
     */
    initNativeView(): void {
        // Attach the owner to nativeView.
        // When nativeView is tapped we get the owning JS object through this field.
        (<any>this.nativeView).owner = this;
        super.initNativeView();

    }

    /**
     * Clean up references to the native view and resets nativeView to its original state.
     * If you have changed nativeView in some other way except through setNative callbacks
     * you have a chance here to revert it back to its original state 
     * so that it could be reused later.
     */
    disposeNativeView(): void {
        // Remove reference from native view to this instance.
        (<any>this.nativeView).owner = null;

        // If you want to recycle nativeView and have modified the nativeView 
        // without using Property or CssProperty (e.g. outside our property system - 'setNative' callbacks)
        // you have to reset it to its initial state here.
        super.disposeNativeView();
    }

    private convertPadding(value: string): void {
        const attribute = this.nativeView.getSkeletonAttribute();
        try {
            let str: Array<any> = value.split(' ');
            str = str.length === 1 ? str[0].split(',') : str;


            str.reduce((acc, v) => {
                acc.push(parseInt(v.trim()));
                return acc;
            }, []);

            if (str.length === 2 || str.length === 4) {
                const isTwo = str.length === 2;

                attribute.setPaddingTop(isTwo ? str[0] : str[0]);
                attribute.setPaddingRight(isTwo ? str[1] : str[1]);
                attribute.setPaddingBottom(isTwo ? str[0] : str[2]);
                attribute.setPaddingLeft(isTwo ? str[1] : str[3]);

            } else if (str.length === 1) {
                attribute.setPadding(str[0]);

            } else {
                throw Error('Invalid padding value');
            }

            console.log(str);
            this.nativeView.setSkeletonAttribute(attribute);
        } catch{
            throw Error('Invalid padding value');
        }
    }

    private convertRadius(value: string): void {
        const attribute = this.nativeView.getSkeletonAttribute();
        try {
            let str: Array<any> = value.split(' ');
            str = str.length === 1 ? str[0].split(',') : str;


            str.reduce((acc, v) => {
                acc.push(parseInt(v.trim()));
                return acc;
            }, []);

            if (str.length === 4) {
                attribute.setCornerRadiusTopLeft(str[0]);
                attribute.setCornerRadiusTopRight(str[1]);
                attribute.setCornerRadiusBottomLRight(str[2]);
                attribute.setCornerRadiusBottomLeft(str[3]);

            } else if (str.length === 1) {
                attribute.setCornerRadius(str[0]);

            } else {
                throw Error('Invalid radius value');
            }

            console.log(str);
            this.nativeView.setSkeletonAttribute(attribute);
        } catch{
            throw Error('Invalid radius value');
        }
    }

    // PROPERTY
    [shapeTypeProperty.setNative](value: string) {
        const attribute = this.nativeView.getSkeletonAttribute();

        switch (value.toLowerCase()) {
            case 'oval':
                attribute.setShapeType(io.rmiri.skeleton.Master.SkeletonAttribute.SHAPE_TYPE_OVAL);
                break;
            case 'rect':
                attribute.setShapeType(io.rmiri.skeleton.Master.SkeletonAttribute.SHAPE_TYPE_RECT);
                break;
            case 'text':
                attribute.setShapeType(io.rmiri.skeleton.Master.SkeletonAttribute.SHAPE_TYPE_TEXT);
                break;

            default:
                break;
        }

        this.nativeView.setSkeletonAttribute(attribute);
    }

    [radiusProperty.setNative](value: string) {
        this.convertRadius(value);
    }

    [radiusTopLeftProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setCornerRadiusTopLeft(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [radiusTopRightProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setCornerRadiusTopRight(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [radiusBottomLeftProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setCornerRadiusBottomLeft(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [radiusBottomRightProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setCornerRadiusBottomLRight(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [paddingProperty.setNative](value: string) {
        this.convertPadding(value);
    }

    [paddingTopProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setPaddingTop(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [paddingRightProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setPaddingRight(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [paddingLeftProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setPaddingLeft(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [paddingBottomProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setPaddingBottom(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [textLineProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setTextShapeLineNumber(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [textLineLastWidthProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setTextShapeLineLastWidth(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [textLineHeightProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setTextShapeLineHeight(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [textLineSpaceVerticalProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setTextShapeLineSpaceVertical(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    // CSS
    [radiusCssProperty.setNative](value: string) {
        this.convertRadius(value);
    }

    [radiusTopLeftCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setCornerRadiusTopLeft(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [radiusTopRightCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setCornerRadiusTopRight(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [radiusBottomLeftCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setCornerRadiusBottomLeft(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [radiusBottomRightCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setCornerRadiusBottomLRight(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [paddingCssProperty.setNative](value: string) {
        this.convertPadding(value);
    }

    [paddingTopCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setPaddingTop(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [paddingRightCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setPaddingRight(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [paddingLeftCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setPaddingLeft(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [paddingBottomCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setPaddingBottom(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [textLineCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setTextShapeLineNumber(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [textLineLastWidthCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setTextShapeLineLastWidth(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [textLineHeightCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setTextShapeLineHeight(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

    [textLineSpaceVerticalCssProperty.setNative](value: number) {
        const attribute = this.nativeView.getSkeletonAttribute();
        attribute.setTextShapeLineSpaceVertical(value);
        this.nativeView.setSkeletonAttribute(attribute);
    }

}
