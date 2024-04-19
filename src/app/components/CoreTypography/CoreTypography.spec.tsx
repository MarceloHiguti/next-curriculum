import { render, screen } from '@portal/testing';

import { CoreTypography } from './CoreTypography';
import { CoreTypographyVariant } from './CoreTypography.model';
import { getComponentByVariant, MOCK_TEST_VARIANT_COMPONENT } from './CoreTypography.util';

describe('CoreTypography', () => {
  const expectedTitle = 'typography content';

  test('should render given text', () => {
    render(<CoreTypography>{expectedTitle}</CoreTypography>);

    const displayedText = screen.getByText(expectedTitle);
    expect(displayedText.innerHTML).toEqual(expectedTitle);
  });

  test('should render with right component', () => {
    render(<CoreTypography component="h2">{expectedTitle}</CoreTypography>);

    const h2Element = screen.getByRole('heading', { level: 2 });
    expect(h2Element).toBeInTheDocument();
  });

  test('should render right headline-01-bold variant', () => {
    render(<CoreTypography variant={CoreTypographyVariant.HEADLINE_01_BOLD}>{expectedTitle}</CoreTypography>);

    const typographyHeadline01BoldComponent = screen.getByTestId(`core-typography-${expectedTitle}`);
    expect(typographyHeadline01BoldComponent).toHaveClass('coreTypography__headline01Bold');
  });

  test('should render right label-01-medium variant', () => {
    render(<CoreTypography variant={CoreTypographyVariant.LABEL_01_MEDIUM}>{expectedTitle}</CoreTypography>);

    const typographyLabel01MediumComponent = screen.getByTestId(`core-typography-${expectedTitle}`);
    expect(typographyLabel01MediumComponent).toHaveClass('coreTypography__label01Medium');
  });

  test('should apply custom css', () => {
    const { container } = render(<CoreTypography customClassName="customClassName">{expectedTitle}</CoreTypography>);

    expect(container.firstChild).toHaveClass('customClassName');
  });

  test.each(MOCK_TEST_VARIANT_COMPONENT)(
    'When given the variant $variant, it should render the right component',
    ({ variant, expected }) => {
      expect(getComponentByVariant({ variant })).toEqual(expected);
    }
  );
});
