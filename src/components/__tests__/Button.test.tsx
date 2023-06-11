import { render } from '@testing-library/react';
import { Button } from 'components';
import renderer from 'react-test-renderer';

describe('Button test', () => {
  test('should render button', () => {
    const { container } = render(
      <Button onClick={() => { return; }} />        
    );
    expect(container.getElementsByTagName('button'));
  });

  test('matches snapshot', () => {
    const tree = renderer.create(
      <Button onClick={() => { return; }} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
