import { CoreTypographyComponent, CoreTypographyVariant, GetComponentByVariantParams } from './CoreTypography.model';

export function getComponentByVariant({ variant, component }: GetComponentByVariantParams): CoreTypographyComponent {
  if (typeof component === 'string') {
    return component;
  }

  switch (variant) {
    case CoreTypographyVariant.DISPLAY_01_REGULAR:
    case CoreTypographyVariant.DISPLAY_01_SEMI_BOLD:
    case CoreTypographyVariant.DISPLAY_01_EXTRA_BOLD:
      return 'h1';

    case CoreTypographyVariant.DISPLAY_02_REGULAR:
    case CoreTypographyVariant.DISPLAY_02_SEMI_BOLD:
    case CoreTypographyVariant.DISPLAY_02_EXTRA_BOLD:
      return 'h2';

    case CoreTypographyVariant.DISPLAY_03_Medium:
    case CoreTypographyVariant.DISPLAY_03_BOLD:
      return 'h3';

    case CoreTypographyVariant.HEADLINE_01_MEDIUM:
    case CoreTypographyVariant.HEADLINE_01_BOLD:
      return 'h4';

    case CoreTypographyVariant.HEADLINE_02_MEDIUM:
      return 'h5';

    case CoreTypographyVariant.TITLE_01_MEDIUM:
    case CoreTypographyVariant.TITLE_01_BOLD:
    case CoreTypographyVariant.TITLE_02_MEDIUM:
    case CoreTypographyVariant.TITLE_02_BOLD:
      return 'h6';

    case CoreTypographyVariant.TITLE_03_MEDIUM:
    case CoreTypographyVariant.TITLE_03_BOLD:
    case CoreTypographyVariant.BODY_01_REGULAR:
    case CoreTypographyVariant.BODY_01_MEDIUM:
    case CoreTypographyVariant.BODY_01_BOLD:
    case CoreTypographyVariant.BODY_02_REGULAR:
    case CoreTypographyVariant.BODY_02_MEDIUM:
    case CoreTypographyVariant.BODY_02_BOLD:
    case CoreTypographyVariant.LABEL_01_REGULAR:
    case CoreTypographyVariant.LABEL_01_MEDIUM:
    case CoreTypographyVariant.LABEL_01_BOLD:
      return 'p';
  }
}

export const MOCK_TEST_VARIANT_COMPONENT = [
  {
    variant: CoreTypographyVariant.DISPLAY_01_REGULAR,
    expected: 'h1',
  },
  {
    variant: CoreTypographyVariant.DISPLAY_02_REGULAR,
    expected: 'h2',
  },
  {
    variant: CoreTypographyVariant.DISPLAY_03_Medium,
    expected: 'h3',
  },
  {
    variant: CoreTypographyVariant.HEADLINE_01_MEDIUM,
    expected: 'h4',
  },
  {
    variant: CoreTypographyVariant.HEADLINE_02_MEDIUM,
    expected: 'h5',
  },
  {
    variant: CoreTypographyVariant.TITLE_01_MEDIUM,
    expected: 'h6',
  },
  {
    variant: CoreTypographyVariant.TITLE_03_MEDIUM,
    expected: 'p',
  },
  {
    variant: CoreTypographyVariant.BODY_01_REGULAR,
    expected: 'p',
  },
  {
    variant: CoreTypographyVariant.LABEL_01_REGULAR,
    expected: 'p',
  },
];
