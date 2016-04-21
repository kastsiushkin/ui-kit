import expect from 'expect';
import style from '../../checkbox/style';
import utils from '../../utils/testing';
import Checkbox from '../Checkbox';

describe('Checkbox', function () {
  let checkbox;

  describe('#render', function () {
    it('uses Checkbox by default', function () {
      checkbox = utils.shallowRenderComponent(Checkbox);

      expect(checkbox.props.className).toContain(style.Checkbox);
    });

    it('renders disabled Checkbox', function () {
      checkbox = utils.renderComponent(Checkbox, { disabled: true });
      expect(checkbox.props.disabled).toExist();
    });

    it('renders selected Checkbox', function () {
      checkbox = utils.renderComponent(Checkbox, { selected: true });
      expect(checkbox.props.selected).toExist();
    });

  });
});
