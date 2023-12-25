import './App.css';

function App() {
  return (
    <div>
        <header>
            <h1>CSS Flexbox</h1>
        </header>
        <div id='body-container'>
            <div className='two-column'>
                <section>
                    <h2>Properties for the Parent (flex container)</h2>
                    <div className='column-item-dark'>
                        <h3>display</h3>
                        <p>This defines a flex container. It can be inline or block depending on the given value. It enables a flex context for all its direct children.</p>
                    </div>
                    <div className='column-item-dark'>
                        <h3>flex-direction</h3>
                        <p>This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.</p>
                        <ul>
                            <li>row (default): left to right in ltr; right to left in rtl</li>
                            <li>row-reverse: right to left in ltr; left to right in rtl</li>
                            <li>column: same as row but top to bottom</li>
                            <li>column-reverse: same as row-reverse but bottom to top</li>
                        </ul>
                    </div>
                    <div className='column-item-dark'>
                        <h3>flex-wrap</h3>
                        <p>By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.</p>
                        <ul>
                            <li>nowrap (default): all flex items will be on one line</li>
                            <li>wrap: flex items will wrap onto multiple lines, from top to bottom.</li>
                            <li>wrap-reverse: flex items will wrap onto multiple lines from bottom to top.</li>
                        </ul>
                    </div>
                    <div className='column-item-dark'>
                        <h3>flex-flow</h3>
                        <p>This is a shorthand for the flex-direction and flex-wrap properties, which together define the flex container’s main and cross axes. The default value is row nowrap.</p>
                    </div>
                    <div className='column-item-dark'>
                        <h3>justify-content</h3>
                        <p>This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.</p>
                        <ul>
                            <li>flex-start (default): items are packed toward the start of the flex-direction.</li>
                            <li>flex-end: items are packed toward the end of the flex-direction.</li>
                            <li>start: items are packed toward the start of the writing-mode direction.</li>
                            <li>end: items are packed toward the end of the writing-mode direction.</li>
                            <li>left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.</li>
                            <li>right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like end.</li>
                            <li>center: items are centered along the line</li>
                            <li>space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line</li>
                            <li>space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.</li>
                            <li>space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.</li>
                        </ul>
                    </div>
                    <div className='column-item-dark'>
                        <h3>align-items</h3>
                        <p>This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis (perpendicular to the main-axis).</p>
                        <ul>
                            <li>stretch (default): stretch to fill the container (still respect min-width/max-width)</li>
                            <li>flex-start / start / self-start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.</li>
                            <li>flex-end / end / self-end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.</li>
                            <li>center: items are centered in the cross-axis</li>
                            <li>baseline: items are aligned such as their baselines align</li>
                        </ul>
                    </div>
                    <div className='column-item-dark'>
                        <h3>align-content</h3>
                        <p>This aligns a flex container’s lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.</p>
                        <p>This property only takes effect on multi-line flexible containers, where flex-wrap is set to either wrap or wrap-reverse). A single-line flexible container (i.e. where flex-wrap is set to its default value, no-wrap) will not reflect align-content.</p>
                        <ul>
                            <li>normal (default): items are packed in their default position as if no value was set.</li>
                            <li>flex-start / start: items packed to the start of the container. The (more supported) flex-start honors the flex-direction while start honors the writing-mode direction.</li>
                            <li>flex-end / end: items packed to the end of the container. The (more support) flex-end honors the flex-direction while end honors the writing-mode direction.</li>
                            <li>center: items centered in the container</li>
                            <li>space-between: items evenly distributed; the first line is at the start of the container while the last one is at the end</li>
                            <li>space-around: items evenly distributed with equal space around each line</li>
                            <li>space-evenly: items are evenly distributed with equal space around them</li>
                            <li>stretch: lines stretch to take up the remaining space</li>
                        </ul>
                    </div>
                    <div className='column-item-dark'>
                        <h3>gap, row-gap, column-gap</h3>
                        <p>The gap property explicitly controls the space between flex items. It applies that spacing only between items not on the outer edges.</p>
                        <p>The behavior could be thought of as a minimum gutter, as if the gutter is bigger somehow (because of something like justify-content: space-between;) then the gap will only take effect if that space would end up smaller.</p>
                        <p>It is not exclusively for flexbox, gap works in grid and multi-column layout as well.</p>
                    </div>
                </section>
                <section>
                    <h2>Properties for the Children
                        (flex items)</h2>
                    <div className='column-item-light'>
                        <h3>order</h3>
                        <p>By default, flex items are laid out in the source order. However, the order property controls the order in which they appear in the flex container.</p>
                        <p>Items with the same order revert to source order.</p>
                    </div>
                    <div className='column-item-light'>
                        <h3>flex-grow</h3>
                        <p>This defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.</p>
                        <p>If all items have flex-grow set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).</p>
                        <p>Negative numbers are invalid.</p>
                    </div>
                    <div className='column-item-light'>
                        <h3>flex-shrink</h3>
                        <p>This defines the ability for a flex item to shrink if necessary.</p>
                        <p>Negative numbers are invalid.</p>
                    </div>
                    <div className='column-item-light'>
                        <h3>flex-basis</h3>
                        <p>This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means “look at my width or height property” (which was temporarily done by the main-size keyword until deprecated). The content keyword means “size it based on the item’s content” – this keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren max-content, min-content, and fit-content do.</p>
                        <p>If set to 0, the extra space around content isn’t factored in. If set to auto, the extra space is distributed based on its flex-grow value.</p>
                    </div>
                    <div className='column-item-light'>
                        <h3>flex</h3>
                        <p>This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. The default is 0 1 auto, but if you set it with a single number value, like flex: 5;, that changes the flex-basis to 0%, so it’s like setting flex-grow: 5; flex-shrink: 1; flex-basis: 0%;.</p>
                        <p>It is recommended that you use this shorthand property rather than set the individual properties. The shorthand sets the other values intelligently.</p>
                    </div>
                    <div className='column-item-light'>
                        <h3>align-self</h3>
                        <p>This allows the default alignment (or the one specified by align-items) to be overridden for individual flex items.</p>
                        <p>Please see the align-items explanation to understand the available values.</p>
                        <p>Note that float, clear and vertical-align have no effect on a flex item.</p>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}

export default App;
