import { render } from '@testing-library/react';
import { List } from 'components';
import renderer from 'react-test-renderer';

describe('List test', () => {
  test('should render button', () => {
    const { container } = render(
      <List list={[{ title: 'test', child: [{ title: 'test', subTitle: 'test', rating: 1 }] }]} />
    );
    expect(container.getElementsByTagName('button'));
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <List list={[{ title: 'test', child: [{ title: 'test', subTitle: 'test', rating: 1 }] }]} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
