/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  (this.width = width),
    (this.height = height),
    (this.getArea = () => this.width * this.height);
  //   return { width, height, getArea: () => width * height };
}

/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}

/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Rectangle.prototype, '{"radius":10}');
 *    r.constructor(4,7)
 *    r // Object { radius: 12, width: 4, height: 7, getArea: getArea() }
 *    q.getArea() // 28
 */
function fromJSON(proto, json) {
  const obj = JSON.parse(json);
  return Object.setPrototypeOf(obj, proto);
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  result: "",

  objectCreate: function (value, sep = "", idx) {
    const obj = Object.create(cssSelectorBuilder);
    obj.idx = idx;
    obj.result = this.result + sep + value;
    return obj;
  },

  element(value) {
    idx = 1;
    this.checkOrder(idx);
    const sep = "";
    return this.objectCreate(value, sep, idx);
  },

  id(value) {
    idx = 2;
    this.checkOrder(idx);
    const sep = "#";
    return this.objectCreate(value, sep, idx);
  },

  class(value) {
    idx = 3;
    this.checkOrder(idx);
    const sep = ".";
    return this.objectCreate(value, sep, idx);
  },

  attr(value) {
    idx = 4;
    this.checkOrder(idx);
    const obj = Object.create(cssSelectorBuilder);
    obj.idx = idx;
    obj.result = `${this.result}[${value}]`;
    return obj;
  },

  pseudoClass(value) {
    idx = 5;
    this.checkOrder(idx);
    const sep = "::";
    return this.objectCreate(value, sep, idx);
  },

  pseudoElement(value) {
    idx = 6;
    this.checkOrder(idx);
    const sep = "#";
    return this.objectCreate(value, sep, idx);
  },

  combine(selector1, combinator, selector2) {
    return this.objectCreate(
      `${selector1.result} ${combinator} ${selector2.result}`
    );
  },

  stringify() {
    return JSON.stringify(this.result);
  },

  checkOrder: function (idx) {
    console.log("halo", idx);
    console.log("this.idx>>", this.idx);
    if (this.idx > idx) throw new Error("oops... Selector's order Error!!!");
    if (this.idx === idx && (idx === 1 || idx === 2 || idx === 6))
      throw new Error(
        "oops... Element, id and pseudo-element should not occur more then one's!!!"
      );
  },
};
const builder = cssSelectorBuilder;
console
  .log
  // builder
  // builder.element("div")
  // builder.element("div").id("main").stringify()
  // builder.id("main").element("div")
  // builder.element("div").id("main")
  // builder.class("bg-red")
  // builder.class("bg-red").stringify()
  // builder.attr('href$=".png"').stringify()
  // builder.element("div").attr('href$=".png"').element("div")
  // builder.id("main").class("container").class("editable").stringify()
  // builder.element("a").attr('href$=".png"').pseudoClass("focus").stringify()
  /*   builder
    .combine(
      builder.element("div").id("main").class("container").class("draggable"),
      "+",
      builder.combine(
        builder.element("table").id("data"),
        "~",
        builder.combine(
          builder.element("tr").pseudoClass("nth-of-type(even)"),
          " ",
          builder.element("td").pseudoClass("nth-of-type(even)")
        )
      )
    )
    .stringify() */
  ();
