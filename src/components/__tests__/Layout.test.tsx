import { render } from '@testing-library/react';
import { Layout } from 'components';
import renderer from 'react-test-renderer';

describe('Layout test', () => {
  test('should render layout', () => {
    const { container } = render(
      <Layout><></></Layout>
    );
    expect(container).toBeTruthy();
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Layout><></></Layout>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
