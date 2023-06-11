import { render } from '@testing-library/react';
import { SearchBox, Layout } from 'components';
import renderer from 'react-test-renderer';

describe('SearchBox test', () => {
  test('should render searchbox', () => {
    const { container } = render(
      <Layout><SearchBox /></Layout>        
    );
    expect(container.getElementsByTagName('input'));
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Layout><SearchBox /></Layout>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
