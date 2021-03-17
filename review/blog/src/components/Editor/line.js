/**
 * Created by icon on 2021/3/16
 */
import { Quill } from 'react-quill';

const Embed = Quill.import('blots/block/embed');
class AddLineSolid extends Embed {
  static create(value) {
    let node = super.create(value);
    node.setAttribute('style', "height: 1px;background: none;border: 1px solid rgba(0,0,0,.06);");
    return node;
  }
}

AddLineSolid.blotName = 'line-solid';
AddLineSolid.className = 'line-solid';
AddLineSolid.tagName = 'div';

Quill.register({
  'formats/line-solid': AddLineSolid,
});

class AddLineDashed extends Embed {
  static create(value) {
    let node = super.create(value);
    node.setAttribute('style', "height: 1px;background: none;border: 1px dashed rgba(0,0,0,.06);");
    return node;
  }
}

AddLineDashed.blotName = 'line-dashed';
AddLineDashed.className = 'line-dashed';
AddLineDashed.tagName = 'div';

Quill.register({
  'formats/line-dashed': AddLineDashed,
});
