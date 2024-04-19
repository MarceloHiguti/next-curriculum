import { render, screen } from '@portal/testing';

import { CoreImage } from './CoreImage';

describe('CoreImage', () => {
  test('should render CoreImage', () => {
    render(<CoreImage src="img.jpg" />);

    expect(screen.getByRole('img', { name: 'LoadingIcon' })).toBeInTheDocument();
  });
});
