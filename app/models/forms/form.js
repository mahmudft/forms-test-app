import Model from '../model';
import {attr} from '@ember-data/model'

export default class Form extends Model {

  constructor(owner, { type, definition }) {
    super(owner);
    this.type = type;
    this.definition = definition;
  }
  @attr("string") bookType
  @attr("string") colorType
  @attr("number") pageCount
  @attr("string") contentPaper
  @attr('string') weight



  get serialized() {
    let { type, definition } = this;
    return { type, definition };
  }

}
