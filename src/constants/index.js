
export const display = `.container {
  display: flex; /* or inline-flex */
}
`;

export const flex_direction = `.container {
  flex-direction: row | row-reverse | column | column-reverse;
}`;

export const flex_wrap = `.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}`;

export const flex_flow = `.container {
  flex-flow: column wrap;
}`;

export const justify_content = `.container {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right ... + safe | unsafe;
}`;

export const align_items = `.container {
  align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
}`;

export const align_content = `.container {
  align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
}`;

export const gap = `.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}`;

export const order = `.item {
  order: 5; /* default is 0 */
}`;

export const flex_grow = `.item {
  flex-grow: 4; /* default 0 */
}`;

export const flex_shrink = `.item {
  flex-shrink: 3; /* default 1 */
}`;

export const flex_basis = `.item {
  flex-basis:  | auto; /* default auto */
}`;

export const flex = `.item {
  flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
}`;

export const align_self = `.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}`;