import LineItem from './line_item'

export default class RepairPO {
  line_items: LineItem[];

  constructor() {
    this.line_items = [];
  }
}
