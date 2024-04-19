import { TFunctionResult } from 'i18next';

export type CoreTypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

export enum CoreTypographyVariant {
  DISPLAY_01_REGULAR = 'coreTypography__display01Regular',
  DISPLAY_01_SEMI_BOLD = 'coreTypography__display01SemiBold',
  DISPLAY_01_EXTRA_BOLD = 'coreTypography__display01ExtraBold',
  DISPLAY_02_REGULAR = 'coreTypography__display02Regular',
  DISPLAY_02_SEMI_BOLD = 'coreTypography__display02SemiBold',
  DISPLAY_02_EXTRA_BOLD = 'coreTypography__display02ExtraBold',
  DISPLAY_03_Medium = 'coreTypography__display03Medium',
  DISPLAY_03_BOLD = 'coreTypography__display03Bold',
  HEADLINE_01_MEDIUM = 'coreTypography__headline01Medium',
  HEADLINE_01_BOLD = 'coreTypography__headline01Bold',
  HEADLINE_02_MEDIUM = 'coreTypography__headline02Medium',
  TITLE_01_MEDIUM = 'coreTypography__title01Medium',
  TITLE_01_BOLD = 'coreTypography__title01Bold',
  TITLE_02_MEDIUM = 'coreTypography__title02Medium',
  TITLE_02_BOLD = 'coreTypography__title02Bold',
  TITLE_03_MEDIUM = 'coreTypography__title03Medium',
  TITLE_03_BOLD = 'coreTypography__title03Bold',
  BODY_01_REGULAR = 'coreTypography__body01Regular',
  BODY_01_MEDIUM = 'coreTypography__body01Medium',
  BODY_01_BOLD = 'coreTypography__body01Bold',
  BODY_02_REGULAR = 'coreTypography__body02Regular',
  BODY_02_MEDIUM = 'coreTypography__body02Medium',
  BODY_02_BOLD = 'coreTypography__body02Bold',
  LABEL_01_REGULAR = 'coreTypography__label01Regular',
  LABEL_01_MEDIUM = 'coreTypography__label01Medium',
  LABEL_01_BOLD = 'coreTypography__label01Bold',
}

export interface CoreTypographyProps {
  children: string | number | React.ReactNode | TFunctionResult;
  component?: CoreTypographyComponent;
  variant?: CoreTypographyVariant;
  customClassName?: string;

  [key: string]: unknown;
}

export interface GetComponentByVariantParams {
  variant: CoreTypographyVariant;
  component?: CoreTypographyComponent;
}
