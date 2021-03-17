/**
 * Created by icon on 2021/3/16
 */
import { Quill } from 'react-quill';

const Parchment = Quill.import("parchment");

class MarginTopAttributor extends Parchment.Attributor.Class {
  add(node, value) {
    if (value === '+1' || value === '-1') {
      let indent = this.value(node) || 0;
      value = (value === '+1' ? (indent + 1) : (indent - 1));
    }
    if (value === 0) {
      this.remove(node);
      return true;
    } else {
      return super.add(node, value);
    }
  }

  canAdd(node, value) {
    return super.canAdd(node, value) || super.canAdd(node, parseInt(value));
  }

  value(node) {
    return parseInt(super.value(node)) || undefined;  // Don't return NaN
  }
}

let MarginTopClass = new MarginTopAttributor('margin-top', 'ql-margin-top', {
  scope: Parchment.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});

let MarginBottomClass = new MarginTopAttributor('margin-bottom', 'ql-margin-bottom', {
  scope: Parchment.Scope.BLOCK,
  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
});

Quill.register({
  'formats/margin-top': MarginTopClass,
  'formats/margin-bottom': MarginBottomClass,
}, true);

