import Claim from '../claim';
import RepairPO from '../repair_po';
import LineItem from '../line_item';

  test('claim is set up properly', () => {
    var description = "Replacement part for soap dispenser";
    var line_item1 = new LineItem("PARTS", 45.0, description);
    var line_item2 = new LineItem("LABOR", 50.0, "1 hour repair");
    var repair_po  = new RepairPO();
    repair_po.line_items.push(line_item1);
    repair_po.line_items.push(line_item2);

    var claim = new Claim(100.0, new Date(2010, 5, 8));
    claim.repair_pos.push(repair_po);

    expect(claim.amount).toBe(100.0);
    expect(claim.failure_date).toStrictEqual(new Date(2010, 5, 8));
    expect(claim.repair_pos[0].line_items[0].type).toBe('PARTS');
    expect(claim.repair_pos[0].line_items[0].amount).toBe(45.0);
    expect(claim.repair_pos[0].line_items[0].description).toBe(description);
  });

  // TODO: Add claim equality based on unique IDs, not properties
