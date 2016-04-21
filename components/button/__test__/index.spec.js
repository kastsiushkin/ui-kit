import expect from 'expect';
import style from '../../button/style';
import utils from '../../utils/testing';
import Button from '../Button';

describe('Button', function () {
  let button;

  describe('#render', function () {
    it('uses Button and Button--primary by default', function () {
      button = utils.shallowRenderComponent(Button);

      expect(button.props.className).toContain(style.Button);
      expect(button.props.className).toContain(style['Button--primary']);
    });

    it('renders Secondary button with Button--secondary style', function () {
      button = utils.shallowRenderComponent(Button, { secondary: true });

      expect(button.props.className).toContain(style.Button);
      expect(button.props.className).toContain(style['Button--secondary']);
    });

    it('renders fullWidth button with Button--fullWidth style', function () {
      button = utils.shallowRenderComponent(Button, { fullWidth: true });
      expect(button.props.className).toContain(style.Button);
      expect(button.props.className).toContain(style['Button--fullWidth']);
    });

    it('renders disabled Button', function () {
      button = utils.shallowRenderComponent(Button, { disabled: true });
      expect(button.props.className).toContain(style.Button);
      expect(button.props.disabled).toExist();
    });

    it('renders label as Children', function () {
      button = utils.shallowRenderComponent(Button, { label: 'My Label' });
      expect(button.props.className).toContain(style.Button);
      expect(button.props.children).toInclude('My Label');
    });

  });
});
